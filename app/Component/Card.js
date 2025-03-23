import React from 'react';

const Card = ({text}) => {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-1/3 h-screen bg-slate-400 rounded-lg flex justify-center items-center m-1'></div>
        <div className='w-2/3 h-screen bg-slate-400 rounded-lg flex justify-center items-center m-1'><p className='font-semibold p-10 text-2xl text-black'>{text}</p></div>
      </div>
    </>
  );
}

export default Card;
