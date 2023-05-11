import React from 'react'

const ToDoCard = (props) => {
    return (
        <div className='card rounded-lg shadow-md grid gap-2 p-5'>
            <div className='flex gap-2 items-center'>
                <span className='badge badge-xs badge-[000]'></span>
                <p>{props.id}</p>
            </div>
            <div className='grid gap-2 pl-5'>
                <p className='text-gray-400 text-sm'>{props.due}</p>
                <div className='flex gap-2 items-center'>
                    <div className='avatar'>
                        <div className='w-7 rounded-full'>
                            <img src={props.avatar} alt="" />
                        </div>
                    </div>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard