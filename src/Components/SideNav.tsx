'use client'

import { useGlobalContext } from '@/context/store'
import Link from 'next/link'
import { BsAlarm, BsMusicPlayer, BsCameraVideo, BsDatabase, BsChatDots } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked, setIsMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} fixed sm2:sticky top-0 bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all ease-linear duration-300 min-h-full overflow-hidden flex justify-center p-4 sm:w-[220px] sm2:w-[50px] sm2:hover:w-[220px] lg:w-[220px] sm2:m-4 sm2:rounded-md sm2:translate-x-0 group`}>

            <div className='p-2 mt-12 sm:mt-16 sm2:mt-0 w-[200px] h-full'>

                <ul className='sideNav-Ul'>
                    <li><BsAlarm /> <Link href='live' onClick={() => setIsMenuClicked(false)} className='sm2:group-hover:flex'>live</Link></li>
                    <li><BsMusicPlayer /> <Link href='listen' onClick={() => setIsMenuClicked(false)} className='sm2:group-hover:flex'>music </Link></li>
                    <li><BsDatabase /> <Link href='sport' onClick={() => setIsMenuClicked(false)} className='sm2:group-hover:flex'>sport </Link></li>
                    <li><BsCameraVideo /> <Link href='watch' onClick={() => setIsMenuClicked(false)} className='sm2:group-hover:flex'>movie/tv </Link></li>
                    <li><BsChatDots /> <Link href='chat' onClick={() => setIsMenuClicked(false)} className='sm2:group-hover:flex'>chat</Link></li>
                </ul>

            </div>
        </div>
    )
}
