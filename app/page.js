'use client side'
import React from 'react'
import Link from 'next/link'
import Navbar from './Components/Navbar'

const page = () => {
  return (
    <>
    <Navbar title="Home Page" /> 
    <div 
    className='h-40 p-5 flex justify-evenly m-2'>
      <div
      className='text-6xl font-bold w-1/2 h-32'>Amrit Ranjan</div>
      <div><img 
      className='h-30 w-24 rounded shadow-xl'
      src='/amrittt.jpg' alt='amrit'></img></div>
    </div>
    </>
  )
}

export default page