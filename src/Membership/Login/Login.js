import React from 'react'
import LoginForm from './LoginForm'
import PageTitle from '../../utils/PageTitle'


function Login() {
  PageTitle('A&C Login')
  return (
    <div className='space-y-10 px-5'>
      <h2 className='text-4xl font-bold'>Welcome Back.</h2>
      <div className='mx-auto place-self-center'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login