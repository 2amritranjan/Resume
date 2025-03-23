import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdOutlineContacts } from "react-icons/md";
import { CgInsights, CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';

const Navbar = () => {
  const [Menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!Menu)
  }

  return (
    <>
        {Menu ? (<div className='flex flex-col w-20 text-center bg-slate-900 rounded text-white p-5 absolute top-0 right-0'>
          <div className='w-32 text-left pb-2 -ml-10'>
            <button className='bg-slate-600 w-10 h-10 rounded-3xl font-bold text-2xl hover:bg-red-600 hover:font-extrabold hover:text-3xl' onClick={()=> setMenu(false)}>
              X
            </button>
          </div>

          <ul className='text-center flex flex-col justify-evenly font-bold gap-10'>
            <Link href="/"><li className='bg-slate-600 p-2 rounded hover:bg-slate-950 text-3xl hover:text-5xl'><FaHome /></li></Link>
            <Link href="/projects"><li className='bg-slate-600 p-2 rounded hover:bg-slate-950 hover:text-5xl text-3xl'><FaDiagramProject /></li></Link>
            <Link href="/contacts"><li className='bg-slate-600 p-2 rounded hover:bg-slate-950 hover:text-5xl text-3xl'><MdOutlineContacts /></li></Link>
            <Link href="/insights"><li className='bg-slate-600 p-2 rounded hover:bg-slate-950 hover:text-5xl text-3xl'><CgInsights /></li></Link>
            <Link href="/Login"><li>
              <button className='bg-red-400 font-bold rounded text-3xl p-2 hover:bg-red-600'>
                <CgProfile />
              </button>
            </li></Link>
          </ul>
        </div>):((<div className='text-3xl p-5 absolute top-0 right-0' onClick={() => setMenu(true)}>
          <TiThMenu />
        </div>))}

        
    </>
  );
};

export default Navbar;
