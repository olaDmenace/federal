import React from 'react'

function FormA3() {
  return (
    <div className='py-5 text-primary space-y-3'>
        <form className='grid text-primary gap-5 w-full' action="">
            <fieldset>
                <h6 className='font-semibold text-lg'>Maintenance Schedule</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Last PM Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Next PM Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Life Cycle</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        In-Service Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        In-Service Odometer
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Vehicle Life Estimates</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Estimated Service Life in Months
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Estimated Service Life in Meter
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Estimated Resale Value
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Out-of-Service</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Estimated Service Life in Months
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Out-of-Service Odometer
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Financials</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Purchase Vendor
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Purchase Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Purchase Price
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Odometer
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                    <label htmlFor="">
                        Notes
                        <textarea className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                    </label>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Warranty</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Expiration Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Max Meter Value
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <button className='btn btn-primary mx-auto' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormA3