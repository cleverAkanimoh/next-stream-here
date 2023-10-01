'use client'

import { chatUsers } from '@/lib/db'
import { useSearchParams } from 'next/navigation'

export default function ChatUserMsg() {

    const searchParams = useSearchParams()

    const user = searchParams.get('user')

    const displayChats = user ? chatUsers.find(x => x.name === user) : { notFound: true, msg: '' }

    return <div>{displayChats?.msg}</div>
}