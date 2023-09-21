'use client'

import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";
import { useGlobalContext } from "@/context/store";
import React from "react";
import { companyName } from "@/lib/variables";


export const activeStyles = {
    color: "#D2691E",
    opacity: 1
}

export default function NavBar() {
    
    const {scrolled,setScrolled, isMenuClicked, setIsMenuClicked } = useGlobalContext()

    const toggleMenu = React.useCallback(() => setIsMenuClicked((prevState: any) => !prevState), [isMenuClicked])

    const onScrolling = React.useCallback(() => window.scrollY > 60 ? setScrolled(true) : setScrolled(false), [scrolled])

    React.useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])

    return (
        <nav className={`nav-style ${scrolled ? 'fixed-nav-style' : ''}`}>
            <div className="nav-div-style">
                <div className="nav-div-div-style">
                    <div>
                        <Link href='/'>{companyName}</Link>
                    </div>

                    <button className={`${isMenuClicked ? "" : ""}`} onClick={toggleMenu}>
                        <VscMenu />
                    </button>
                </div>

                <ul className={`${``}`}>
                    <li><Link href='home'>home</Link></li>
                    <li><Link href='platform'>platform</Link></li>
                    <li><Link href='features'>features <BsChevronUp /></Link></li>
                    <li><Link href='blog'>our blog</Link></li>
                </ul>

                <Link href='demo'>demo link</Link>
            </div>
        </nav>
    );
}