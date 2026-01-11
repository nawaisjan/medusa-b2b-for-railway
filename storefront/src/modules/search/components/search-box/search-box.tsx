"use client"

import { MagnifyingGlass, XMark, Spinner } from "@medusajs/icons"
import { useRouter, useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { listProducts } from "@/lib/data/products"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { convertToLocale } from "@/lib/util/money"

const SearchBox = () => {
    const router = useRouter()
    const { countryCode } = useParams()
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<HttpTypes.StoreProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLFormElement>(null)
    const [debouncedQuery, setDebouncedQuery] = useState("")

    // Debounce effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 300)

        return () => clearTimeout(timer)
    }, [query])

    // Search effect
    useEffect(() => {
        const fetchResults = async () => {
            if (debouncedQuery.length < 1) {
                setResults([])
                return
            }

            setIsLoading(true)
            try {
                // Determine country code - fallback to 'us' or 'pk' if undefined
                // useParams returns string | string[] | undefined
                const currentCountry = (Array.isArray(countryCode) ? countryCode[0] : countryCode) || "us"

                const { response } = await listProducts({
                    countryCode: currentCountry,
                    queryParams: {
                        q: debouncedQuery,
                        limit: 5,
                    },
                })
                setResults(response.products)
                setIsOpen(true)
            } catch (error) {
                console.error("Search error:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchResults()
    }, [debouncedQuery, countryCode])

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query) {
            router.push(`/store?q=${query}`)
            setIsOpen(false)
        }
    }

    const clearSearch = () => {
        setQuery("")
        setResults([])
        setIsOpen(false)
    }

    const getPrice = (product: HttpTypes.StoreProduct) => {
        // Find best price (implementation similar to preview-price)
        // Simplified: just grab the first calculated price
        const price = product.variants?.[0]?.calculated_price
        if (!price) return null

        return convertToLocale({
            amount: price.calculated_amount,
            currency_code: price.currency_code,
        })
    }

    return (
        <form
            ref={containerRef}
            onSubmit={handleSearch}
            className="w-full relative group z-50"
        >
            <div className="flex items-center relative">
                <input
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        if (e.target.value.length > 0) setIsOpen(true)
                    }}
                    onFocus={() => {
                        if (results.length > 0) setIsOpen(true)
                    }}
                    autoComplete="off"
                    placeholder="Search products..."
                    className="w-full px-4 py-2.5 pl-10 pr-10 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-gray-50 focus:bg-white transition-all shadow-sm"
                />

                {/* Search Icon */}
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                    {isLoading ? (
                        <Spinner className="animate-spin" />
                    ) : (
                        <MagnifyingGlass />
                    )}
                </div>

                {/* Clear Icon */}
                {query && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <XMark className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Dropdown Results */}
            {isOpen && query.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-h-[80vh] flex flex-col">
                    {results.length > 0 ? (
                        <>
                            <div className="py-2">
                                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Products
                                </p>
                                {results.map((product) => (
                                    <LocalizedClientLink
                                        key={product.id}
                                        href={`/products/${product.handle}`}
                                        className="flex items-center gap-4 px-4 py-3 hover:bg-orange-50 transition-colors group/item"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 border border-gray-200">
                                            {product.thumbnail && (
                                                <Image
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                                                    sizes="48px"
                                                />
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 truncate">
                                                {product.title}
                                            </h4>
                                            <p className="text-xs text-orange-600 font-semibold mt-0.5">
                                                {getPrice(product) || "Price unavailable"}
                                            </p>
                                        </div>
                                    </LocalizedClientLink>
                                ))}
                            </div>

                            {/* Actions */}
                            <button
                                type="submit"
                                className="block w-full text-center py-3 text-sm text-orange-600 hover:text-orange-700 font-medium border-t border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                View all results for &quot;{query}&quot;
                            </button>
                        </>
                    ) : !isLoading && (
                        <div className="p-8 text-center text-gray-500">
                            <MagnifyingGlass className="mx-auto w-8 h-8 text-gray-300 mb-2" />
                            <p className="text-sm">No products found for &quot;{query}&quot;</p>
                        </div>
                    )}
                </div>
            )}
        </form>
    )
}

export default SearchBox
