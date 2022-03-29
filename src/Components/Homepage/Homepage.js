import React from 'react'
import img1 from './img.png'
import {AiOutlineDelete} from 'react-icons/ai'
import {FcShare} from 'react-icons/fc'
import Recent from './Recent'
import Services from './Services'
import Library from './Library'
import './Homepage.css'
import {BiChevronLeft,BiChevronRight} from 'react-icons/bi'

const Homepage = () => {
  return (
    <>
    <div className='flex first_div justify-between '>
        
    <div className='first_div_1st inline-flex mt-5  rounded-lg  bg-gradient-to-r from-blue-900 to-blue-400'>
        <div className='first_div_text ml-8 md:py-24 lg:py-16 text-white font-semibold text-xl'>
            <div className='arrow'>
            <BiChevronLeft/>
            <BiChevronRight/>
            </div>
            <div >Hi,</div>
            <div>Nazeen</div>
            <div className='font-extralight'>Welcome Back</div>
        </div>
        <div className='first_div_text_img'>
        <img className=' w-48 lg:w-72 h-56' src={img1} alt="" />   
        </div>
    </div>
    <div className=' first_div_2nd'>
   <div className='mt-5  font-bold'>
    Notification
   </div>
   <div className='notification_table'>
   <table className='  bg-white h-48 mt-2'>
    <tbody  className='divide-y divide-slate-300 text-sm'>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className='demo-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        
    </tbody>
    </table>
   </div>
   </div>
   </div>
   <div >
       <div className='div_2nd mt-5 font-bold'>New Document</div>
       <div className='all_table'>
       <table className=' div_t_start  h-48 bg-white mt-2 '>
           <thead className='text-sm text-left '>
                <tr>
                    <th className='py-2 px-1'>Document Name</th>
                    <th className='py-2 px-1'>Document Type</th>
                    <th className='py-2 px-1'>Document Note</th>
                </tr>   
            </thead>
            <tbody className='text-sm divide-y divide-slate-300'>
                <tr>
                <td className='px-2'>Tax File</td>
                <td className=' px-2'>Rectipt</td>
            <td className=' length_1 px-2 h-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
            
           
                </tr>
                <tr>
                <td className=' px-2'>Tax File</td>
                <td className=' px-2'>Rectipt</td>
            <td className=' length_1 px-2 h-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
           
            
                </tr>
                <tr>
                <td className=' px-2'>Tax File</td>
                <td className=' px-2'>Rectipt</td>
            <td className=' length_1 px-2 h-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</td>
         
            
                </tr>

            </tbody>
        
        </table>
        <table className=' div_t_mid  h-48 bg-white mt-2 '>
           <thead className='text-sm text-left '>
                <tr>
                    
                    <th className='py-2 px-1'>Document Date</th>
                    <th className='py-2 px-1'>Document Time</th>
                    <th className='py-2 px-1'>Document Delete</th>
                  
                </tr>   
            </thead>
            <tbody className='text-sm divide-y divide-slate-300'>
                <tr>
                
            <td className=' px-2'>14JAN</td>
            <td className=' px-2'>9:00 a.m</td>
            <td className=' px-2'><AiOutlineDelete className='text-blue-800'/></td>
           
                </tr>
                <tr>
                <td className=' px-2'>14JAN</td>
            <td className=' px-2'>9:00 a.m</td>
            <td className=' px-2'><AiOutlineDelete className='text-blue-800'/></td>
                </tr>
                <tr>
                <td className=' px-2'>14JAN</td>
            <td className=' px-2'>9:00 a.m</td>
            <td className=' px-2'><AiOutlineDelete className='text-blue-800'/></td>
                </tr>

            </tbody>
        
        </table>
        <table className='div_t_end  h-48 bg-white mt-2 '>
           <thead className='text-sm text-left '>
                <tr>
                    <th className='py-2 px-1'>Document Share</th>
                </tr>   
            </thead>
            <tbody className='text-sm divide-y divide-slate-300'>
                <tr>
            <td className=' px-2'><FcShare/></td>
                </tr>
                <tr>
                <td className=' px-2'><FcShare/></td>
                </tr>
                <tr>
                <td className=' px-2'><FcShare/></td>
                </tr>

            </tbody>
        
        </table>
        </div>
   </div>
   <Recent/>
   <Services/>
   <Library/>
    </>
  )
}

export default Homepage