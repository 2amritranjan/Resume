'use client side'
import React from 'react'
import Link from 'next/link'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'

const page = () => {
  return (
    <>
    <Navbar title="Home Page" /> 
    <div 
    className='h-40 p-5 flex justify-evenly m-2'>
      <div
      className='text-6xl font-bold w-1/2 h-32'>Amrit Ranjan</div>
      <div><img 
      className='h-30 w-24 rounded shadow-xl hover:rotate-6'
      src='/amrittt.jpg' alt='image'></img></div>
    </div>
    <hr
    className='border-t-4 border-slate-600 my-4'/>
    <Landing/>
    </>
  )
}

export default page