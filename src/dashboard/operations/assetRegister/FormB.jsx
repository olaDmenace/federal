import React from 'react'

function FormB() {
  return (
    <div className='py-5 text-primary space-y-3'>
        <h4 className='text-lg font-semibold'>Form B - Semi Trailer</h4>
        <h6 className='font-semibold text-lg'>Semi-Trailer</h6>
        <form action="" className='grid text-primary gap-5 w-full'>
            <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                <label htmlFor="">
                    Fleet No - Semi - Trailer
                    <input className='input input-primary w-full' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Semi -Trailer Chasis
                    <input className='input input-primary w-full' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Product Type
                    <select className='select select-primary w-full' name="" id="">
                        <option value="">Select Type</option>
                    </select>
                </label>
                <label htmlFor="">
                    Cargo Capacity
                    <input className='input input-primary w-full' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Vendor - Calibration
                    <select className='select select-primary w-full' name="" id="">
                        <option value="">Select Vendor</option>
                    </select>
                </label>
                <label htmlFor="">
                    Calibration Type
                    <select className='select select-primary w-full' name="" id="">
                        <option value="">Select Type</option>
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Compactment 1</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Ullage
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Overall Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Neck Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Liquid Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Volume
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Compactment 2</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Ullage
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Overall Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Neck Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Liquid Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Volume
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Compactment 3</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Ullage
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Overall Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Neck Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Liquid Height
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Volume
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Chart Lifecycle</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Issue Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Expiry Date
                        <input className='input input-primary w-full' type="date" name="" id="" />
                    </label>                    
                </fieldset>
            </fieldset>
            <fieldset>
                <h6 className='font-semibold text-lg'>Custody</h6>
                <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                    <label htmlFor="">
                        Linked Truck
                        <select className='select select-primary w-full' name="" id="">
                            <option value="">Select Truck Number</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Maintenance Vendor
                        <select className='select select-primary w-full' name="" id="">
                            <option value="">Select Vendor</option>
                        </select>
                    </label>                    
                </fieldset>
            </fieldset>
            <button className='btn btn-primary mx-auto' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormB