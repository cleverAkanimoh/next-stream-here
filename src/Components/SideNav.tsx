'use client'

import { useGlobalContext } from '@/context/store'
import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook, BsGear } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-[200px] shadow ' : '-translate-x-full w-0'} fixed top-[49px] bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all duration-300 min-h-screen overflow-hidden border-r`}>

            <div className='p-2'>

                <ul className='sideNav-Ul '>
                    <li><BsAlarm /> <Link href='live'>live</Link></li>
                    <li><BsChevronUp /> <Link href='features'>features </Link></li>
                    <li><BsChevronUp /> <Link href='sport'>sport </Link></li>
                    <li><BsBook /> <Link href='blog'>blog</Link></li>
                </ul>

                <button><BsGear /></button>
                {/* <GoogleTranslate /> */}
                
            </div>
        </div>
    )
}
