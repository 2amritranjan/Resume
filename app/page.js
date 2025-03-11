'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import box from './Components/Box'


const page = () => {
  
  return (
    <>
    <Navbar title="Home Page" /> 
    <div 
    className='h-screen bg-slate-900 text-sky-300 text-left'>
      <h1 className='font-light text-[100px] text-left'>Amrit Ranjan<hr/></h1>
      </div>
      <div>
        <box/>
      </div>
      <Landing/>
      </>
  )
}
export default page