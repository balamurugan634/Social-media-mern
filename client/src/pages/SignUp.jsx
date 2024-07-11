import React from "react";
import XSvg from "../assets/X";
import {FaUser} from 'react-icons/fa'
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
    <main className="w-full px-10 h-screen  ">
      <div className="md:flex h-full">
        <div className="hidden md:flex flex-1 items-center justify-center">
        <XSvg className='lg:w-2/3 md:w-2/3 fill-white' />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center  text-gray-300">
            <h1 className="font-semibold text-3xl  p-3 text-center capitalize ">Join today <span className="text-4xl text-blue-500">!</span></h1>
            <form action="" className="flex text-sm w-full flex-col gap-5 p-2 md:p-5 lg:w-[50%]">
                <div className="flex border-opacity-60 w-full border-slate-700 border hover:cursor-pointer items-center p-2  rounded-lg ">
                    <label htmlFor="name"><FaUser className="w-6 h-full mr-4"/></label>
                    <input type="text" id="name" className="w-full border-none outline-none bg-transparent" placeholder="username"/>
                </div><div className="flex border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg">
                    <label htmlFor="name"><CiMail className="w-6 h-full  mr-4"/></label>
                    <input type="email" id="email" className="w-full border-none outline-none bg-transparent" placeholder="mail"/>
                </div>
                <div className="flex  border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg ">
                    <label htmlFor="name"><RiLockPasswordLine className="w-6 h-full  mr-4"/></label>
                    <input type="email" id="email" className="w-full border-none outline-none bg-transparent" placeholder="password"/>
                </div>
                <button className="w-full disabled:cursor-not-allowed disabled:bg-slate-600 outline-none hover:scale-105 transition-transform font-semibold duration-2000 bg-blue-700 p-3 rounded-2xl hover:opacity-95">Sign up</button>
                <Link to={'/signin'} className="w-full outline-none border-opacity-60 border-slate-600 border text-center hover:text-white  transition-border font-semibold duration-2000  text-blue-700  p-3 rounded-2xl hover:opacity-95">Sign in</Link>
  
            </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
