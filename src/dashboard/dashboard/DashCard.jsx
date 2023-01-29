import React from 'react'

const DashCard = (props) => {
    return (
        <div className='bg-[#90D2AF] rounded grid gap-5 text-primary px-5 py-8 justify-items-center hover:text-secondary ease-in duration-300'>
            <props.icon className='h-40' />
            <p className='text-lg font-semibold'>{props.title}</p>
        </div>
    )
}

export default DashCard