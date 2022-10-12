import React from 'react'
import { Link } from 'react-router-dom'
import {MailIcon} from '@heroicons/react/solid'
import {LockClosedIcon} from '@heroicons/react/outline'


function LoginForm() {
  return (
    <div className='space-y-10'>
        <form action="" className='flex flex-col gap-5 place-items-center'>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1'>
                <MailIcon className='h-8 text-place' />
                <input type="email" placeholder="user@mail.com" className='bg-transparent placeholder:text-place outline-none h-10 w-full' />
            </fieldset>
            <fieldset className='flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1'>
                <LockClosedIcon className='h-8 text-place' />
                <input type="password" placeholder="Password" className='bg-transparent placeholder:text-place outline-none h-10 w-full' />
            </fieldset>
            <fieldset className='flex justify-between items-center gap-16 w-5/6  md:w-2/3'>
                <label class="label cursor-pointer" className='space-x-3 flex items-center'>
                    <input type="checkbox" class="checkbox checkbox-primary"/>
                    <span class="label-text text-primary">Remember me</span> 
                </label>
                <Link to={'/ResetPassword'}><p className='text-sm'>Forgot Password</p></Link>
            </fieldset>
            <button className='' class="btn btn-primary">Sign In</button>
        </form>
        <p className='text-center'>Do not have an accout yet? <br/> <Link to={'/register'}><span className='font-bold underline underline-offset-4'>Create Account</span></Link></p>
    </div>
  )
}

export default LoginForm