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
        <nav className={`w-full sticky py-2 sm:px-6 sm2:p-0 px-4 z-50 dark:bg-emerald-900 ${scrolled ? '' : ''} fixed top-0 left-0 sm2:dark:bg-transparent`}>
            <div className="flex-all my-2 sm2:dark:bg-emerald-900 sm2:p-4 sm2:rounded-lg sm2:mx-4 sm2:mt-4">

                <div className="flex-all gap-3 sm:gap-5">

                    <button className="sm2:hidden" onClick={toggleMenu}>
                        {isMenuClicked ? <VscClose /> : <VscMenu />}
                    </button>

                    <div>
                        <Tooltip label={`${companyName}`} letterSpacing={3}>
                            <Link href='/' className="sm:text-lg sm2:text-2xl lg:text-3xl lg:ml-4">{companyName}</Link>
                        </Tooltip>
                    </div>

                </div>

                <div className="flex-all gap-4 sm:gap-5 lg:mr-4">
                    <span className="flex items-center gap-2 rounded sm:rounded-tr-xl p-2 text-sm dark:bg-emerald-700"><label htmlFor="search"><BsSearch /></label><input className="border-0 outline-0  bg-transparent w-[90px] sm:w-[180px] " id="search" placeholder="search" /></span>

                    <Tooltip label="notification" letterSpacing={1}>
                        <button className="hover:bg-emerald-700 rounded-full sm:p-2"><BsBell className="text-lg" /></button></Tooltip>

                    <Tooltip label="profile" letterSpacing={1}>
                        <button className="hover:bg-emerald-700 rounded-full sm:p-2"><BsPersonAdd className="text-lg" /></button></Tooltip>

                </div>

            </div>


        </nav>
    );
}