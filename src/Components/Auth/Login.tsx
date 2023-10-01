"use client"

import React from "react";

import { signIn } from "next-auth/react";

import { BsGoogle } from "react-icons/bs";
import { Spinner } from "@chakra-ui/spinner";

export default function Login() {

  const [submitting, setSubmitting] = React.useState(false)

  const handleGoogleLogin = async () => {
    setSubmitting(true)
    
    try {
      await signIn('google')
    } finally {
      setSubmitting(false)
    }
  }

  const [userInfo, setUserInfo] = React.useState({
    email: '',
    passcode: ''
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    await signIn("credentials", {
      email: userInfo.email,
      passcode: userInfo.passcode,
      redirect: true,
    });

    setSubmitting(false)
    
  }

  return (
    <>

      <h1 className="text-[1.99rem] font-bold">Welcome Back!</h1>

      <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2"><span>sign in with google</span><BsGoogle /></button>

      <p className="flex gap-1 justify-center items-center"><span className="span-underline"></span> <span className="px-4 text-base capitalize">or</span> <span className="span-underline"></span></p>

      <form onSubmit={handleLogIn} className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={userInfo.email}
          onChange={handleChange}
          required
        />

        <input
          name="passcode"
          type="password"
          placeholder="Password"
          value={userInfo.passcode}
          onChange={handleChange}
          required
        />

        <button className={`${submitting ? "bg-opacity-40 cursor-not-allowed pointer-events-none" : ""} hover:bg-opacity-50`}>
          {submitting ? "logging in " + <Spinner /> : "log in"}
        </button>
      </form>

    </>
  );
}
