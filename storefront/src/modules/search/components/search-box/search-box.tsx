"use client"

import { MagnifyingGlass } from "@medusajs/icons"
import { useRouter } from "next/navigation"

const SearchBox = () => {
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const query = formData.get("q") as string
        if (query) {
            router.push(`/store?q=${query}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-full relative">
            <div className="flex items-center">
                <input
                    type="search"
                    name="q"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-orange-500 bg-gray-100 focus:bg-white transition-colors pl-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <MagnifyingGlass />
                </div>
            </div>
        </form>
    )
}

export default SearchBox
