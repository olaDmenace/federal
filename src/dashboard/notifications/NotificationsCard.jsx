import React from 'react'
import NotificationTypeCard from './NotificationTypeCard'

const NotificationsCard = () => {
    return (
        <div className='rounded-lg shadow-md p-6 grid gap-5 md:col-span-4 md:h-screen md:overflow-y-scroll'>
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
    )
}

export default NotificationsCard