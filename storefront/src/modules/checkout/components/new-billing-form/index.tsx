"use client"

import { B2BCart, B2BCustomer } from "@/types/global"
import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { updateCart } from "@/lib/data/cart"
import { useRouter } from "next/navigation"

// Define B2BCustomer type if not imported correctly or ensuring it matches usage
// The import above suggests it's in types/global, let's assume it works.
// If types are missing, I might need to adjust.

type NewBillingFormProps = {
    cart: B2BCart
    customer: B2BCustomer | null
    availableShippingMethods: HttpTypes.StoreCartShippingOption[]
}

export default function NewBillingForm({
    cart,
    customer,
    availableShippingMethods,
}: NewBillingFormProps) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: customer?.email || cart?.email || "",
        firstName: cart?.shipping_address?.first_name || "",
        lastName: cart?.shipping_address?.last_name || "",
        company: cart?.shipping_address?.company || "",
        country: cart?.shipping_address?.country_code || "pk",
        address1: cart?.shipping_address?.address_1 || "",
        address2: cart?.shipping_address?.address_2 || "",
        city: cart?.shipping_address?.city || "",
        state: cart?.shipping_address?.province || "",
        postcode: cart?.shipping_address?.postal_code || "",
        phone: cart?.shipping_address?.phone || "",
        createAccount: false,
        shipToDifferent: false,
        orderNotes: "",
    })

    const [isSaving, setIsSaving] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    // Auto-save address changes
    const handleBlur = async () => {
        if (isSaving) return

        setIsSaving(true)
        try {
            await updateCart({
                email: formData.email,
                shipping_address: {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    company: formData.company,
                    address_1: formData.address1,
                    address_2: formData.address2,
                    city: formData.city,
                    province: formData.state,
                    postal_code: formData.postcode,
                    country_code: formData.country,
                    phone: formData.phone,
                },
            })
            router.refresh()
        } catch (error) {
            console.error("Error updating cart:", error)
        } finally {
            setTimeout(() => setIsSaving(false), 500)
        }
    }

    return (
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 pb-4 border-b border-gray-200">
                BILLING DETAILS
            </h2>

            <form className="space-y-6">
                {/* Email Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        disabled={!!customer}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-all"
                        placeholder="you@example.com"
                    />
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                {/* Company Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company name{" "}
                        <span className="text-gray-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Your Company Ltd."
                    />
                </div>

                {/* Country / Region */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country / Region <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition-all appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                        }}
                    >
                        <option value="pk">Pakistan</option>
                        <option value="us">United States</option>
                        <option value="gb">United Kingdom</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="af">Afghanistan</option>
                        <option value="cn">China</option>
                    </select>
                </div>

                {/* Street Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street address <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                        <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="House number and street name"
                            required
                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        />
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Town / City */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Town / City <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Karachi"
                    />
                </div>

                {/* State / County */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        State / County <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition-all appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                        }}
                    >
                        <option value="">Select an option...</option>
                        <option value="ny">New York</option>
                        <option value="ca">California</option>
                        <option value="punjab">Punjab</option>
                        <option value="sindh">Sindh</option>
                        <option value="kpk">Khyber Pakhtunkhwa</option>
                        <option value="balochistan">Balochistan</option>
                        <option value="islamabad">Islamabad Capital Territory</option>
                    </select>
                </div>

                {/* Postcode / ZIP */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode / ZIP <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="75500"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="+92 300 1234567"
                    />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Create Account Checkbox */}
                {!customer && (
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                name="createAccount"
                                id="createAccount"
                                checked={formData.createAccount}
                                onChange={handleChange}
                                className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-2 focus:ring-orange-500 cursor-pointer"
                            />
                        </div>
                        <label
                            htmlFor="createAccount"
                            className="ml-3 text-sm text-gray-700 cursor-pointer select-none"
                        >
                            Create an account?
                        </label>
                    </div>
                )}

                {/* Ship to Different Address Checkbox */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            type="checkbox"
                            name="shipToDifferent"
                            id="shipToDifferent"
                            checked={formData.shipToDifferent}
                            onChange={handleChange}
                            className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-2 focus:ring-orange-500 cursor-pointer"
                        />
                    </div>
                    <label
                        htmlFor="shipToDifferent"
                        className="ml-3 text-sm text-gray-700 cursor-pointer select-none"
                    >
                        Ship to a different address?
                    </label>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Order Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Order notes{" "}
                        <span className="text-gray-400 text-xs font-normal">(optional)</span>
                    </label>
                    <textarea
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all"
                    />
                </div>

                {/* Saving Indicator */}
                {isSaving && (
                    <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 px-4 py-2 rounded-lg">
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <span>Saving your information...</span>
                    </div>
                )}
            </form>
        </div>
    )
}
