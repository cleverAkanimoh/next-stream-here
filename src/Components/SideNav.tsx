'use client'

import { useGlobalContext } from '@/context/store'
import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook, BsGear } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} fixed top-0 bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all ease-linear duration-300 min-h-screen overflow-x-hidden overflow-y-scroll flex justify-center p-4 sm:w-[250px]`}>

            <div className='p-2 mt-12  w-[150px] h-full'>

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
