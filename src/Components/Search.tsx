'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Search() {
    const [keyword, setKeyword] = React.useState('')

    function searchFn() {
        const router = useRouter()

        router.push(`/?keyword=${keyword}`)
    }
    return <form
        className="flex items-center gap-2 rounded sm:rounded-tr-xl p-2 text-sm bg-emerald-700"
        onSubmit={searchFn}
    >
        <label htmlFor="search"><BsSearch /></label>

        <input
            className="border-0 outline-0 bg-emerald-700 w-[40px] sm:w-[120px] md:w-[180px] sm2:focus:w-[200px] transition-all duration-300"
            id="search"
            type='text'
            placeholder="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
        />
    </form>
}