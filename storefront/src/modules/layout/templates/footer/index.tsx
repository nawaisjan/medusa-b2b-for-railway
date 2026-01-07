
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="footer-section bg-gray-50 print:hidden border-t border-gray-100">
      <div className="content-container flex flex-col md:flex-row justify-between items-start space-y-4 py-12">
        {/* Logo and Address Column */}
        <div className="footer-logo-adress w-full md:w-1/3 space-y-6 pr-4">
          <div className="footer-logo w-44">
            {/* Using standard img for external asset as requested */}
            <img src="/logo.png" alt="Footer Logo" className="w-full h-auto" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            The platform to get product from Chaina to Afghanistan. You can pay
            product price in Afghanistan Afghani (AFN).
          </p>
          <div className="adress-phone space-y-3 text-sm text-gray-700">
            <div className="adress-ali2 flex items-start space-x-3">
              <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded bg-orange-500 text-white shrink-0">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="location-dot"
                  className="w-3 h-3 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
                  ></path>
                </svg>
              </div>
              <address className="not-italic">
                Plot 1020, Road 9, Avenue 9,
                <br /> Kabul, Afghanistan
              </address>
            </div>
            <div className="phone-m-ali2 flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-orange-500 text-white shrink-0">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-flip"
                  className="w-3 h-3 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <a href="tel:+88 09666 78 3333" className="hover:text-orange-500 transition-colors">+88 09666 78 3333</a>
                <span className="text-gray-500 text-xs">(10am - 6pm)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Column */}
        <div className="compant-dtls w-full md:w-1/6 md:pl-4">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <LocalizedClientLink className="hover:text-orange-500 transition-colors" href="/about-us">
                About Us
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink className="hover:text-orange-500 transition-colors" href="/about-moveon">
                About MoveOn - Ship For Me
              </LocalizedClientLink>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="support-dtls w-full md:w-1/6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <button className="flex items-center hover:text-orange-500 transition-colors text-left">
                <span>Help Center</span>
              </button>
            </li>
            <li>
              <LocalizedClientLink className="hover:text-orange-500 transition-colors" href="/terms-conditions">
                Terms and Conditions
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink className="hover:text-orange-500 transition-colors" href="/privacy-policy">
                Privacy Policy
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink className="hover:text-orange-500 transition-colors" href="/refund-policy">
                Refund Policy
              </LocalizedClientLink>
            </li>
          </ul>
        </div>

        {/* Follow Us & Payment Column */}
        <div className="follow-dtls w-full md:w-1/4 space-y-6">
          <div className="folow-us-ali2">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h4>
            <div className="social-icon flex space-x-3">
              <a
                href="#"
                className="f-blue flex justify-center items-center bg-[#3b5998] w-9 h-9 text-center text-white rounded hover:opacity-90 transition-opacity"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-4 h-4 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="y-red flex justify-center items-center bg-[#FF0000] w-9 h-9 text-center text-white rounded hover:opacity-90 transition-opacity"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  className="w-4 h-4 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="t-magento flex justify-center items-center bg-[#1DA1F2] w-9 h-9 text-center text-white rounded hover:opacity-90 transition-opacity"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="w-4 h-4 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="paymentm-ali2">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h4>
            <div className="pay-method-logo flex justify-start items-start flex-wrap gap-2">
              {[
                "visa.png",
                "MasterCard.png",
                "amex.png",
                "cash.png",
                "Bank.png"
              ].map((img, i) => (
                <div key={i} className="w-14 h-9 flex justify-center items-center border border-gray-200 rounded bg-white overflow-hidden p-1">
                  <img src={`https://ali2bd.com/assets/payment/${img}`} className="max-w-full max-h-full object-contain" alt="Payment" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block py-6 bg-gray-200">
        <div className="content-container text-center">
          <Text className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Afghanchainashopingcenter. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
