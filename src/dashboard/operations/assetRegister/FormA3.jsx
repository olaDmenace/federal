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
                            <input value={formData.lPmDate} onChange={(e) => setFormData({ ...formData, lPmDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Next PM Date
                            <input value={formData.nPmDate} onChange={(e) => setFormData({ ...formData, nPmDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Life Cycle</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            In-Service Date
                            <input value={formData.inSerDate} onChange={(e) => setFormData({ ...formData, inSerDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            In-Service Odometer
                            <input value={formData.inSerOd} onChange={(e) => setFormData({ ...formData, inSerOd: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Vehicle Life Estimates</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.estServiceMon} onChange={(e) => setFormData({ ...formData, estServiceMon: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Service Life in Meter
                            <input value={formData.estServiceMet} onChange={(e) => setFormData({ ...formData, estServiceMet: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Estimated Resale Value
                            <input value={formData.estResaleVal} onChange={(e) => setFormData({ ...formData, estResaleVal: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Out-of-Service</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Estimated Service Life in Months
                            <input value={formData.estServiceLifeMonth} onChange={(e) => setFormData({ ...formData, estServiceLifeMonth: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Out-of-Service Odometer
                            <input value={formData.oServiceOd} onChange={(e) => setFormData({ ...formData, oServiceOd: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Financials</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Purchase Vendor
                            <input value={formData.purchaseVendor} onChange={(e) => setFormData({ ...formData, purchaseVendor: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Date
                            <input value={formData.purchaseDate} onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Purchase Price
                            <input value={formData.purchasePrice} onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
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
                            <input value={formData.expDate} onChange={(e) => setFormData({ ...formData, expDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Max Meter Value
                            <input value={formData.maxMeterVal} onChange={(e) => setFormData({ ...formData, maxMeterVal: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA3