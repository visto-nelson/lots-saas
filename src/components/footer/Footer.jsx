import React from 'react'
import Logo from '../navbar/lotswhite.png';

const Footer = () => {
  return (
    <div className='md:grid sm:grid-flow-row md:grid-cols-3  text-white font-sans px-8 pt-20 bg-blue-900 '>
      {/**First col with the logo */}
      <div className='col-span-1 pb-6 '>
        <img src={Logo} alt="Lots logo" className="w-28 pb-3 "/>
        <h3 className='py-3 delay-100 hover:text-red-700 cursor-pointer'>(+264) 83 330 1830</h3>
        <h3 className='pb-3 hover:text-red-700 cursor-pointer'>solutions@lotsinsights.com</h3>
        <svg className='hover:text-red-700 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z"/></svg>
        
      </div>
      {/**Second col */}
      <div className='col-span-1 flex-none text-base justify-between font-sans	pd-6 '>
        <h1 className='font-bold text-xl pb-6'>Solutions</h1>
        <h3 className='hover:text-red-700 cursor-pointer'>Strategy and Consulting</h3> 
        <h3 className='hover:text-red-700 cursor-pointer'>Technology and Data</h3>
        <h3 className='hover:text-red-700 cursor-pointer'>Operations and Outsourcing</h3>
        <h3 className='hover:text-red-700 cursor-pointer'>Customer Interactive</h3>
        <h3 className='hover:text-red-700 cursor-pointer'>Bonds and Financials</h3>
      </div>
      {/**Third col */}
      <div className='col-span-1 flex-none text-base font-sans'>
      <h1 className='font-bold text-xl pb-6'>Insights</h1>
        <h3 className='hover:text-red-700 cursor-pointer'>Events</h3> 
        <h3 className='hover:text-red-700 cursor-pointer'>FAQs</h3>
      </div>
      <div className=' col-span-3 pt-6 px-14 text-center'>
        <hr></hr>
        <h1 className='py-7 text-sm font-sans font-bold mx-auto'>© 2023 Legion Business Operations Consulting & Technologies (PTY) LTD.</h1>
      </div>
    </div>
  )
}

export default Footer