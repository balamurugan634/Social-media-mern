import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import { Signinsuccess } from '../redux/user/userslice';
const Googleauth = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    async function handlegoogleauth(){
        try {
            const provider=new GoogleAuthProvider()
            const auth=getAuth(app)
            const result=await signInWithPopup(auth,provider)
            // console.log(result)
            const res=await fetch('/api/user/google',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            })
            const data=await res.json()
            dispatch(Signinsuccess(data))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <FcGoogle onClick={handlegoogleauth} className=" hover:cursor-pointer self-center" size={40} />

  )
}

export default Googleauth
