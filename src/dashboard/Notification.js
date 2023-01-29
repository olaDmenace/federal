import React from 'react'
import Avatar from '../images/Avatar.png'
import { BellIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

function Notification() {
    // const lastName = localStorage.getItem(lastName)
    return (
        <div className='flex justify-between mx-10'>
            <p className='text-2xl text-primary font-bold'>Welcome</p>
            <div className='flex gap-5 items-center justify-end'>
                <div class='indicator'>
                    <span class="indicator-item indicator-end badge badge-primary">9</span>
                    <BellIcon className='w-12 stroke-1' />
                </div>
                <div class='avatar'>
                    <div class='w-12 rounded-xl'>
                        <img src={Avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification