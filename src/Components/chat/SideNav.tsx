'use client'

import { useGlobalContext } from '@/context/store'
import { chatUsers } from '@/lib/db'
import Link from 'next/link'
import { BsPersonBadge } from 'react-icons/bs'

export default function ChatSideNav() {

    const { isChatMenuClicked, setIsChatMenuClicked } = useGlobalContext()

    return (
        <div className={`${isChatMenuClicked ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} fixed sm2:sticky top-0 bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all ease-linear duration-300 min-h-full overflow-hidden flex justify-center p-4 sm:w-[220px] sm2:w-[50px] sm2:hover:w-[220px] lg:w-[220px] sm2:m-4 sm2:rounded-md sm2:translate-x-0 group`}>

            <div className='p-2 mt-12 sm:mt-16 sm2:mt-0 w-[200px] h-full'>

                <ul className='sideNav-Ul overflow-auto'>
                    {chatUsers.map((x, y) => <li key={y}><BsPersonBadge /> <Link href={`/chat?user=${x.name}`} onClick={() => setIsChatMenuClicked(false)} className='sm2:group-hover:flex'>{x.name}</Link></li>)}
                </ul>

            </div>
        </div>
    )
}
