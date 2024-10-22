import Image from 'next/image'
import React from 'react'
import ecom from '/public/projects/5173135.jpg'
import chat from '/public/projects/chat.jpg'
import res from '/public/projects/res.jpg'

import ProjectItem from './ProjectItem'
import Link from 'next/link'
const Project = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] duration-300 ease-in'>
            <Image
              className='rounded-xl group-hover:opacity-10 duration-150 ease-in'
              src={ecom}
              alt='/'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='font-bold text-white tracking-widest text-center'>
                Ecommerce App Using React
              </h3>
              <p className='pb-4 pt-2 text-white text-center'>React Js</p>
              <Link href='https://github.com/Debu2103/react-ecommerce-app'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-600 text-lg cursor-pointer'>
                  Github Link
                </p>
              </Link>
            </div>
          </div>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] duration-300 ease-in'>
            <Image
              className='rounded-xl group-hover:opacity-10 duration-150 ease-in'
              src={chat}
              alt='/'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='font-bold text-white tracking-widest text-center'>
                Live Chat App
              </h3>
              <p className='pb-4 pt-2 text-white text-center'>React Js</p>
              <Link href='https://github.com/Debu2103/Chat-App-React/tree/main/Chat-App'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-600 text-lg cursor-pointer'>
                  Github Link
                </p>
              </Link>
            </div>
          </div>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] duration-300 ease-in'>
            <Image
              className='rounded-xl group-hover:opacity-10 duration-150 ease-in'
              src={res}
              alt='/'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='font-bold text-white tracking-widest text-center'>
                Restuarant Website
              </h3>
              <p className='pb-4 pt-2 text-white text-center'>HTML,CSS,JS</p>
              <Link href='https://github.com/Debaroon2103/Foodie_Freak_Complete_Website'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-600 text-lg cursor-pointer'>
                  Github Link
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
