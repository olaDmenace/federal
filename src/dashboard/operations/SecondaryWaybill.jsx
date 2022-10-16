import React from 'react'


/* This component serves handles the waybill for each customer
per delivery. It is reflected in the CustomerListDetails component
*/

function SecondaryWaybill() {
  return (
    <div className='text-primary w-2/5 space-y-5'>
        <h6 className='font-medium'>Secondary Waybill 1</h6>
        <div className='grid gap-5'>
            <input className='input input-primary w-full' placeholder='SWN-123456' type="text" name="" id="" />
            <label>
                Upload Waybill<br/>
                <input className='pt-4' type='file'></input>
            </label><label htmlFor="">
                Customer Name<br/>
                <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" />
            </label><label htmlFor="">
                Secondary Customer Address<br/>
                <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" />
            </label>
        </div>
    </div>
  )
}

export default SecondaryWaybill