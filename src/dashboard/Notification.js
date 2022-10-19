import React from 'react'
import Avatar from '../images/Avatar.png'
import { BellIcon } from '@heroicons/react/outline'

function Notification() {
  return (
    <>
        <div className='flex gap-5 items-center justify-end mx-10'>
            <div class='indicator'>
                <span class="indicator-item indicator-end badge badge-primary">9</span> 
                <BellIcon className='w-12 stroke-1'/>
            </div>
            <div class='avatar'>
                <div class='w-12 rounded-xl'>
                    <img src={Avatar} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Notification