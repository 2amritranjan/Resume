import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [type, settype] = useState("")
  return (
   <>
    <div 
    className='bg-zinc-700 flex justify-between h-12 w-full p-2'>
      <div>
        <input 
        className='bg-zinc-500 w-60 border-zinc-100 rounded-md p-1 font-semibold text-zinc-100 hover:bg-zinc-600'
        value={type}
        onChange={(e) => settype(e.target.values)} 
        placeholder='Your text here...'></input>
      </div>
      <div>
        <ol className='flex gap-5 text-zinc-100 font-semibold'>
          <Link href='/'><li 
          className='hover:bg-zinc-800 rounded-md hover:text-zinc-200 hover:font-bold p-1 font-playwrite-it-moderna'>Home</li></Link>
          <Link href='/Services'><li 
          className='hover:bg-zinc-800 rounded-md hover:text-zinc-200 hover:font-bold p-1'>Services</li></Link>
          <Link href='/Project'><li 
          className='hover:bg-zinc-800 rounded-md hover:text-zinc-200 hover:font-bold p-1'>Our work</li></Link>
          <Link href='/Insight'><li 
          className='hover:bg-zinc-800 rounded-md hover:text-zinc-200 hover:font-bold p-1'>Insight</li></Link>
          
        </ol>
      </div>
    </div>
   </>
  )
}

export default Navbar