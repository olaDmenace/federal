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
                            <input value={formData.maintenanceInfo.lastPreventiveMaintenance} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, lastPreventiveMaintenance: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Next PM Date
                            <input value={formData.maintenanceInfo.nextPreventiveMaintenance} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, nextPreventiveMaintenance: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Life Cycle</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            In-Service Date
                            <input value={formData.maintenanceInfo.inServiceDate} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, inServiceDate: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            In-Service Odometer
                            <input value={formData.maintenanceInfo.inServiceOdometer} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, inServiceOdometer: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Vehicle Life Estimates</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.maintenanceInfo.estimatedServiceLive} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, estimatedServiceLive: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Service Life in Meter
                            <input value={formData.maintenanceInfo.estServiceMet} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, estServiceMet: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Resale Value
                            <input value={formData.maintenanceInfo.estimatedResaleValue} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, estimatedResaleValue: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Out-of-Service</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.maintenanceInfo.outOfServiceDate} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, outOfServiceDate: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Out-of-Service Odometer
                            <input value={formData.maintenanceInfo.outOfServiceOdometer} onChange={(e) => setFormData({ ...formData, maintenanceInfo: { ...formData.maintenanceInfo, outOfServiceOdometer: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Financials</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Purchase Vendor
                            <input value={formData.purchaseInfo.vendorName} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, vendorName: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Date
                            <input value={formData.purchaseInfo.purchaseDate} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, purchaseDate: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Price
                            <input value={formData.purchaseInfo.purchaseValue} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, purchaseValue: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Odometer
                            <input value={formData.purchaseInfo.odometer} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, odometer: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                    <label htmlFor="">
                        Notes
                        <textarea value={formData.purchaseInfo.notes} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, notes: e.target.value } })} className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                    </label>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Warranty</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Expiration Date
                            <input value={formData.purchaseInfo.warrantyExpiryDate} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, warrantyExpiryDate: e.target.value } })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Max Meter Value
                            <input value={formData.purchaseInfo.warrantyMaxOdometer} onChange={(e) => setFormData({ ...formData, purchaseInfo: { ...formData.purchaseInfo, warrantyMaxOdometer: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA3