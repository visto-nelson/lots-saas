import React from 'react'
import imgUp from './image1up.png'
import imgDown from './image1down.png'
import imgUp2 from './image2up.png'
import imgDown2 from './image2down.png'



const Hero = () => {
  return (
    <div className='text-white grid grid-flow-row md:grid-cols-2 bg-indigo-900  rounded-bl-2xl'>
      {/**First div */}
      <div className='ml-11 mt-16'>
        <h1 className=' text-2xl lg:text-5xl	font-black tracking-wide font-Inter'>The Platform For<br/>Custom <span className='text-red-700'>Application</span>.</h1>
        <p className='mt-11 font-sans font-normal '>
          Design a landing login account for a Saas product.<br/>
          You can get inspiration from landing page.
      </p>
      {/**Two Buttons*/}
      <div className='my-11'>
      <button className=" bg-blue-700 text-sm py-2 mr-4 hover:bg-slate-800 delay-100 px-7 duration-300  rounded">
          Join Our Community
        </button>
        <button className=" bg-white  text-blue-900 py-2 text-sm  hover:bg-slate-800 delay-100 px-7 duration-300  rounded">
          Login
        </button>
      </div>
      {/**Statistics */}
      <div className='mt-11 md:mb-16 flex'>
        <p className='mr-5'><span className='text-3xl leading-3 tracking-wider	font-black'>20K+</span><br/>Application</p>
        <p className='mx-5'><span className='text-3xl leading-3 tracking-wider	font-black'>11M+</span><br/>Active User</p>
        <p className='mx-5'><span className='text-3xl leading-3 tracking-widest	font-black'>48K</span><br/>Projects</p>

      </div>
      </div>

      {/**Second div */}
      <div className=' flex pl-4 pt-4 justify-center md:justify-end'>
        {/**First Images */}
        <div className='pt-16 pb-3'>
        <img src={imgUp} alt="Lots logo" className=" w-40 md:h-52 md:w-60 pb-4 rounded-sm"/>
        <img src={imgDown} alt="Lots logo" className="w-40 md:h-52 md:w-60 rounded-sm"/>
        </div>
        {/**Second Images */}
        <div className='pl-4  pb-16'>
        <img src={imgUp2} alt="Lots logo" className="w-40 md:h-52 md:w-60 pb-4 rounded-sm"/>
        <img src={imgDown2} alt="Lots logo" className="w-40 md:h-56 md:w-60 rounded-sm"/>
        </div>
      </div>
    </div>

  )
}

export default Hero