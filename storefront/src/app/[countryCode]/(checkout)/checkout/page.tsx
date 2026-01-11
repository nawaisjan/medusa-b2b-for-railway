import { retrieveCart, updateCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import { listCartShippingMethods } from "@/lib/data/fulfillment"
import { listCartPaymentMethods } from "@/lib/data/payment"
import Wrapper from "@/modules/checkout/components/payment-wrapper"
import NewBillingForm from "@/modules/checkout/components/new-billing-form"
import NewOrderSummary from "@/modules/checkout/components/new-order-summary"
import ApprovalStatusBanner from "@/modules/cart/components/approval-status-banner"
import SignInPrompt from "@/modules/cart/components/sign-in-prompt"
import Company from "@/modules/checkout/components/company"
import { B2BCart } from "@/types/global"
import { ApprovalStatusType } from "@/types"
import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { getRegion } from "@/lib/data/regions"

export const metadata: Metadata = {
  title: "Checkout",
}

export default async function Checkout({
  params,
  searchParams,
}: {
  params: { countryCode: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { countryCode } = params
  const cartId = searchParams?.cartId as string
  const cart = (await retrieveCart(cartId)) as B2BCart

  if (cart && !cart.region_id && countryCode) {
    // Self-healing: Update cart with region if missing
    const region = await getRegion(countryCode)
    if (region) {
      await updateCart({ region_id: region.id })
      // Refresh page to load payment methods correctly
      redirect(`/${countryCode}/checkout?cartId=${cart.id}`)
    }
  }

  if (!cart) {
    return notFound()
  }

  const customer = await retrieveCustomer()
  const shippingMethods = await listCartShippingMethods(cart.id)
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "")

  if (!shippingMethods || !paymentMethods) {
    return notFound()
  }

  return (
    <Wrapper cart={cart}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* B2B Features - Show at top if needed */}
        <div className="mb-6 space-y-4">
          {!customer && <SignInPrompt />}

          {cart.approval_status &&
            cart.approval_status.status !== ApprovalStatusType.APPROVED && (
              <ApprovalStatusBanner cart={cart} />
            )}

          {cart?.company && <Company cart={cart} />}
        </div>

        {/* Main Checkout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Billing Form */}
          <div className="order-2 lg:order-1">
            <NewBillingForm
              cart={cart}
              customer={customer}
              availableShippingMethods={shippingMethods}
            />
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-1 lg:order-2">
            <NewOrderSummary
              cart={cart}
              availablePaymentMethods={paymentMethods}
              availableShippingMethods={shippingMethods}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
