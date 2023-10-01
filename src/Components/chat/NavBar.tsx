'use client'

import React from "react";

import Link from "next/link";

import { VscClose, VscMenu } from "react-icons/vsc";
import { BsBell, BsGear, BsPeople, BsPersonAdd } from "react-icons/bs";
import { useGlobalContext } from "@/context/store";
import { Tooltip } from "@chakra-ui/react";
import { ChatSearch } from "..";

export const activeStyles = {
    color: "#D2691E",
    opacity: 1
}

export default function Header() {

    const { scrolled, setScrolled, isChatMenuClicked, setIsChatMenuClicked } = useGlobalContext()

    const toggleMenu = React.useCallback(() => setIsChatMenuClicked((prevState: any) => !prevState), [isChatMenuClicked])

    const onScrolling = React.useCallback(() => window.scrollY > 60 ? setScrolled(true) : setScrolled(false), [scrolled])

    React.useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])

    return (
        <nav className={`w-full py-2 px-1 sm:px-6 sm2:p-0 dark:bg-emerald-900 border sticky top-0 left-0 z-50 ${scrolled ? 'fixed' : ''} `}>
        
            <div className="flex-all my-2 sm2:dark:bg-emerald-900 sm2:p-4 sm2:rounded-lg sm2:mx-4 sm2:mt-4">

                <div className="flex-all gap-3 sm:gap-5">

                    <Tooltip label={`${isChatMenuClicked ? "close" : "menu"}`} letterSpacing={1}><button className="sm2:hidden text-lg hover:bg-emerald-700 hover:text-emerald-200 rounded-full p-2 transition-all duration-300" onClick={toggleMenu}>
                        {isChatMenuClicked ? <VscClose /> : <VscMenu />}
                    </button></Tooltip>

                    <div>
                        <Tooltip label={`chat`} letterSpacing={1}>
                            <Link href='/chat' className="sm:text-lg sm2:text-2xl lg:text-3xl lg:ml-4">Chat</Link>
                        </Tooltip>
                    </div>

                </div>

                <ChatSearch />

                <div className="flex-all gap-2 sm:gap-5 lg:mr-4">

                    <Tooltip label="notification" letterSpacing={1}>
                        <button className="hover:bg-emerald-700 hover:rounded-full p-2 text-lg transition-all duration-300"><BsPeople /></button>
                    </Tooltip>

                    <Tooltip label="setting" letterSpacing={1}>
                        <button className='hover:bg-emerald-700 hover:rounded-full p-2 text-lg transition-all duration-300'><BsGear /></button>
                    </Tooltip>

                </div>

            </div>


        </nav>
    );
}