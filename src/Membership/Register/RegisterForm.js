import React, { useState } from 'react'
import { UserIcon, MailIcon, UserAddIcon } from '@heroicons/react/solid'
import { LockClosedIcon } from '@heroicons/react/outline'
import { Link, Navigate } from 'react-router-dom'
import PageTitle from '../../utils/PageTitle'
import endpoint from '../../utils/endpoints/endpoint'


/*
    This component is the form that handles user registration.
    It also includes a Fetch API for handling communication between
    component (website) and the database.
 */

function RegisterForm() {
    PageTitle('A&C Registration')

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [successMSG, setSuccessMSG] = useState('')
    const [role, setRole] = useState('')
    const signupURL = '/user'


    const handleSubmit = (e) => {
        e.preventDefault()
        const [firstName, lastName, otherName] = name.split(' ')
        const data = {
            firstName: firstName,
            lastName: lastName,
            otherName: otherName,
            email: mail,
            password: password,
            roleId: role
        }
        endpoint.post(signupURL, data).then((res) => {
            setName('')
            setMail('')
            setPassword('')
            setRole('')
            console.log(res)
            // setTimeout(() => {
            //     Navigate('/')
            // }, 3000)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className='space-y-10'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5 place-items-center'>
                <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1'>
                    <UserIcon className='h-8 text-place' />
                    <input type="text" autoFocus autoComplete='no' placeholder="Full Name" className='bg-transparent placeholder:text-place outline-none h-10 w-full' />
                </fieldset>
                <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1'>
                    <MailIcon className='h-8 text-place' />
                    <input type="email" autoComplete='no' placeholder="user@mail.com" className='bg-transparent placeholder:text-place outline-none h-10 w-full' />
                </fieldset>
                <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5  md:w-2/3 gap-1'>
                    <LockClosedIcon className='h-8 text-place' />
                    <input type="password" placeholder="Password" className='bg-transparent placeholder:text-place outline-none h-10 w-full' />
                </fieldset>
                <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1'>
                    <UserAddIcon className='h-8 text-place' />
                    <select name="" id="" className='bg-transparent outline-none h-10 w-full text-accent' >
                        <option defaultValue={'role'}>Role</option>
                        <option value="">Health & Safety Officer</option>
                        <option value="">Human Resources</option>
                        <option value="">Delivery Officer</option>
                        <option value="">Journey Officer</option>
                        <option value="">Logistics Coordinator</option>
                        <option value="">Terminal Officer</option>
                        <option value="">Waybill Officer</option>
                        <option value="">Finance Officer</option>
                    </select>
                </fieldset>
                <fieldset className='grid items-center'>
                    <label className="label cursor-pointer space-x-3 flex items-center">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text text-primary">I agree with Axle and Cartage Terms and Privacy Policy</span>
                    </label>
                </fieldset>
                <button className="btn btn-primary">Register</button>
            </form>
            <p className='text-center'>Already have an account? <Link to={'/'}><span className='font-bold underline underline-offset-4'>Sign In</span></Link></p>
        </div>
    )
}

export default RegisterForm