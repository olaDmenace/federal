import React from 'react'

const NotificationTypeCard = (props) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='space-y-2'>
                <p>{props.title}</p>
                <p className='text-gray-400 text-sm'>{props.time}</p>
            </div>
            {props.state && <span className='indicator-item badge badge-xs badge-primary'></span>}
        </div>
    )
}

export default NotificationTypeCard