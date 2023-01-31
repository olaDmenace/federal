import React from 'react'
import { Link } from 'react-router-dom'

const DashCard = (props) => {
    return (
        <Link to={props.Link} className='bg-[#90D2AF] rounded grid gap-5 text-primary px-5 py-8 justify-items-center hover:text-secondary ease-in duration-300'>
            <props.icon className='h-12' />
            <p className='text-lg font-semibold'>{props.title}</p>
        </Link>
    )
}

export default DashCard