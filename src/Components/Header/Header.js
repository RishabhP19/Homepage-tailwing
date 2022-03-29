import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiWechatFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import {GiCircleClaws} from 'react-icons/gi'
import './Header.css'

const Header = () => {
    const [navbar,setNavbar]= useState(false)
  return (
    <>
    <div className='w-full h-12 bg-white drop-shadow-md sticky top-0 header_nav '>
        <div className='px-10 py-4 inline-flex'>
            <button><FaBars onClick={()=>setNavbar(!navbar)} className='text-xl font-light '/></button>
        <div className=' absolute right-0 inline-flex gap-x-5 px-10'>
        <div className='inline-flex gap-x-1 text-slate-500'>
            <small className='text-xs'>Help</small>
            <AiOutlineQuestionCircle/>
        </div>
        <div className='inline-flex gap-x-1 text-slate-500'>
            <small>FAQ</small>
            <RiWechatFill/>
        </div>
        
        <BsSearch className='text-2xl '/>
        <GiCircleClaws className='text-2xl ' />
        </div>
        
        </div>
    </div>
    <nav className={navbar?'absolute z-10 w-56 bg-white text-white h-full navbar transition duration-500 ease ':'absolute navbar z-10 w-56 bg-white text-white h-full  transform -translate-x-full transition duration-500 ease'}>
        <ul className='divide-y divide-slate-300 text-black text-sm font-semibold '>
            <li className='py-2 pl-5 mt-2 hover:bg-blue-700 hover:text-white'>
                <span>Home</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Profile</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Messaging</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Survey</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Appointment System</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white' >
                <span>Upload Documents</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white' >
                <span>Work Pipeline</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Services</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 hover:text-white'>
                <span>Library</span>
            </li>
            <li className='py-2 pl-5 hover:bg-blue-700 text-rose-600'>
                <span>Signout</span>
            </li>   
        </ul>    
    </nav>
    </>
  )
}

export default Header