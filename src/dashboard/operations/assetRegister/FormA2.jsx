import React from 'react'

function FormA2({ formData, setFormData }) {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Truck Document</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Vehicle License</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.refNumber} onChange={(e) => setFormData({ ...formData, refNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.issDate} onChange={(e) => setFormData({ ...formData, issDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.exDate} onChange={(e) => setFormData({ ...formData, exDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Hackney Permit</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.hpRefNumber} onChange={(e) => setFormData({ ...formData, hpRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.hpIssDate} onChange={(e) => setFormData({ ...formData, hpIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.hpExDate} onChange={(e) => setFormData({ ...formData, hpExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Proof of Ownership</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.poRefNumber} onChange={(e) => setFormData({ ...formData, poRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.poIssDate} onChange={(e) => setFormData({ ...formData, poIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.poExDate} onChange={(e) => setFormData({ ...formData, poExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Carriage Permit</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.cpRefNumber} onChange={(e) => setFormData({ ...formData, cpRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.cpIssDate} onChange={(e) => setFormData({ ...formData, cpIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.cpExDate} onChange={(e) => setFormData({ ...formData, cpExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Road Worthiness</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.rwRefNumber} onChange={(e) => setFormData({ ...formData, rwRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.rwIssDate} onChange={(e) => setFormData({ ...formData, rwIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.rwExDate} onChange={(e) => setFormData({ ...formData, rwExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset><fieldset>
                    <h6 className='font-semibold text-lg'>Heavy Duty Permit</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.hdRefNumber} onChange={(e) => setFormData({ ...formData, hdRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.hdIssDate} onChange={(e) => setFormData({ ...formData, hdIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.hdExDate} onChange={(e) => setFormData({ ...formData, hdExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>All of Registration Number</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.aRefNumber} onChange={(e) => setFormData({ ...formData, aRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.aIssDate} onChange={(e) => setFormData({ ...formData, aIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.aExDate} onChange={(e) => setFormData({ ...formData, aExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>CMR</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.cmRefNumber} onChange={(e) => setFormData({ ...formData, cmRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.cmIssDate} onChange={(e) => setFormData({ ...formData, cmIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.cmExDate} onChange={(e) => setFormData({ ...formData, cmExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Info Req for Clearance/Attestation</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.irRefNumber} onChange={(e) => setFormData({ ...formData, irRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.irIssDate} onChange={(e) => setFormData({ ...formData, irIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.irExDate} onChange={(e) => setFormData({ ...formData, irExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Truck Insurance</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.tiRefNumber} onChange={(e) => setFormData({ ...formData, tiRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.tiIssDate} onChange={(e) => setFormData({ ...formData, tiIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.tiExDate} onChange={(e) => setFormData({ ...formData, tiExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset>
                    <h6 className='font-semibold text-lg'>Heavy Duty Permit</h6>
                    <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Reference Number
                            <input value={formData.hdpRefNumber} onChange={(e) => setFormData({ ...formData, hdpRefNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Issue Date
                            <input value={formData.hdpIssDate} onChange={(e) => setFormData({ ...formData, hdpIssDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Expiry Date
                            <input value={formData.hdpExDate} onChange={(e) => setFormData({ ...formData, hdpExDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        </label>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}

export default FormA2