'use client'

import Image from 'next/image'
import loadingGif from '../../public/images/mona-loading-dark.gif'
import useTick from '@/Hooks/useTick'

const Loading = () => {
  const text = useTick(['...'], 2000, 0)
  return (
    <div className=" flex flex-col items-center">
      <Image src={loadingGif} alt="loading" className='w-1/4 h-[150px]' />
      <h2 className="font-bold text-xl text-brown">Loading{text}</h2>
    </div>
  )
}

export default Loading;