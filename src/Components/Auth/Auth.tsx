'use client'

import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { useGlobalContext } from '@/context/store'
import { VscClose } from 'react-icons/vsc'


export default function Auth() {

	const { authClick, setAuthClick, loginBtn, setLoginBtn } = useGlobalContext()

	return (
		<div
			className={`${authClick ? "scale-100 opacity-100" : "scale-0 opacity-0"
				} overflow-scroll fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-30 w-screen h-screen`}
		>
			<div className={`${authClick ? "scale-100 opacity-100" : "scale-0 opacity-0"
				} relative w-[95%] sm2:w-[450px] max-w-[550px] z-[1001] p-4 rounded bg-purple-50 text-slate-800 transition-custom duration-500 flex flex-col gap-5 items-center justify-center`}>

				<header className='h-12 w-[95%] border-b'>

					<button onClick={() => setLoginBtn(true)} className={`${loginBtn ? 'auth-btn-active' : ''} auth-btn rounded-l-md`}>Login</button>

					<button onClick={() => setLoginBtn(false)} className={`${!loginBtn ? 'auth-btn-active' : ''} auth-btn rounded-r-md`}>Signup</button>

				</header>

				<aside className='w-[95%] h-fit'>
					<div className='flex items-center h-fit overflow-hidden'>

						<div className={`${loginBtn ? 'translate-x-0' : '-translate-x-full'} login-container transition-custom`}><Login /></div>

						<div className={`${loginBtn ? 'translate-x-0' : '-translate-x-full'} login-container transition-custom`}><Signup /></div>

					</div>
				</aside>

				<VscClose
					onClick={() => setAuthClick(false)}
					className="cursor-pointer p-1 sm2:text-2xl text-3xl font-bold border hover:border-red-600 hover:text-red-600 rounded-full absolute right-2 top-3 transition-custom"
				/>
			</div>
		</div>
	)
}