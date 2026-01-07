"use client"

import { Flame, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const HeroBanner = () => {
    return (
        <div className="flex flex-col gap-y-4 h-full">
            {/* Top Menu Bar */}
            <div className="menu-bar-block bg-gray-100 rounded px-4 h-12 flex items-center">
                <div className="flex items-center space-x-6 w-full">
                    <LocalizedClientLink href="/campaigns" className="flex items-center space-x-1.5 hover:text-orange-500 transition-colors">
                        <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span className="font-medium text-sm">Campaigns</span>
                    </LocalizedClientLink>
                    <LocalizedClientLink href="/products/request" className="flex items-center space-x-1.5 hover:text-orange-500 transition-colors">
                        <ShoppingBag className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-sm">Request Product</span>
                    </LocalizedClientLink>
                </div>
            </div>

            {/* Main Banner / Slider */}
            <div className="w-full h-full relative min-h-[480px] rounded-xl overflow-hidden shadow-1xl bg-[#ff6b00]">
                {/* Premium Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-transparent z-10" />

                {/* Background Image positioned to the right */}
                <div className="absolute inset-0 z-0 flex justify-end">
                    <div className="relative w-full lg:w-2/3 h-full">
                        <Image
                            src="/hero-banner.jpeg"
                            alt="Hero Banner"
                            fill
                            style={{ objectFit: "cover", objectPosition: "right center" }}
                            priority
                            className="opacity-90"
                        />
                    </div>
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 flex items-center z-20">
                    <div className="container mx-auto px-8 md:px-16">
                        <div className="text-white space-y-6 max-w-2xl">
                            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide uppercase mb-2">
                                New Arrival
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight drop-shadow-xl">
                                Afghan China Shopping Center
                                <br />
                                <span className="text-orange-100">مرکز خرید افغان چینا</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-orange-50/90 max-w-lg leading-relaxed">
                                The World of Trade, Just a Click Away.
                            </p>
                            <div className="pt-6 flex gap-4">
                                <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-12 py-4 rounded-full text-xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 h-auto">
                                    Shop Now
                                </Button>
                                <Button variant="secondary" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-4 rounded-full text-xl hidden sm:flex h-auto">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle glassmorphism effect at the bottom for extra polish */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
            </div>

            {/* Feature stats below banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-0 rounded">
                <div className="flex flex-col items-center text-center p-2 space-y-2 group bg-gray-50 rounded transition-colors duration-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bag-shopping"
                            className="w-5 h-5 fill-current"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 block">Easy to use</span>
                        <span className="text-xs text-gray-500 mt-1 block px-2 leading-relaxed">
                            Surf, Select, and Purchase. It&apos;s that easy to do Cross Border Shopping now.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center p-2 space-y-2 group bg-gray-50 rounded transition-colors duration-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="truck"
                            className="w-5 h-5 fill-current"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="currentColor"
                                d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 block">Fastest Delivery</span>
                        <span className="text-xs text-gray-500 mt-1 block px-2 leading-relaxed">
                            Doorstep delivery of Cross Border Trade products in 25 days
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center p-2 space-y-2 group bg-gray-50 rounded transition-colors duration-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="headset"
                            className="w-5 h-5 fill-current"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 block">Best Support</span>
                        <span className="text-xs text-gray-500 mt-1 block px-2 leading-relaxed">
                            Feel free to contact us via Call, Live Chat, and Facebook.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center p-2 space-y-2 group bg-gray-50 rounded transition-colors duration-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="handshake-angle"
                            className="w-5 h-5 fill-current"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="currentColor"
                                d="M543.9 251.4c0-1.1 .1-2.2 .1-3.4c0-48.6-39.4-88-88-88l-40 0H320l-16 0 0 0v16 72c0 22.1-17.9 40-40 40s-40-17.9-40-40V128h.4c4-36 34.5-64 71.6-64H408c2.8 0 5.6 .2 8.3 .5l40.1-40.1c21.9-21.9 57.3-21.9 79.2 0l78.1 78.1c21.9 21.9 21.9 57.3 0 79.2l-69.7 69.7zM192 128V248c0 39.8 32.2 72 72 72s72-32.2 72-72V192h80l40 0c30.9 0 56 25.1 56 56c0 27.2-19.4 49.9-45.2 55c8.2 8.6 13.2 20.2 13.2 33c0 26.5-21.5 48-48 48h-2.7c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48H224c-.9 0-1.8 0-2.7-.1l-37.7 37.7c-21.9 21.9-57.3 21.9-79.2 0L26.3 407.6c-21.9-21.9-21.9-57.3 0-79.2L96 258.7V224c0-53 43-96 96-96z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 block">Trusted Refund Policy</span>
                        <span className="text-xs text-gray-500 mt-1 block px-2 leading-relaxed">
                            Shop without Hesitation as you are covered by refund policy
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
