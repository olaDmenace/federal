import React from "react";
import PageTitle from "../../utils/PageTitle";


function ResetPassword() {
  PageTitle('A&C Reset Password')
  return (
    <div className='space-y-10 px-5'>
      <h2 className='text-4xl font-bold'>Reset Password.</h2>
      <div className='mx-auto place-self-center space-y-10'>
        <input class='input input-bordered input-primary w-2/3 md:1/3' placeholder="mail@email.com" type="email" name="" id="" />
        <button class="btn btn-primary block self-center mx-auto">Send</button>
      </div>
    </div>
  )
}

export default ResetPassword