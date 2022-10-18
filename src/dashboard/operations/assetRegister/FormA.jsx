import React from 'react'

function FormA() {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Form A - Tractor</h4>
            <h6 className='font-semibold text-lg'>Identification</h6>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label className='text-primary'>
                        Truck Number
                        <select class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Truck Number</option>
                        </select>
                    </label>
                    <label className='text-primary'>
                        Fleet No. - Tractor
                        <select class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Service Type</option>
                        </select>
                    </label>
                    <label>
                        Tractor Chasis
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Engine Number
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        VIN/SN
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        License Plate
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Year Manufacture
                        <select className='select select-primary w-full'>
                            <option selected disabled value="">Select Year</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Brand
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Model
                        <select className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Model</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Registration State/Province
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <input className='py-5' type="file" src="" alt="" />
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Operational Status
                        <select className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Current Assignee - LC
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Assignee - JO
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Asignee - DO
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Ownership
                        <select className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Ownership</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Owner
                        <select className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Owner</option>
                        </select>
                    </label>
                </fieldset>
                <label htmlFor="">
                    Additional Details
                    <textarea className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                </label>
                <button className='btn btn-primary mx-auto' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormA