'use client'

import { useGlobalContext } from '@/context/store'
import { Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { BsAlarm, BsBook, BsGear, BsMusicPlayer, BsCameraVideo, BsDatabase } from 'react-icons/bs'

export default function SideNav() {

    const { isMenuClicked } = useGlobalContext()

    return (
        <div className={`${isMenuClicked ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} fixed sm2:relative top-0 bg-white dark:bg-emerald-900 dark:text-emerald-200 text-emerald-700 transition-all ease-linear duration-300 max-h-[85vw] overflow-hidden flex justify-center p-4 sm:w-[220px] sm2:w-[50px] sm2:hover:w-[220px] lg:w-[220px] sm2:m-4 sm2:rounded-md sm2:translate-x-0 group`}>

            <div className='p-2 mt-12 sm2:mt-0 w-[200px] h-full'>

                <ul className='sideNav-Ul '>
                    <li><BsAlarm /> <Link href='live' className='sm2:group-hover:flex'>live</Link></li>
                    <li><BsMusicPlayer /> <Link href='listen' className='sm2:group-hover:flex'>music </Link></li>
                    <li><BsDatabase /> <Link href='sport' className='sm2:group-hover:flex'>sport </Link></li>
                    <li><BsCameraVideo /> <Link href='watch' className='sm2:group-hover:flex'>movie/tv </Link></li>
                    <li><BsBook /> <Link href='read' className='sm2:group-hover:flex'>blog</Link></li>
                </ul>

                <Tooltip label="setting" letterSpacing={1} placement='right'><button className='border ml-2 text-lg '><BsGear /></button></Tooltip>
                {/* <GoogleTranslate /> */}

            </div>
        </div>
    )
}
