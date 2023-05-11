import React from 'react'
import NotificationTypeCard from './NotificationTypeCard'
import Avatar from '../../images/Avatar.png'

const Notifications = () => {
    return (
        <div>
            <div className='grid gap-8'>
                <div className='card rounded-lg shadow-md p-6 grid gap-4'>
                    <p className='font-semibold text-lg'>Notification <span className='indicator-item badge badge-primary float-right'>12</span></p>
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} state={'true'} />
                    <NotificationTypeCard title={'Truck Visiblity Alert'} time={'May 06, 2023'} state={'true'} />
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} state={'true'} />
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} state={'true'} />
                    <NotificationTypeCard title={'Truck Visiblity Alert'} time={'May 06, 2023'} />
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} />
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} />
                    <NotificationTypeCard title={'Journey Management'} time={'5 Minutes Ago'} />
                </div>
                <div className='card rounded-lg shadow-md p-6 grid gap-4'>
                    <p className='font-semibold text-lg'>To-do<span className='indicator-item badge badge-secondary float-right'>4</span></p>
                    <div className='card rounded-lg shadow-md grid gap-2 p-5'>
                        <div className='flex gap-2 items-center'>
                            <span className='badge badge-xs badge-[000]'></span>
                            <p>ID-112200</p>
                        </div>
                        <div className='grid gap-2 pl-5'>
                            <p className='text-gray-400 text-sm'>Due in 2 Days</p>
                            <div className='flex gap-2 items-center'>
                                <div className='avatar'>
                                    <div className='w-7 rounded-full'>
                                        <img src={Avatar} alt="" />
                                    </div>
                                </div>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Notifications