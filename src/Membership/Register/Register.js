import React from 'react'
import Reg from './RegisterForm'

function Register() {
  return (
    <div className='space-y-10 px-5'>
      <h2 className='text-4xl font-bold'>Set Up Your Account.</h2>
      <div className='mx-auto place-self-center'>
        <Reg/>
      </div>
    </div>
  )
}

export default Register