import React from 'react'

function FormA3({ formData, setFormData }) {
    return (
        <div className='py-5 text-primary space-y-3'>
            <form className='grid text-primary gap-5 w-full' action="">
                <fieldset>
                    <h6 className='font-semibold text-lg'>Maintenance Schedule</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Last PM Date
                            <input value={formData.lastPreventiveMaintenance} onChange={(e) => setFormData({ ...formData, lastPreventiveMaintenance: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Next PM Date
                            <input value={formData.nextPreventiveMaintenance} onChange={(e) => setFormData({ ...formData, nextPreventiveMaintenance: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Life Cycle</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            In-Service Date
                            <input value={formData.inServiceDate} onChange={(e) => setFormData({ ...formData, inServiceDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            In-Service Odometer
                            <input value={formData.inServiceOdometer} onChange={(e) => setFormData({ ...formData, inServiceOdometer: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Vehicle Life Estimates</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.estimatedServiceLive} onChange={(e) => setFormData({ ...formData, estimatedServiceLive: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Service Life in Meter
                            <input value={formData.estServiceMet} onChange={(e) => setFormData({ ...formData, estServiceMet: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Resale Value
                            <input value={formData.estimatedResaleValue} onChange={(e) => setFormData({ ...formData, estimatedResaleValue: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Out-of-Service</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.outOfServiceDate} onChange={(e) => setFormData({ ...formData, outOfServiceDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Out-of-Service Odometer
                            <input value={formData.outOfServiceOdometer} onChange={(e) => setFormData({ ...formData, outOfServiceOdometer: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Financials</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Purchase Vendor
                            <input value={formData.vendorName} onChange={(e) => setFormData({ ...formData, vendorName: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Date
                            <input value={formData.purchaseDate} onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Price
                            <input value={formData.purchaseValue} onChange={(e) => setFormData({ ...formData, purchaseValue: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Odometer
                            <input value={formData.odometer} onChange={(e) => setFormData({ ...formData, odometer: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                    <label htmlFor="">
                        Notes
                        <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                    </label>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Warranty</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Expiration Date
                            <input value={formData.warrantyExpiryDate} onChange={(e) => setFormData({ ...formData, warrantyExpiryDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Max Meter Value
                            <input value={formData.warrantyMaxOdometer} onChange={(e) => setFormData({ ...formData, warrantyMaxOdometer: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA3