import { companyName } from '@/lib/variables'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from 'react-icons/bs';

export default function Footer() {

    let year = new Date;

    return <footer className='capitalize w-full flex flex-col sm2:flex-row-reverse justify-center sm2:items-center gap-4 sm2:gap-8 bg-emerald-900 text-gray-300 p-4 sm:p-8 sm2:rounded-xl'>
        <div className='flex gap-4 text-lg'>
            <a href=""><BsTiktok /></a>
            <a href=""><BsInstagram /></a>
            <a href=""><BsFacebook /></a>
            <a href=""><BsTwitter /></a>
        </div>

        <span><Link href='/' className='underline text-gray-200'>{companyName}</Link> {year.getFullYear()} copyright reserved</span>
    </footer>
}
