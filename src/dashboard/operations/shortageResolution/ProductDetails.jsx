import React from 'react'

function ProductDetails() {
    return (
        <div>
            <form className='grid gap-5 text-primary my-5'>
                <h4 className='text-xl text-primary font-medium'>Product Details</h4>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Product Loaded
                        <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Quantity Loaded
                        <input class='input input-primary w-full' placeholder='33,000 LTRS' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Quantity Delivered
                        <input class='input input-primary w-full' placeholder='33,000 LTRS' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Estimated Product Shortage (Entire Trip)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        ACL Confirmed Shortage (Entire Trip)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Customer Shortage Claim (Entire Trip)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Total Agreed Shortage
                        (Multiple Customers)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Agreed Shortage
                        (Direct Customer)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Product Price
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Agreed shortage Value (Multiple Customers)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Agreed Shortage Value (Direct Customer)
                        <input class='input input-primary w-full' placeholder='' type="text" name="" id="" />
                    </label>
                </fieldset>
                <h4 className='text-xl text-primary font-medium'>ACL Shortage Resolution</h4>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Resolution Parameter
                        <select className='w-full select select-primary' name="" id="">
                            <option selected disabled value="">Ullage</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Shortage Reason
                        <select className='w-full select select-primary' name="" id="">
                            <option selected disabled value="">Calibration Chart</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Responsible Party
                        <select className='w-full select select-primary' name="" id="">
                            <option selected disabled value="">Company</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Amount Charged to Company
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Amount Charged to DO
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Amount Charged to Customer
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <label htmlFor="">
                    Remarks
                    <textarea className='textarea textarea-primary w-full' name="" id="" rows="5"></textarea>
                </label>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Resolution Status
                        <select className='w-full select select-primary' name="" id="">
                            <option selected disabled value="">Open</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Shortage Refund Status
                        <select className='w-full select select-primary' name="" id="">
                            <option selected disabled value="">Shortage Refund Status</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default ProductDetails