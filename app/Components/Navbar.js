import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
    <div 
    className='bg-red-800 flex p-5'>
      <ol className='flex justify-between w-full'>
        
      <Link href={'/'}><li 
      className='m-1 p-1 bg-red-300 text-red-800 rounded border shadow-2xl hover:font-bold'>
       Home</li></Link>
       
      <Link href={'/Project'}><li 
      className='m-1 p-1 bg-red-300 text-red-800 rounded border shadow-2xl hover:font-bold'>
       Projects</li></Link>
       
      <Link href={'/Contacts'}><li 
      className='m-1 p-1 bg-red-300 text-red-800 rounded border shadow-2xl hover:font-bold'>
       Contacts</li></Link>
       
      </ol>

    </div>
    <div
    className='bg-red-300 text-red-800 h-20 text-xl w-full p-5 flex justify-center fixed bottom-0'>
  <h3>
    Thanks for your time.
  </h3>
  </div>
   </>
  )
}

export default Navbar