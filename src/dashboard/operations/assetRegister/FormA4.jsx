import React from 'react'

function FormA4({ formData, setFormData }) {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Specifications</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Wheels & Tires</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Drive Type
                            <select value={formData.specification.driveType} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, driveType: e.target.value } })} className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                                <option value="4x2">4x2</option>
                                <option value="4X4">4X4</option>
                                <option value="6x2">6x2</option>
                                <option value="6X4">6X4</option>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Brake
                            <select value={formData.specification.brakeSystem} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, brakeSystem: e.target.value } })} className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                                <option value="air">Air</option>
                                <option value="hydraulic">Hydraulic</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Rear Axle
                            <input value={formData.specification.rearAxle} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, rearAxle: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Fuel</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Fuel Type
                            <select value={formData.specification.fuelType} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, fuelType: e.target.value } })} className='select select-primary w-full' name="" id="">
                                <option selected disabled value="">Select</option>
                                <option value="cng">CNG</option>
                                <option value="ago">AGO</option>
                                <option value="PMS">PMS</option>
                                <option value="propane">Propane</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            Fuel Tank 1 Capacity
                            <input value={formData.specification.fisrtTankCapacity} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, fisrtTankCapacity: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Fuel Tank 2 Capacity
                            <input value={formData.specification.secondTankCapacity} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, secondTankCapacity: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Oil</h6>
                    <label htmlFor="">
                        Oil Capacity
                        <input value={formData.specification.oilCapacity} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, oilCapacity: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Maintenance</h6>
                    <label htmlFor="">
                        Maintenance Vendor
                        <select value={formData.specification.maintenanceVendor} onChange={(e) => setFormData({ ...formData, specification: { ...formData.specification, maintenanceVendor: e.target.value } })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select</option>
                            <option value="C&K">C&K</option>
                            <option value="IASL">IASL</option>
                            <option value="Eadrack">Eadrack</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA4