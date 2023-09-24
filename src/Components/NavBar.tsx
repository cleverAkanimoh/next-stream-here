'use client'

import React from "react";

import Link from "next/link";

import { VscClose, VscMenu } from "react-icons/vsc";
import { BsBell } from "react-icons/bs";
import { useGlobalContext } from "@/context/store";
import { companyName } from "@/lib/variables";

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
        <nav className={`w-full sticky border p-2 ${scrolled ? 'fixed top-0 left-0 bg-white' : ''}`}>
            <div className="flex-all my-2">

                <div className="flex-all w-[86px]">

                    <button className="text-lg" onClick={toggleMenu}>
                        {isMenuClicked ? <VscClose /> : <VscMenu />}
                    </button>

                    <div>
                        <Link href='/'>{companyName}</Link>
                    </div>

                </div>

                <div className="flex-all w-[54px]">
                    <button ><BsBell /></button>
                    <button>auth</button>

                </div>

            </div>


        </nav>
    );
}