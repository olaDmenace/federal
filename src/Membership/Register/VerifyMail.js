import React from 'react'
import Mail from '../../images/Mail.svg'
import PageTitle from '../../utils/PageTitle'


function VerifyMail() {
  PageTitle('A&C Mail Verification')
  return (
      <div className='flex gap-10 flex-col items-center'>
        <h2 className='text-4xl font-bold'>Verify Your Email.</h2>
        <img src={Mail} alt="" />
        <p className='w-4/5'>A verification email has been sent to you. Please click on the link in the email to proceed to your account</p>
        <button class='btn btn-primary mx-auto'>Resend Mail</button>
        <button className='btn btn-outline text-primary'>Sign In</button>
      </div>
  )
}

export default VerifyMail