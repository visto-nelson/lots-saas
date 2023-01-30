import React from 'react'

const TryLots = () => {
  return (
    <div className=' grid md:grid-cols-2 -m-7 z-50 relative  rounded-md bg-blue-600 text-white mx-11 py-6 px-3 bg-gradient-to-r from-pink-500  via-indigo-500 to-blue-600  '>
      {/**Heading div */}
      <div className='col-span-1'>
        <di className='	font-black tracking-wider md:tracking-widest'>
         <h1 className='font-sans mtext-2xl md:text-3xl lg:text-4xl'>Try LOTS today!</h1>
        </di>
        <div className='flex pt-8'>
          {/**Link div */}
          <button className='pr-4 hover:text-blue-900'>Consulting</button>
          <button className='pr-4 hover:text-blue-900'>Technology</button>
          <button className='pr-4 hover:text-blue-900'>Data</button>
        </div>
        
      </div>
      {/**Button div */}
      <div className='col-span-1 '>
        <div>
          
        </div>
        <div className='flex justify-end pt-10'>
        <button className=" bg-blue-900 text-sm text-white py-2 mr-4 hover:bg-slate-800 delay-100 px-7  duration-300  rounded">
          Join Our Community
        </button>

        <button className=" bg-none border border-solid	 border-white text-sm text-white py-2 mr-4 hover:bg-slate-800 delay-100 px-7 duration-300  rounded">
          Sign Up
        </button>
        </div>
      
      </div>
    </div>
  )
}

export default TryLots