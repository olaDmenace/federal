import React from 'react'
import Left from './MemebershipLeft'
import Logo from '../images/LogoLight.png'
import { Outlet } from 'react-router-dom'

function Membership() {
  return (
    <div className='lg:flex'>
      <div className='hidden lg:block basis-1/2'>
        <Left/>
      </div>
      <div className='grid min-h-screen w-full basis-1/2 py-28 gap-14 text-center text-primary'>
        <img className='mx-auto' src={Logo} alt="" />
        <Outlet/>
      </div>
    </div>
  )
}

export default Membership