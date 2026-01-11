"use client"

import { B2BCart } from "@/types"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useState } from "react"
import { convertToLocale } from "@/lib/util/money"
import { placeOrder, setShippingMethod, updateLineItem, deleteLineItem, initiatePaymentSession } from "@/lib/data/cart"
import { isManual, isPaypal, isStripe } from "@/lib/constants"
import { useRouter } from "next/navigation"

type NewOrderSummaryProps = {
    cart: B2BCart
    availablePaymentMethods: HttpTypes.StorePaymentProvider[]
    availableShippingMethods: HttpTypes.StoreCartShippingOption[]
}

export default function NewOrderSummary({
    cart,
    availablePaymentMethods,
    availableShippingMethods,
}: NewOrderSummaryProps) {
    const router = useRouter()
    const [selectedShipping, setSelectedShipping] = useState<string>(
        cart.shipping_methods?.[0]?.shipping_option_id || availableShippingMethods[0]?.id || ""
    )
    const [selectedPayment, setSelectedPayment] = useState<string>(
        availablePaymentMethods[0]?.id || ""
    )
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const items = cart?.items || []
    const subtotal = cart?.item_subtotal || 0
    const total = cart?.total || 0

    const handleShippingChange = async (shippingMethodId: string) => {
        setSelectedShipping(shippingMethodId)
        try {
            await setShippingMethod({
                cartId: cart.id,
                shippingMethodId,
            })
            router.refresh()
        } catch (error) {
            console.error("Error setting shipping method:", error)
        }
    }

    const handleQuantityChange = async (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) {
            await deleteLineItem(itemId)
        } else {
            await updateLineItem({
                lineId: itemId,
                data: { quantity: newQuantity },
            })
        }
        router.refresh()
    }

    const handlePlaceOrder = async () => {
        if (!agreedToTerms) {
            alert("Please agree to the terms and conditions")
            return
        }

        if (!cart.shipping_address?.first_name || !cart.shipping_address?.last_name) {
            alert("Please fill in all required billing details")
            return
        }

        if (!cart.email) {
            alert("Please provide an email address")
            return
        }

        if (!selectedShipping) {
            alert("Please select a shipping method")
            return
        }

        if (!selectedPayment) {
            alert("Please select a payment method")
            return
        }

        setIsSubmitting(true)
        try {
            // 1. Check if shipping method is already set on the cart
            const currentShippingMethod = cart.shipping_methods?.[0]
            const needsShippingUpdate = !currentShippingMethod ||
                currentShippingMethod.shipping_option_id !== selectedShipping

            // Only set shipping method if it's not already set or is different
            if (needsShippingUpdate) {
                console.log("Setting shipping method:", selectedShipping)
                await setShippingMethod({
                    cartId: cart.id,
                    shippingMethodId: selectedShipping,
                })
                // Small delay to ensure cart is updated
                await new Promise(resolve => setTimeout(resolve, 500))
            } else {
                console.log("Shipping method already set, skipping")
            }

            // 2. Initialize payment session
            console.log("Initializing payment session:", selectedPayment)
            await initiatePaymentSession(cart, {
                provider_id: selectedPayment,
            })

            // 3. Now place the order
            console.log("Placing order...")
            await placeOrder(cart.id)
        } catch (error: any) {
            if (error.message?.includes("NEXT_REDIRECT") || error.digest?.includes("NEXT_REDIRECT")) {
                throw error
            }
            console.error("Error placing order:", error)
            alert(`Failed to place order: ${error instanceof Error ? error.message : 'Please try again.'}`)
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">YOUR ORDER</h2>

            {/* Product List Header */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-700">PRODUCT</span>
                <span className="text-sm font-medium text-gray-700">SUBTOTAL</span>
            </div>

            {/* Product Items */}
            <div className="space-y-4 mb-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                            {item.thumbnail && (
                                <div className="relative w-16 h-16 bg-white rounded border border-gray-200 flex-shrink-0">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <p className="text-sm text-gray-800 line-clamp-2">
                                    {item.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <button
                                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="text-sm text-gray-700 w-8 text-center">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 ml-4">
                            {convertToLocale({
                                amount: item.subtotal || 0,
                                currency_code: cart.currency_code,
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center py-3 border-t border-gray-200">
                <span className="text-sm text-gray-700">Subtotal</span>
                <span className="text-sm font-medium text-orange-500">
                    {convertToLocale({
                        amount: subtotal,
                        currency_code: cart.currency_code,
                    })}
                </span>
            </div>

            {/* Shipping Options */}
            <div className="py-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">Shipping</p>
                <div className="space-y-2">
                    {availableShippingMethods.map((method) => (
                        <div key={method.id} className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="shipping"
                                    value={method.id}
                                    checked={selectedShipping === method.id}
                                    onChange={(e) => handleShippingChange(e.target.value)}
                                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                    {method.name}
                                </span>
                            </label>
                            <span className="text-sm text-gray-700">
                                {convertToLocale({
                                    amount: method.amount || 0,
                                    currency_code: cart.currency_code,
                                })}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t border-gray-200">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold text-orange-500">
                    {convertToLocale({
                        amount: total,
                        currency_code: cart.currency_code,
                    })}
                </span>
            </div>

            {/* Payment Methods */}
            <div className="py-4 border-t border-gray-200">
                <div className="space-y-3">
                    {availablePaymentMethods.map((method) => (
                        <div key={method.id}>
                            <label className="flex items-start cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method.id}
                                    checked={selectedPayment === method.id}
                                    onChange={(e) => setSelectedPayment(e.target.value)}
                                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 mt-1"
                                />
                                <div className="ml-2 flex-1">
                                    <span className="text-sm font-medium text-gray-900">
                                        {isStripe(method.id)
                                            ? "Credit Card (Stripe)"
                                            : isPaypal(method.id)
                                                ? "PayPal"
                                                : isManual(method.id)
                                                    ? "Direct bank transfer"
                                                    : method.id}
                                    </span>
                                    {isPaypal(method.id) && (
                                        <div className="flex gap-1 mt-1">
                                            <span className="text-xs text-gray-500">PayPal, Visa, Mastercard, Discover</span>
                                        </div>
                                    )}
                                </div>
                            </label>
                            {selectedPayment === method.id && isManual(method.id) && (
                                <div className="ml-6 mt-2 p-3 bg-gray-100 rounded text-xs text-gray-600">
                                    Make your payment directly into our bank account. Please use
                                    your Order ID as the payment reference. Your order won&apos;t
                                    be shipped until the funds have cleared in our account.
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Privacy Policy Notice */}
            <div className="py-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                    Your personal data will be used to process your order, support your
                    experience throughout this website, and for other purposes described
                    in our{" "}
                    <a href="/privacy-policy" className="text-orange-500 hover:underline">
                        privacy policy
                    </a>
                    .
                </p>
            </div>

            {/* Terms and Conditions */}
            <div className="py-4">
                <label className="flex items-start cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                        I have read and agree to the website{" "}
                        <a
                            href="/terms-and-conditions"
                            className="text-orange-500 hover:underline"
                        >
                            terms and conditions
                        </a>{" "}
                        <span className="text-red-500">*</span>
                    </span>
                </label>
            </div>

            {/* Place Order Button */}
            <button
                onClick={handlePlaceOrder}
                disabled={!agreedToTerms || isSubmitting || items.length === 0}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "PLACING ORDER..." : "PLACE ORDER"}
            </button>
        </div>
    )
}
