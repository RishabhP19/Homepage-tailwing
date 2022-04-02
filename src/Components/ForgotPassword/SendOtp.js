import React from 'react'
import './SendOtp.css'
import { Link } from "react-router-dom";

const SendOtp = () => {
  return (
    <div className="flex"> 
    <div className="mx-14 my-20 md:w-1/2">
    <div className="mt-20 text-4xl font-bold">Forgot Password</div>
    <div className="mt-4">
        We’ll send an OPT to your email
        </div>
        <div className="text-xl mt-10 font-semibold">E-mail</div>
        <label className=" relative block" >
          <span className="sr-only">Search</span>
          <input
            style={{borderRadius:"15px"}}
            className="h-12 mt-1 block bg-slate-50 w-full border border-slate-300  py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="name@email.com"
            type="text"
            name="search"
          />
        </label>
        <div> 
                <Link   to="/EnterOtp">
        <button style={{borderRadius:"15px"}} className="text-xl font-semibold text-white mt-8 h-14 w-1/2 bg-gradient-to-r from-cyan-300 to-cyan-600">
        Send OTP
                </button></Link>
                </div>
      </div>
      <div className="hidden md:flex w-1/2">
      <div className="h-screen fixed w-full  bg-gradient-to-r from-blue-500 to-blue-50" />
      </div>
    </div>
  )
}

export default SendOtp