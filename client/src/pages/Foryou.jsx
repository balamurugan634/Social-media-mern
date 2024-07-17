import React, { useEffect, useState } from 'react'
import Post from '../components/Post';

const Foryou = () => {
  useEffect(()=>{
    handlefetch()
  },[]);
  const [postlist,setpostlist]=useState([])
  // console.log(postlist)
  async function handlefetch(){
    try {
      const res=await fetch('api/post/getallpost')
      const data=await res.json()
      if(data.success==false){
        console.log(data.message)
      }
      setpostlist(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=''>
      {postlist.map((post)=>(
        <Post itemlist={post} key={post._id}/>
      ))}
    </div>
  )
}

export default Foryou
