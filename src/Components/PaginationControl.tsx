'use client'

import { data } from "@/lib"
import { useRouter, useSearchParams } from "next/navigation"

const PaginationControl = () => {



  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const perPage = searchParams.get('per_page') ?? '4'

  function handlePrevClick() {
    router.push(`/?page=${Number(page) - 1}&per_page=${perPage}`)
  }

  function handleNextClick() {
    router.push(`/?page=${Number(page) + 1}&per_page=${perPage}`)
  }

  return (
    <div className="h-16 flex items-center justify-center gap-3 my-5">
      <button
        onClick={handlePrevClick}
        className={``}
        disabled={page === '1'}
      >prev</button>

      <span>{page} / {Math.ceil(data.length / Number(perPage))}</span>

      <button
        onClick={handleNextClick}
        className={``}
        disabled={Number(page) === Math.ceil(data.length / Number(perPage))}
      >next</button>
    </div>
  )
}

export default PaginationControl;