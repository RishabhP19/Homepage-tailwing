import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {FcShare} from 'react-icons/fc'
const Recent = () => {
  return (
    <>  
        <div className='ml-10 mt-5 mr-10'>
        <div className='flex justify-between'>
        <div className=' font-bold ' >
            Recent Working Pipelines 
        </div>
        <button className=' bg-sky-600 px-4 py-2 rounded-3xl text-sm text-white' >Explore More</button>
        </div>
        <div class="flex justify-between ">
          <div className='h-68 w-48 lg:h-52 lg:w-64 rounded-xl bg-white p-4'>
              <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </p>
              <div className='flex justify-between mt-2'>
                  <div className='inline-flex text-xl'>
                    <AiOutlineDelete className='mr-2 text-blue-800' />
                    <FcShare/>
                  </div>
                  <div>
                    <span className='mr-2 text-blue-800' >14JAN</span>
                    <span>9:00 a.m</span>
                  </div>
              </div>
              </div>
              <div className='h-68 w-48 lg:h-52 lg:w-64 rounded-xl bg-white p-4'>
              <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </p>
              <div className='flex justify-between mt-2'>
                  <div className='inline-flex text-xl'>
                    <AiOutlineDelete className='mr-2 text-blue-800' />
                    <FcShare/>
                  </div>
                  <div>
                    <span className='mr-2 text-blue-800' >14JAN</span>
                    <span>9:00 a.m</span>
                  </div>
              </div>
              </div>
              <div className='h-68 w-48 lg:h-52 lg:w-64 rounded-xl bg-white p-4'>
              <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </p>
              <div className='flex justify-between mt-2'>
                  <div className='inline-flex text-xl'>
                    <AiOutlineDelete className='mr-2 text-blue-800' />
                    <FcShare/>
                  </div>
                  <div>
                    <span className='mr-2 text-blue-800' >14JAN</span>
                    <span>9:00 a.m</span>
                  </div>
              </div>
              </div>
              <div className='h-68 w-48 lg:h-52 lg:w-64 rounded-xl bg-white p-4'>
              <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </p>
              <div className='flex justify-between mt-2'>
                  <div className='inline-flex text-xl'>
                    <AiOutlineDelete className='mr-2 text-blue-800' />
                    <FcShare/>
                  </div>
                  <div>
                    <span className='mr-2 text-blue-800' >14JAN</span>
                    <span>9:00 a.m</span>
                  </div>
              </div>
              </div>
              
              
        </div>
        
        </div>
    </>
  )
}

export default Recent