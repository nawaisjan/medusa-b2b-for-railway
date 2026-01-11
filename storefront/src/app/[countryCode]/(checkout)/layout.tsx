import Footer from "@/modules/layout/templates/footer"
import { NavigationHeader } from "@/modules/layout/templates/nav"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative">
      <NavigationHeader />
      <div className="relative bg-neutral-100" data-testid="checkout-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}
