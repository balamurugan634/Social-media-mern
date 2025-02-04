import React, { useState } from "react";
import XSvg from "../assets/X";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link, useNavigate} from 'react-router-dom'
import { Signinfailure,Signinstart,Signinsuccess } from "../redux/user/userslice";
import { useDispatch, useSelector } from "react-redux";
import Googleauth from "../components/Googleauth";
const SignIn = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loading,error}=useSelector((state)=>state.user2)
    const [formdata,setFormdata]=useState({})
    console.log(formdata)
    function handlechange(e){
        setFormdata({...formdata,[e.target.id]:e.target.value})
    }
    
    async function handlesubmit(e){
        e.preventDefault();
        try {
            dispatch(Signinstart())
            const res=await fetch('/api/user/signin',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formdata)
            })
            const data=await res.json()
            if(data.success===false){
                dispatch(Signinfailure(data.message))
                return
            }
            dispatch(Signinsuccess(data))
            navigate('/')
        } catch (error) {
            dispatch(Signinfailure(error.message))
        }
    }
  return (
    <main className="w-full px-10 h-screen bg-black ">
      <div className="md:flex h-full">
        <div className="hidden md:flex flex-1 items-center justify-center">
        <XSvg className='lg:w-2/3 md:w-2/3 fill-white' />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center  text-gray-300">
            <h1 className="font-semibold text-2xl  p-3 text-center capitalize ">Welcome Back <span className="text-4xl text-blue-500">!</span></h1>
            <form onSubmit={handlesubmit} className="flex text-sm w-full flex-col gap-5 p-2 md:p-5 lg:w-[50%]">
               <div className="flex border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg">
                    <label htmlFor="name"><CiMail className="w-6 h-full  mr-4"/></label>
                    <input type="email" onChange={handlechange} id="email"  className="w-full border-none outline-none bg-black" required autoComplete="off" placeholder="mail"/>
                </div>
                <div className="flex  border-opacity-60 border-slate-700 border hover:cursor-pointer items-center p-2 rounded-lg ">
                    <label htmlFor="name"><RiLockPasswordLine className="w-6 h-full  mr-4"/></label>
                    <input onChange={handlechange} type="password" id="password"  className="w-full border-none outline-none bg-black" required autoComplete="off" placeholder="password"/>
                </div>
                <button disabled={loading} className="w-full disabled:cursor-not-allowed disabled:bg-slate-600 outline-none hover:scale-105 transition-transform font-semibold duration-2000 bg-blue-700 p-3 rounded-2xl hover:opacity-95">{loading ? 'Loading...':'Sign in'}</button>
                <p className="text-center">or</p>
                <Googleauth />
                <hr className="opacity-40"/>
                <Link to={'/signup'} disabled={loading} className="w-full outline-none border-opacity-60 border-slate-600 border text-center hover:text-white  transition-border font-semibold duration-2000  text-blue-700  p-3 rounded-2xl hover:opacity-95">Sign up</Link>
                {error && <p className="text-center">{error}</p>}
            </form>
        </div>
      </div>
    </main>
  )
}

export default SignIn
