import React from 'react'

function FormA4({ formData, setFormData }) {
    console.log(formData)

    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Specifications</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Wheels & Tires</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Drive Type
                            <select className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Brake
                            <select className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Rear Axle
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Fuel</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Fuel Type
                            <select className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Fuel Tank 1 Capacity
                            <input className='input input-primary w-full' type="text" name="" id="" value={formData.fuelTankCapacity1} onChange={(e) => setFormData({ ...formData, fuelTankCapacity1: e.target.value })} />
                        </label>
                        <label htmlFor="">
                            Fuel Tank 2 Capacity
                            <input className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Oil</h6>
                    <label htmlFor="">
                        Oil Capacity
                        <input className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Maintenance</h6>
                    <label htmlFor="">
                        Maintenance Vendor
                        <select className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA4