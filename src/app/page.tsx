'use client'

import useTick from "@/Hooks/useTick";
import { companyName } from "@/lib/variables";

type HomePageProps = {
  searchParams: [key: string] | string | string[] | undefined
}

export default function Homepage(searchParams: HomePageProps) {

  let text = useTick(['entertaining. ', 'creative. ', 'awesome. '], 3000, 500)

  return <article className="font-sans">

    <header className="text-xl text-center">
      <h1>Welcome to {companyName},</h1>
      <p> your one stop for everything {text}|</p>
    </header>

  </article>
}