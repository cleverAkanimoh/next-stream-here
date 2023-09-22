import Link from 'next/link'
import { BsAlarm, BsChevronUp, BsBook, BsGear } from 'react-icons/bs'

export default function SideNav() {
    return (
        <div className={`${``} relative min-h-screen border -z-10`}>

            <ul>
                <li><BsAlarm /> <Link href='live'>live</Link></li>
                <li><Link href='features'>features <BsChevronUp /></Link></li>
                <li><Link href='sport'>sport <BsChevronUp /></Link></li>
                <li><BsBook /> <Link href='blog'>blog</Link></li>

            </ul>
            <button><BsGear /></button>
        </div>
    )
}
