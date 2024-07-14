import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'
const Privateroute = () => {
    const {currentuser}=useSelector((state)=>state.user2)
  return (
    currentuser ? <Outlet />:<Navigate to='/signin' />
  )
}

export default Privateroute
