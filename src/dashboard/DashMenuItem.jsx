import React from 'react'
import { NavLink } from 'react-router-dom'

const DashMenuItem = (props) => {
    return (
        <div>
            <div className='items-center flex text-white gap-2'>
                {props.Icon}
                <h4>{props.Title}</h4>
            </div>
        </div>
    )
}

export default DashMenuItem