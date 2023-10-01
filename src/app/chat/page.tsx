'use client'

import ChatUserMsg from '@/components/chat/ChatUserMsg';
import { useSearchParams } from 'next/navigation';

export default function Chat() {

  const searchParams = useSearchParams()

  const user = searchParams.get('user')
  
  const displayChats = user == null ? <div className='flex flex-col items-center justify-center bg-emerald-900 h-60 w-60 rounded-full'><span className='text-lg'>no open chats yet</span><small>click on any user</small></div>: <ChatUserMsg />

  return [displayChats]
}