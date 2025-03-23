"use client"
import React from 'react'
import Navbar from '../Component/Navbar'

const page = () => {
  return (
    <>
    <div className='bg-black text-white'>
        <Navbar/>
    <div className='bg-black w-full h-screen flex justify-center items-center text-5xl font-semibold text-red-600'>
        This is a Contact Page
    </div>

    </div>
    </>
  )
}

export default page