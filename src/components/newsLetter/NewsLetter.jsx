import React from 'react';

const NewsLetter = () => {
  return (
    <div className='h-60 bg-blue-800 mb-36 mt-20 md:mx-11  pt-10 px-8'>
      {/**Text */}
      <div className='pb-10'>
      <h1 className='text-white md:text-3xl	font-black tracking-wider'>To be updated about Our new <br />
          product subscribe to <span className='text-red-700'>news letter</span>.
      </h1>
      </div>
      {/**Button and a text flied at the left */}
      <div className='justify-center md:justify-end flex'>
        <div ><input className='py-2.5 mr-4  px-4 rounded-sm text-sm bg-gray-100 placeholder:text-slate-400 text-black border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' placeholder='Enter your email' /></div>
        <div><button className='py-2.5 bg-blue-900 text-md text-white hover:bg-slate-800 delay-100 mx-3 px-6 rounded-sm  ' >Join our Newsletter </button></div>
      </div>
    </div>
  )
}

export default NewsLetter