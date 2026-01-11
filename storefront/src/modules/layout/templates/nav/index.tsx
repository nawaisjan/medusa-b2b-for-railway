
import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import { Photo } from "@medusajs/icons"
import { FilePlus } from "lucide-react"
import { Suspense } from "react"
import SearchBox from "@/modules/search/components/search-box/search-box"

export async function NavigationHeader() {
  const customer = await retrieveCustomer().catch(() => null)
  const cart = await retrieveCart()

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white font-sans">
      {/* ================= TOP BAR ================= */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center py-2 text-xs text-gray-600">
          <a href="#" className="hover:text-orange-500 transition-colors">
            Support Center
          </a>

          <div className="flex items-center gap-6">
            <LocalizedClientLink
              href="/account/wishlist"
              className="hover:text-orange-500 transition-colors"
            >
              Wish List
            </LocalizedClientLink>

            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
              <span className="text-lg leading-none">🇧🇩</span>
              <span>/</span>
              <span>English (US)</span>
              <span>/</span>
              <span>BDT</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-gray-200">
        {/* ============ MOBILE HEADER ============ */}
        <div className="flex justify-between items-center py-3 px-4 md:hidden bg-gray-50">
          <LocalizedClientLink href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="Ali2BD"
              className="h-10 w-auto object-contain"
            />
          </LocalizedClientLink>

          <div className="flex items-center space-x-4">
            <Suspense>
              <CartButton />
            </Suspense>

            <LocalizedClientLink href="/account/notifications">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
              </svg>
            </LocalizedClientLink>

            <Suspense>
              <AccountButton customer={customer} />
            </Suspense>
          </div>
        </div>

        {/* ============ DESKTOP HEADER ============ */}
        <div className="hidden md:flex items-center justify-between max-w-[1440px] mx-auto px-4 py-1 gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LocalizedClientLink href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="afghanchinashoppingcenter"
                className="h-16 w-auto object-contain"
              />
            </LocalizedClientLink>
          </div>

          {/* Search Bar (flex-grow fills remaining space) */}
          <div className="flex-1 mx-10 max-w-4xl">
            <SearchBox />
          </div>

          {/* Actions (Cart, Quote, Account) */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <Suspense>
              <CartButton />
            </Suspense>

            <RequestQuotePrompt>
              <button className="flex gap-1.5 items-center rounded-2xl bg-none shadow-none border-none hover:bg-neutral-100 px-2 py-1">
                <FilePlus className="text-orange-500" />
                <span className="hidden small:inline-block">Quote</span>
              </button>
            </RequestQuotePrompt>

            <Suspense>
              <AccountButton customer={customer} />
            </Suspense>
          </div>
        </div>
      </header>
    </div>
  )
}
