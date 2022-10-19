import React from 'react'
import { Outlet } from 'react-router-dom'
import DashMenu from './DashMenu'
import Notification from './Notification'

function Dashboard() {
  return (
    <div className='grid md:grid-cols-4 h-screen scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900 relative'>
      <div className='hidden md:block relative'>
        <div className='fixed w-1/4'>
          <DashMenu/>
        </div>
      </div>
      <div className='md:col-span-3 py-8 space-y-3 w-screen'>
        <Notification/>
        <div className='w-5/6 mx-auto'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard