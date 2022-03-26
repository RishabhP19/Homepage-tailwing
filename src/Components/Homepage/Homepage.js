import React from 'react'
import img1 from './img.png'
import {AiOutlineDelete} from 'react-icons/ai'
import {FcShare} from 'react-icons/fc'
import Recent from './Recent'
import Services from './Services'
import Library from './Library'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
    <div className='flex justify-between mr-10'>
        
    <div className='ml-10  inline-flex mt-5 w-72 lg:w-1/2  rounded-lg h-72 lg:h-56 bg-gradient-to-r from-blue-900 to-blue-400'>
        <div className='ml-8 md:py-24 lg:py-16 text-white font-semibold text-xl'>
            <div >Hi,</div>
            <div>Nazeen,</div>
            <div className='font-extralight'>Welcome Back</div>
        </div>
        <div>
        <img className='md:mt-10 lg:mt-3 lg:ml-8 w-48 lg:w-72 h-56' src={img1} alt="" />   
        </div>
    </div>
    <div className=''>
   <div className='mt-5  font-bold'>
    Notification
   </div>
   <div>
   <table className=' w-48 lg:w-full bg-white h-48 mt-2'>
    <tbody  className='divide-y divide-slate-300 text-sm'>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' space  lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' leading-3 lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' leading-3 lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' leading-3 lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' leading-3 lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        <tr className='cursor-pointer h-4'>
            <td className=' px-6'>14JAN</td>
            <td className=' leading-3 lg:px-6 '>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>9:00 a.m</td>
        </tr>
        
    </tbody>
    </table>
   </div>
   </div>
   </div>
   <div >
       <div className='ml-10 mt-5 font-bold'>New Document</div>
       <table className='mx-10 w-48 lg:w-max  h-48 bg-white mt-2 border-2'>
           <thead className='text-sm text-left '>
                <tr>
                    <th className='py-2 px-4'>Document Name</th>
                    <th className='py-2 px-4'>Document Type</th>
                    <th className='py-2 px-4'>Document Note</th>
                    <th className='py-2 px-4'>Document Date</th>
                    <th className='py-2 px-4'>Document Time</th>
                    <th className='py-2 px-4'>Document Delete</th>
                    <th className='py-2 px-4'>Document Share</th>
                </tr>   
            </thead>
            <tbody className='text-sm divide-y divide-slate-300'>
                <tr>
                <td className=' px-6'>Tax File</td>
                <td className=' px-6'>Rectipt</td>
            <td className=' px-6 h-4'>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>14JAN</td>
            <td className=' px-6'>9:00 a.m</td>
            <td className=' px-6'><AiOutlineDelete className='text-blue-800'/></td>
            <td className=' px-6'><FcShare/></td>
                </tr>
                <tr>
                <td className=' px-6'>Tax File</td>
                <td className=' px-6'>Rectipt</td>
            <td className=' px-6 h-4'>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>14JAN</td>
            <td className=' px-6'>9:00 a.m</td>
            <td className=' px-6'><AiOutlineDelete className='text-blue-800'/></td>
            <td className=' px-6'><FcShare/></td>
                </tr>
                <tr>
                <td className=' px-6'>Tax File</td>
                <td className=' px-6'>Rectipt</td>
            <td className=' px-6 h-4'>Lorem ipsum dolor sit amet, consectetur...</td>
            <td className=' px-6'>14JAN</td>
            <td className=' px-6'>9:00 a.m</td>
            <td className=' px-6'><AiOutlineDelete className='text-blue-800'/></td>
            <td className=' px-6'><FcShare/></td>
                </tr>

            </tbody>
        
        </table>
   </div>
   <Recent/>
   <Services/>
   <Library/>
    </>
  )
}

export default Homepage