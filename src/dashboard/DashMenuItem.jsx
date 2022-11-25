import React from 'react'
import { NavLink } from 'react-router-dom'

const DashMenuItem = (props) => {
    return (
        <div>
            <NavLink to={''} className='items-center flex text-white gap-2'>
                {props.Icon}
                <h4>{props.Title}</h4>
            </NavLink>
        </div>
    )
}

export default DashMenuItem