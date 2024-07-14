import React from 'react'
import Navbar from '../components/Navbar'
import Rightpanel from '../components/Rightpanel'
import Center from '../components/Center'

const Home = () => {
  return (
    <div className='min-h-screen w-full table bg-black'>
        <div className="row w-full bg-slate-100 h-full">
        <Navbar />
        <Center />
        <Rightpanel  />
        </div>
    </div>
  )
}

export default Home
