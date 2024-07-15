import React from 'react'
import Navbar from '../components/Navbar'
import Rightpanel from '../components/Rightpanel'
import Center from '../components/Center'

const Home = () => {
  return (
    <div className='min-h-screen w-screen flex justify-center bg-black '>
        <div className="w-full h-full md:w-[90%] lg:w-[80%] flex ">
        <Navbar />
        <Center />
        <Rightpanel  />
        </div>
    </div>
  )
}

export default Home
