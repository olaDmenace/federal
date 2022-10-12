import React from 'react'
import BG from '../images/Truck.png'

function MemebershipLeft() {
  return (
    <div className='fixed w-1/2'>
      <div className='h-screen w-full bg-primary relative grid items-center text-center text-white'>
          <img className='h-screen w-full absolute mix-blend-overlay' src={BG} alt="" />
          <div className='relative space-3'>
            <h1 className='text-8xl font-semibold'>Axle &<br/>Cartage</h1>
            <p className='tracking-widest font-semibold'>You are welcome</p>
          </div>
      </div>
    </div>
  )
}

export default MemebershipLeft