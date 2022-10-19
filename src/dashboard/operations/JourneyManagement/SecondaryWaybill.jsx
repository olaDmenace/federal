import React from 'react'


/* This component serves handles the waybill for each customer
per delivery. It is reflected in the CustomerListDetails component
*/

function SecondaryWaybill() {
    return (
        <form className='text-primary grid gap-5 w-1/2'>
            <h6 className='font-medium'>Secondary Waybill 1</h6>
            <input className='input input-primary w-full' placeholder='SWN-123456' type="text" name="" id="" />
            <label>
                Upload Waybill
                <input className='pt-4' type='file'></input>
            </label>
            <label htmlFor="">
                Customer Name
                <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" />
            </label>
            <label htmlFor="">
                Secondary Customer Address
                <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" />
            </label>
            <fieldset className='grid text-primary gap-5 w-full md:grid-cols-2 items-end'>
                <label htmlFor="">
                    Delivery Zone
                    <select className='select select-primary w-full' name="" id="">
                        <option selected disabled value="">2</option>
                    </select>
                </label>
                <label htmlFor="">
                    Quantity Loaded
                    <input class='input input-primary w-full' placeholder='33000 Ltrs' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Quantity Delivered
                    <input class='input input-primary w-full' placeholder='32980 Ltrs' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Estimated Product Shortage
                    <input class='input input-primary w-full' placeholder='20 Ltrs' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Customer Shortage Claim
                    <input class='input input-primary w-full' placeholder='20 Ltrs' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Secondary Delivery Distance Travelled
                    <input class='input input-primary w-full' placeholder='56 Km' type="text" name="" id="" />
                </label>
            </fieldset>
            <fieldset className='grid gap-5'>
                <h6 className='font-medium'>Transaction Status</h6>
                <label htmlFor="">
                    Reviewed and Complete
                    <select className='w-full select select-primary' name="" id="">
                        <option value="">Open</option>
                    </select>
                </label>
            </fieldset>
        </form>
    )
}

export default SecondaryWaybill