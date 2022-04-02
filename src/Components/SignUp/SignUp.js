import React from "react";
import {AiFillGoogleCircle} from "react-icons/ai"
import {FaFacebook} from 'react-icons/fa'
import './SignUp.css'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
       <div className="flex"> 
       <div className="mx-14 mt-10 md:w-1/2">
        <div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 71 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6394 46.646L2.72791 43.9181C2.72791 43.9181 2.72791 35.7345 5.45578 27.5508C8.18365 19.3672 27.2788 19.3672 27.2788 19.3672L13.6394 46.646ZM24.5509 57.5574L27.2788 68.4689C27.2788 68.4689 35.4624 68.4689 43.646 65.7411C51.8296 63.0132 51.8296 43.9181 51.8296 43.9181L24.5509 57.5574ZM13.6394 46.646L24.5509 57.5574C24.5509 57.5574 51.8296 46.646 60.0132 33.0066C68.1968 19.3672 68.1968 3 68.1968 3C68.1968 3 51.8296 3 38.1902 11.1836C24.5509 19.3672 13.6394 46.646 13.6394 46.646Z"
              stroke="url(#paint0_linear_44_2866)"
              stroke-width="5.13482"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_44_2866"
                x1="35.4624"
                y1="3"
                x2="88.4196"
                y2="36.512"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53E0FF" />
                <stop offset="1" stop-color="#1E94E9" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            style={{ marginTop: "-10px", marginLeft: "-2px" }}
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12.1966L11.9115 6.7409L6.45574 1.28516L1 12.1966Z"
              fill="url(#paint0_linear_44_2867)"
              stroke="url(#paint1_linear_44_2867)"
              stroke-width="1.2837"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_44_2867"
                x1="6.45574"
                y1="1.28516"
                x2="15.2819"
                y2="6.87049"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53E0FF" />
                <stop offset="1" stop-color="#1E94E9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_44_2867"
                x1="6.45574"
                y1="1.28516"
                x2="15.2819"
                y2="6.87049"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53E0FF" />
                <stop offset="1" stop-color="#1E94E9" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            style={{ marginTop: "-50px", marginLeft: "40px" }}
            width="7"
            height="8"
            viewBox="0 0 7 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.37387 6.55071C4.88043 6.55071 6.10174 5.32941 6.10174 3.82284C6.10174 2.31628 4.88043 1.09497 3.37387 1.09497C1.86731 1.09497 0.645996 2.31628 0.645996 3.82284C0.645996 5.32941 1.86731 6.55071 3.37387 6.55071Z"
              fill="url(#paint0_linear_44_2868)"
              stroke="url(#paint1_linear_44_2868)"
              stroke-width="1.2837"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_44_2868"
                x1="3.37387"
                y1="1.09497"
                x2="7.78697"
                y2="3.88764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53E0FF" />
                <stop offset="1" stop-color="#1E94E9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_44_2868"
                x1="3.37387"
                y1="1.09497"
                x2="7.78697"
                y2="3.88764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53E0FF" />
                <stop offset="1" stop-color="#1E94E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mt-16 text-3xl font-bold">Sign Up</div>
        <div className="mt-4 text-sm">
          It's not long before you embark on this journey!
        </div>
        <div className="text-lg mt-4 font-semibold">E-mail</div>
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
        <div className="text-lg mt-2 font-semibold">Password</div>
        <label1 className="relative block" >
          <span className="sr-only">Search</span>
          <input
            style={{borderRadius:"15px"}}
            className="h-12 mt-1 block bg-slate-50  w-full border border-slate-300  py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="8 + Characters, 1 Captial leter"
            type="text"
            name="search"
          />
        </label1>
        <div>
        <Link  className="text-sm mt-4 font-semibold text-sky-600" to="/SendOtp">
        Forgot Password?
                </Link>
                </div>
                <div> 
                <Link   to="/">
        <button style={{borderRadius:"15px"}} className="text-xl font-semibold text-white mt-5 h-14 w-1/2 bg-gradient-to-r from-cyan-300 to-cyan-600">
        Create Account
                </button></Link>
                </div>
        <div className="flex ">
        <div  className="text-sm mt-4 font-semibold ">Already have a account?</div>
        <Link  className="mt-4 ml-2 text-sky-600 font-semibold" to="/">
        Sign In
                </Link>
        </div>
        <div className="border-t-2 mt-3" />
        <div className="flex"> 
        <div  className="text-sm mt-4 font-semibold text-slate-400 ">Or Login with </div>
            <AiFillGoogleCircle className="mt-4 ml-3" style={{fontSize:"20px",color:"#F24E1E"}}/>
            <FaFacebook className="mt-4 ml-3" style={{fontSize:"20px", color:"#699BF7"}}/>
        </div>
        <div  className="text-sm mt-3   ">I've read and agree with Terms of Service and our Privacy Police</div>
      </div>
      <div className="hidden md:flex w-1/2">
      <div className="h-screen fixed w-full  bg-gradient-to-r from-blue-500 to-blue-50" />
      </div>
      </div>
    </>
  );
};

export default SignUp;
