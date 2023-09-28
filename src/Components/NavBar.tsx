'use client'

import React from "react";

import Link from "next/link";

import { VscClose, VscMenu } from "react-icons/vsc";
import { BsBell, BsPersonAdd, BsSearch } from "react-icons/bs";
import { useGlobalContext } from "@/context/store";
import { companyName } from "@/lib/variables";
import { Tooltip } from "@chakra-ui/react";

export const activeStyles = {
    color: "#D2691E",
    opacity: 1
}

export default function NavBar() {

    const { scrolled, setScrolled, isMenuClicked, setIsMenuClicked } = useGlobalContext()

    const toggleMenu = React.useCallback(() => setIsMenuClicked((prevState: any) => !prevState), [isMenuClicked])

    const onScrolling = React.useCallback(() => window.scrollY > 60 ? setScrolled(true) : setScrolled(false), [scrolled])

    React.useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])

    return (
        <nav className={`w-full sticky py-2 px-1 sm:px-6 sm2:p-0 z-50 dark:bg-emerald-900 ${scrolled ? '' : ''} fixed top-0 left-0 sm2:dark:bg-transparent`}>
            <div className="flex-all my-2 sm2:dark:bg-emerald-900 sm2:p-4 sm2:rounded-lg sm2:mx-4 sm2:mt-4">

                <div className="flex-all gap-3 sm:gap-5">

                    <Tooltip label={`${isMenuClicked ? "close" : "menu"}`} letterSpacing={1}><button className="sm2:hidden text-lg hover:bg-emerald-700 hover:text-emerald-200 rounded-full p-2 transition-all duration-300" onClick={toggleMenu}>
                        {isMenuClicked ? <VscClose /> : <VscMenu />}
                    </button></Tooltip>

                    <div>
                        <Tooltip label={`${companyName}`} letterSpacing={2}>
                            <Link href='/' className="sm:text-lg sm2:text-2xl lg:text-3xl lg:ml-4">{companyName}</Link>
                        </Tooltip>
                    </div>

                </div>

                <div className="flex-all gap-2 sm:gap-5 lg:mr-4">

                    <form className="flex items-center gap-2 rounded sm:rounded-tr-xl p-2 text-sm dark:bg-emerald-700">
                        <label htmlFor="search"><BsSearch /></label>

                        <input className="border-0 outline-0 bg-emerald-700 w-[70px] sm:w-[180px] " id="search" placeholder="search" />
                    </form>

                    <Tooltip label="notification" letterSpacing={1}>
                        <button className="hover:bg-emerald-700 rounded-full p-2 transition-all duration-300"><BsBell className="text-lg" /></button></Tooltip>

                    <Tooltip label="profile" letterSpacing={1}>
                        <button className="hover:bg-emerald-700 rounded-full p-2 transition-all duration-300"><BsPersonAdd className="text-lg" /></button></Tooltip>

                </div>

            </div>


        </nav>
    );
}