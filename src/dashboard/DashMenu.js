import React from 'react'
import Dash from '../images/Dash.png'
import Logo from '../images/LogoDark.png'
import {ChevronDownIcon, ChipIcon, CogIcon, CreditCardIcon, GlobeIcon, LoginIcon, ShieldCheckIcon, UserGroupIcon} from '@heroicons/react/outline'
import { useState } from 'react'


function DashMenu() {

    const [operations, setOperations] = useState(false)
    const operationsSubMenu = (show) =>{
        setOperations(show => !show)
    }

  return (
    <div>
        <div className='h-screen w-full bg-primary relative grid py-10 gap-10'>
            <img className='mix-blend-overlay h-screen w-full absolute' src={Dash} alt="" />
            <img className='w-1/2 mx-auto' src={Logo} alt="" />
            <div className='space-y-16 pl-12'>
                <div className='relative space-y-5 w-4/5'>
                    <div className='items-center flex hover:text-white gap-2'>
                        <ChipIcon className='h-8 stroke-1' />
                        <h4>Dashboard</h4>
                    </div>
                    <div className='items-center relative flex hover:text-white gap-7 '>
                        <div className='flex gap-2 items-center'>
                            <GlobeIcon className='h-8 stroke-1' />
                            <h4>Operations</h4>
                        {operations&&<div className='absolute bg-white text-primary px-3 py-10 top-1/4 left-full w-60 space-y-3 rounded-r-lg border-r border border-primary'>
                                <p>Truck Programming</p>
                                <p>Journey Management</p>
                                <p>Waybill Management</p>
                                <p>Trip Expense Request</p>
                                <p>Shortage Resolution</p>
                            </div>}
                        </div>
                        <ChevronDownIcon onClick={operationsSubMenu} className='h-6 stroke-1 hover:scale-125 transition duration-500' />
                    </div>
                    <div className='items-center flex hover:text-white gap-2'>
                        <ShieldCheckIcon className='h-8 stroke-1' />
                        <h4>Health & Safety</h4>
                    </div>
                    <div className='items-center flex hover:text-white gap-2'>
                        <CreditCardIcon className='h-8 stroke-1' />
                        <h4>Finances</h4>
                    </div>
                    <div className='items-center flex hover:text-white gap-2'>
                        <UserGroupIcon className='h-8 stroke-1' />
                        <h4>Human Resources</h4>
                    </div>
                    <div className='items-center flex hover:text-white gap-2'>
                        <CogIcon className='h-8 stroke-1' />
                        <h4>Settings</h4>
                    </div>
                </div>
                <div className='items-center relative flex hover:text-white gap-2'>
                    <LoginIcon className='h-8 stroke-1' />
                    <h4>Logout</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashMenu