'use client'

import { useGlobalContext } from '@/context/store'
import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook, BsGear } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} fixed sm2:relative top-0 bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all ease-linear duration-300 min-h-screen overflow-hidden flex justify-center p-4 sm:w-[250px] sm2:w-[50px] sm2:hover:w-[250px] lg:w-[250px] sm2:m-4 sm2:rounded-md sm2:translate-x-0 group`}>

            <div className='p-2 mt-12 sm2:mt-0 w-[200px] h-full'>

                <ul className='sideNav-Ul '>
                    <li><BsAlarm /> <Link href='live' className='sm2:group-hover:flex'>live</Link></li>
                    <li><BsChevronUp /> <Link href='features' className='sm2:group-hover:flex'>features </Link></li>
                    <li><BsChevronUp /> <Link href='sport' className='sm2:group-hover:flex'>sport </Link></li>
                    <li><BsBook /> <Link href='blog' className='sm2:group-hover:flex'>blog</Link></li>
                </ul>

                <button><BsGear /></button>
                {/* <GoogleTranslate /> */}

            </div>
        </div>
    )
}
