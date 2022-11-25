import React from 'react'
import Dash from '../images/Dash.png'
import Logo from '../images/LogoDark.png'
import { ChevronDownIcon, ChipIcon, CogIcon, CreditCardIcon, GlobeIcon, LoginIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../utils/features/userSlice'
import DashMenuItem from './DashMenuItem'

function DashMenu() {

    const [operations, setOperations] = useState(false)
    const operationsSubMenu = (show) => {
        setOperations(show => !show)
    }

    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div>
            <div className='h-screen w-full bg-primary relative grid py-10 gap-10'>
                <img className='mix-blend-overlay h-screen w-full absolute' src={Dash} alt="" />
                <img className='w-1/2 mx-auto' src={Logo} alt="" />
                <div className='space-y-16 pl-12'>
                    <div className='relative space-y-5 w-4/5'>
                        <NavLink to={''} className='items-center flex text-white gap-2'>
                            <ChipIcon className='h-8 stroke-1' />
                            <h4>Dashboard</h4>
                        </NavLink>
                        <div onClick={operationsSubMenu} className='items-center relative flex text-white gap-7 '>
                            <DashMenuItem onClick={operationsSubMenu} Icon={<GlobeIcon className='h-8 stroke-1' />} Title={'Operations'} />
                            {operations && <div className='absolute bg-white text-primary px-3 py-10 top-1/4 left-[70%] w-60 space-y-3 rounded-r-lg border-r border border-primary'>
                                <NavLink to={'/dashboard/TruckProgramming'} className='hover:font-bold hover:ease-in-out duration-150 block'>Truck Programming</NavLink>
                                <NavLink to={'/dashboard/JourneyManagement'} className='hover:font-bold hover:ease-in-out duration-150 block'>Journey Management</NavLink>
                                <p className='hover:font-bold hover:ease-in-out duration-150'>Waybill Management</p>
                                <p className='hover:font-bold hover:ease-in-out duration-150'>Trip Expense Request</p>
                                <p className='hover:font-bold hover:ease-in-out duration-150'>Shortage Resolution</p>
                            </div>}
                        </div>
                        <DashMenuItem Icon={<ShieldCheckIcon className='h-8 stroke-1' />} Title={'Health & Safety'} />
                        {/* <div className='items-center relative flex text-white gap-7 '>
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
                    <div className='items-center flex text-white gap-2'>
                        <ShieldCheckIcon className='h-8 stroke-1' />
                        <h4>Health & Safety</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <CreditCardIcon className='h-8 stroke-1' />
                        <h4>Finances</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <UserGroupIcon className='h-8 stroke-1' />
                        <h4>Human Resources</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <CogIcon className='h-8 stroke-1' />
                        <h4>Settings</h4>
                    </div> */}
                    </div>
                    <div className='items-center relative flex text-white gap-2 cursor-pointer' onClick={(e) => handleLogout(e)}>
                        <LoginIcon className='h-8 stroke-1' />
                        <h4>Logout</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashMenu