import React from 'react'

function FormC() {
    return (
        <div className='p-5 rounded-lg bg-white text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Form C - Equipment</h4>
            <h6 className='font-semibold text-lg'>Other Assets</h6>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Name
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Type
                        <select className='select select-primary w-full' name="" id="">
                            <option value="">Select Type</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Brand
                        <select className='select select-primary w-full' name="" id="">
                            <option value="">Select Brand</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Serial Number
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Labels
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <input className='my-5' type="file" name="" id="" />
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Custody</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Linked Vehicle
                            <select className='select select-primary w-full' name="" id="">
                                <option value="">Select Truck Number</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Current Assignee
                            <select className='select select-primary w-full' name="" id="">
                                <option value="">Select Store Name</option>
                            </select>
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Purchase Information</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Purchase Vendor
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Purchase Price
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Date
                            <input className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Warranty Expiration Date
                            <input className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                    <label htmlFor="">
                        Notes
                        <textarea className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                    </label>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Purchase Information</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            In-service Date
                            <input className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Service in Months
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Resale Value
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Out-of-Service Date
                            <input className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                    <label className='' htmlFor="">
                        Maintenance Vendor
                        <select className='select select-primary w-full' name="" id="">
                            <option value="">Select Vendor's Name</option>
                        </select>
                    </label>
                </fieldset>
                <button className='btn btn-primary mx-auto' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormC