import React from 'react'

const Notifications = () => {
    return (
        <div>
            <div>
                <div className='card rounded-lg shadow-md p-6 grid gap-4'>
                    <p>Notification <span>12</span></p>
                    <div className='flex justify-between items-center'>
                        <div className='space-y-2'>
                            <p>Journey Management</p>
                            <p className='text-gray-400'>5 minutes ago</p>
                        </div>
                        <span className='indicator-item badge badge-primary'></span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Notifications