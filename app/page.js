'use client'
import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Card from'./Component/Card'


const Page = () => {


  return (
    <>
      <div className='bg-black text-white w-full h-screen'>
        <div className='font-bold text-3xl p-5 font-serif'>Amrit Ranjan</div>
        <Navbar/>
        <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
    </>
  )
}

export default Page;
