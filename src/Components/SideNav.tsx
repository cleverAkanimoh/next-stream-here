import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook } from 'react-icons/bs'

// type SideNavProp = {prop: React.ComponentProps}

export default function SideNav() {
    return (
        <ul className={`${``}`}>
            <li><BsAlarm /> <Link href='live'>live</Link></li>
            <li><Link href='features'>features <BsChevronUp /></Link></li>
            <li><Link href='sport'>sport <BsChevronUp /></Link></li>
            <li><BsBook /> <Link href='blog'>blog</Link></li>
        </ul>
    )
}
