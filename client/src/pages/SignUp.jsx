import React, { useState } from "react";
import XSvg from "../assets/X";
import {FaUser} from 'react-icons/fa'
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link, useNavigate} from 'react-router-dom'
const SignUp = () => {
  const [formdata,setFormdata]=useState({})
  const[loading,setLoading]=useState(false)
  const[error,seterror]=useState(null)
  const navigate=new useNavigate()
  console.log(formdata)
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const res=await fetch('/api/user/signup',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)
      })
      const data=await res.json()
      if(data.message==="user created"){
        
        setLoading(false)
        navigate('/signin')
      }
      else{
      setLoading(false)
      seterror(data.message)
      return
    }
     
    } catch (error) {
      setLoading(false)
      seterror(error.message)
    }
  }
  async function handleChange(e){
    setFormdata({...formdata,[e.target.id]:e.target.value})
  }
  return (
    <main className="w-full px-10 h-screen bg-black ">
      <div className="md:flex h-full">
        <div className="hidden md:flex flex-1 items-center justify-center">
        <XSvg className='lg:w-2/3 md:w-2/3 fill-white' />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center  text-gray-300">
            <h1 className="font-semibold text-2xl  p-3 text-center capitalize ">Join today <span className="text-4xl text-blue-500">!</span></h1>
            <form onSubmit={handleSubmit} className="flex text-sm w-full flex-col gap-5 p-2 md:p-5 lg:w-[50%]">
                <div className="flex border-opacity-60 w-full border-slate-700 border hover:cursor-pointer items-center p-2  rounded-lg ">
                    <label htmlFor="name"><FaUser className="w-6 h-full mr-4"/></label>
                    <input type="text" id="name" onChange={handleChange} className="w-full border-none outline-none bg-black" required autoComplete="off" placeholder="username"/>
                </div><div className="flex border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg">
                    <label htmlFor="name"><CiMail className="w-6 h-full  mr-4"/></label>
                    <input type="email" id="email" onChange={handleChange} className="w-full border-none outline-none bg-black" required autoComplete="off" placeholder="mail"/>
                </div>
                <div className="flex  border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg ">
                    <label htmlFor="name"><RiLockPasswordLine className="w-6 h-full  mr-4"/></label>
                    <input type="password" id="password" onChange={handleChange} className="w-full border-none outline-none bg-black" required autoComplete="off" placeholder="password"/>
                </div>
                <button disabled={loading} className="w-full disabled:cursor-not-allowed disabled:bg-slate-600 outline-none hover:scale-105 transition-transform font-semibold duration-2000 bg-blue-700 p-3 rounded-2xl hover:opacity-95">{loading ? 'Loading...':'Sign up'}</button>
                <Link to={'/signin'} className="w-full outline-none border-opacity-60 border-slate-600 border text-center hover:text-white  transition-border font-semibold duration-2000  text-blue-700  p-3 rounded-2xl hover:opacity-95">Sign in</Link>
                {error &&<p className="text-center">{error}</p>}
            </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
