'use client'

import { useGlobalContext } from '@/context/store'
import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook, BsGear } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-1/2 shadow fixed top-[50px]' : '-translate-x-full w-0'} bg-white transition-all duration-300 min-h-screen overflow-hidden border`}>

            <div className='p-2'>

                <ul className='sideNav-Ul'>
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
