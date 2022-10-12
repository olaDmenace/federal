import React from 'react'
import {UserIcon, MailIcon, UserAddIcon} from '@heroicons/react/solid'
import {LockClosedIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import PageTitle from '../../utils/PageTitle'

function RegisterForm() {
    PageTitle('A&C Registration')
  return (
    <div className='space-y-10'>
        <form action="" className='flex flex-col gap-5 place-items-center'>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-2/3 md:1/3 gap-1'>
                <UserIcon className='h-8 text-accent' />
                <input type="email" placeholder="Full Name" className='bg-transparent placeholder:text-accent outline-none h-10 w-full' />
            </fieldset>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-2/3 md:1/3 gap-1'>
                <MailIcon className='h-8 text-accent' />
                <input type="email" placeholder="user@mail.com" className='bg-transparent placeholder:text-accent outline-none h-10 w-full' />
            </fieldset>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-2/3 md:1/3 gap-1'>
                <LockClosedIcon className='h-8 text-accent' />
                <input type="password" placeholder="Password" className='bg-transparent placeholder:text-accent outline-none h-10 w-full' />
            </fieldset>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-2/3 md:1/3 gap-1'>
                <UserAddIcon className='h-8 text-accent' />
                <select name="" id="" className='bg-transparent placeholder:text-accent outline-none h-10 w-full text-accent' >
                    <option value="" disabled selected hidden>Role</option>
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
                <label class="label cursor-pointer" className='space-x-3 flex items-center'>
                    <input type="checkbox" class="checkbox checkbox-primary"/>
                    <span class="label-text text-white">I agree with Axle and Cartage Terms and Privacy Policy</span> 
                </label>
            </fieldset>
            <button className='' class="btn btn-primary">Sign In</button>
        </form>
        <p className='text-center'>Already have an account? <Link to={'/login'}><span className='font-bold underline underline-offset-4'>Sign In</span></Link></p>
    </div>
  )
}

export default RegisterForm