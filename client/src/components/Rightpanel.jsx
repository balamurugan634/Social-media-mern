import React from 'react'
import Suggestcard from './Suggestcard'

const Rightpanel = () => {
  return (
    <div className='hidden lg:flex h-full w-1/4 text-white bg-black p-2 overflow-hidden'>
      <div className="w-full">
        <h1 className='font-bold text-xl xl:text-2xl p-2'>Suggested peoples</h1>
        <div className=" mt-2">
          <Suggestcard />
        </div>
      </div>
    </div>
  )
}

export default Rightpanel
