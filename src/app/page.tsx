'use client'

import useTick from "@/Hooks/useTick";
import { PaginationControl } from "@/components";
import { data } from "@/lib";
import { companyName } from "@/lib/variables";
import { useSearchParams } from "next/navigation";


export default function Homepage({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const searchQuery = useSearchParams()
  let text = useTick(['entertaining. ', 'creative. ', 'awesome. '], 3000, 500)

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '4'

  const startPage = (Number(page) - 1) * Number(per_page)
  const endPage = startPage + Number(per_page)

  let displayedItems = searchQuery.get('query') != undefined ? data.filter((x) => x.name === searchQuery.get('query')) : data

  const sliced_data = displayedItems.slice(startPage, endPage)

  return <article className="sm2:my-4 font-sans">

    <header className="text-xl text-center">
      <h1>Welcome to {companyName},</h1>
      <p> your one stop for everything {text}|</p>
    </header>

    <div className="grid gap-4 sm:grid-cols-2 capitalize mt-8">
      {
        sliced_data.map((x, y) => <div key={y} className="flex flex-col items-center justify-center h-[200px] border-2 rounded-xl gap-3 bg-emerald-900 p-4">
          <span className="text-xl font-bold font-mono">{x.name}</span>
          <span>{x.serial}</span>
        </div>)
      }
    </div>
    <PaginationControl />
  </article>
}