import { AdjustmentsIcon, BellIcon, ClipboardCheckIcon, CreditCardIcon, ExclamationCircleIcon, IdentificationIcon, LinkIcon, LocationMarkerIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/solid'
import React from 'react'
import Notification from '../Notification'
import DashCard from './DashCard'

const Dashboard = () => {
    return (
        <div className='grid gap-5 my-10'>
            <Notification />
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-11/12 m-auto'>
                <DashCard icon={LocationMarkerIcon} title={'Journey Management'} />
                <DashCard icon={IdentificationIcon} title={'Human Capital'} />
                <DashCard icon={ClipboardCheckIcon} title={'Parts & Inventory'} />
                <DashCard icon={ShieldCheckIcon} title={'Health & Safety'} />
                <DashCard icon={CreditCardIcon} title={'Finances'} />
                <DashCard icon={LinkIcon} title={'Asset Register'} />
                <DashCard icon={UsersIcon} title={'Operations Support'} />
                <DashCard icon={AdjustmentsIcon} title={'Maintenance Booking'} />
                <DashCard icon={BellIcon} title={'Reminder'} />
                <DashCard icon={ExclamationCircleIcon} title={'RTA/Incidents'} />
            </div>
        </div>
    )
}

export default Dashboard