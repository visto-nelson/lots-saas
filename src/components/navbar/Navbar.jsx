import React from "react";
import Logo from './lotswhite.png';

const Navbar = () => {

  
  return (
    <div className="text-white  bg-blue-900 border-b grid sm:grid-cols-1 sm:my-auto md:grid-cols-12">
      <div className="invisible md:visible  md:col-span-2 ml-11 my-auto ">
        <img src={Logo} alt="Lots logo" className="w-20 "/>
      </div>
      <div className="invisible md:visible md:col-span-5 lg:col-span-7  "></div>
      <div className="flex my-2 sm:col-span-1  md:col-span-3 ">
        <button className="  text-sm  hover:text-gray-400 duration-300 px-7 py-3 rounded">
          Login
        </button>
        <button className=" bg-blue-700 text-sm  hover:bg-slate-800 delay-100 px-7 duration-300  rounded">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default Navbar;
