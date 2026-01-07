"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const SideMenu = () => {
    return (
        <div className="side_menu xl:min-w-max bg-gray-50 border-r">
            <div className="side_menu__header px-4 h-12 flex items-center justify-between bg-orange-500 text-white rounded-t-none">
                <div className="flex items-center space-x-2">
                    <div className="category-icon space-y-1">
                        <div className="w-4 h-px bg-white"></div>
                        <div className="w-4 h-px bg-white"></div>
                        <div className="w-4 h-px bg-white"></div>
                    </div>
                    <h3 className="font-semibold text-lg">Categories</h3>
                </div>
                <LocalizedClientLink href="/categories" className="text-sm">View All</LocalizedClientLink>
            </div>
            <ul className="side_menu__items bg-white pb-1 text-xs xl:text-sm relative divide-y divide-gray-100 border-l border-r border-b">
                {/* Women's Fashion */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Women&apos;s Fashion</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>

                    <div className="hidden group-hover:block absolute left-full top-0 z-50 h-full min-h-[400px]">
                        <div className="w-[750px] min-h-[500px] bg-white rounded-r shadow-xl border-l py-6 px-6 flex flex-wrap content-start gap-y-6 ml-[1px]">

                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="/products?keyword=Women+Fashion" className="font-bold text-base mb-2 block hover:text-orange-500">Women&apos;s Fashion</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="/products?keyword=Women+Dress" className="text-gray-500 hover:text-orange-500 text-sm">Dresses</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?query=Women+Tees" className="text-gray-500 hover:text-orange-500 text-sm">Tees</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Blouse" className="text-gray-500 hover:text-orange-500 text-sm">Blouses & Shirts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Hoodie" className="text-gray-500 hover:text-orange-500 text-sm">Hoodies & Sweatshirts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Sets" className="text-gray-500 hover:text-orange-500 text-sm">Women&apos;s Sets</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Suits" className="text-gray-500 hover:text-orange-500 text-sm">Suits & Blazers</LocalizedClientLink></li>
                                </ul>
                            </div>

                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="/products?keyword=Women+Swimwear" className="font-bold text-base mb-2 block hover:text-orange-500">Swimwear</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="/products?keyword=Women+Bikini" className="text-gray-500 hover:text-orange-500 text-sm">Bikini Sets</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Cover-Ups" className="text-gray-500 hover:text-orange-500 text-sm">Cover-Ups</LocalizedClientLink></li>
                                </ul>
                            </div>

                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="/products?keyword=Women+Bottoms" className="font-bold text-base mb-2 block hover:text-orange-500">Bottoms</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="/products?keyword=Women+Leggings" className="text-gray-500 hover:text-orange-500 text-sm">Leggings</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Skirts" className="text-gray-500 hover:text-orange-500 text-sm">Skirts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Shorts" className="text-gray-500 hover:text-orange-500 text-sm">Shorts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Jeans" className="text-gray-500 hover:text-orange-500 text-sm">Jeans</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Pants" className="text-gray-500 hover:text-orange-500 text-sm">Pants & Capris</LocalizedClientLink></li>
                                </ul>
                            </div>

                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="/products?keyword=Women+Weddings" className="font-bold text-base mb-2 block hover:text-orange-500">Weddings & Events</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="/products?keyword=Women+Wedding+Dresses" className="text-gray-500 hover:text-orange-500 text-sm">Wedding Dresses</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Prom+Dresses" className="text-gray-500 hover:text-orange-500 text-sm">Prom Dresses</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="/products?keyword=Women+Evening+Dresses" className="text-gray-500 hover:text-orange-500 text-sm">Evening Dresses</LocalizedClientLink></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </li>

                {/* Men's Fashion */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Men&apos;s Fashion</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                    <div className="hidden group-hover:block absolute left-full top-0 z-50 h-full min-h-[400px]">
                        <div className="w-[750px] min-h-[500px] bg-white rounded-r shadow-xl border-l py-6 px-6 flex flex-wrap content-start gap-y-6 ml-[1px]">
                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="#" className="font-bold text-base mb-2 block hover:text-orange-500">Men&apos;s Fashion</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">Hoodies & Sweatshirts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">T-Shirts</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">Shirts</LocalizedClientLink></li>
                                </ul>
                            </div>
                            <div className="w-1/3 pr-4">
                                <LocalizedClientLink href="#" className="font-bold text-base mb-2 block hover:text-orange-500">Outerwear</LocalizedClientLink>
                                <ul className="space-y-1">
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">Jackets</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">Sweaters</LocalizedClientLink></li>
                                    <li><LocalizedClientLink href="#" className="text-gray-500 hover:text-orange-500 text-sm">Leather & Suede</LocalizedClientLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Phones & Telecommunications */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Phones & Telecommunications</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Computer, Office & Security */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Computer, Office & Security</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Consumer Electronics */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Consumer Electronics</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Jewelry & Watches */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Jewelry & Watches</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Home, Pet & Appliances */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Home, Pet & Appliances</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Bags & Shoes */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Bags & Shoes</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Toys, Kids & Babies */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Toys, Kids & Babies</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Outdoor Fun & Sports */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Outdoor Fun & Sports</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Beauty, Health & Hair */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Beauty, Health & Hair</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>

                {/* Automobiles & Motorcycles */}
                <li className="group block">
                    <div className="py-2.5 px-4 relative flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-800 group-hover:text-orange-500 font-medium">Automobiles & Motorcycles</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
