'use client'

import { useCallback, useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";
import Loading from "./Loading";


export const activeStyles = {
    color: "#D2691E",
    opacity: 1
}

export default function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = useCallback(() => setMenuClicked(prevState => !prevState), [menuClicked])

    const onScrolling = useCallback(() => window.scrollY > 60 ? setScrolled(true) : setScrolled(false), [scrolled])

    useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])

    return (
        <nav className={`nav-style ${scrolled ? 'fixed-nav-style' : ''}`}>
            <div className="nav-div-style">
                <div className="nav-div-div-style">
                    <div>
                        <span>S</span>
                        <h1>StreamHere</h1>
                    </div>

                    <button className={`${menuClicked ? "" : ""}`} onClick={toggleMenu}>
                        <VscMenu />
                    </button>
                </div>

                <ul className={`${``}`}>
                    <li><Link href='..'>home</Link></li>
                    <li><Link href='platform'>platform</Link></li>
                    <li><Link href='features'>features <BsChevronUp /></Link></li>
                    <li><Link href='blog'>our blog</Link></li>
                </ul>
                
                <Loading />

                <Link href='demo'>demo link</Link>
            </div>
        </nav>
    );
}