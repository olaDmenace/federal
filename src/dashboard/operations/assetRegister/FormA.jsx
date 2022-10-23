import React, { useState } from 'react'
import FormA1 from './FormA1'
import FormA2 from './FormA2'
import FormA3 from './FormA3'
import FormA4 from './FormA4'

function FormA() {
    const [form, setForm] = useState(0)
    const [formData, setFormData] = useState({
        // FormA1
        truckNumber: '',
        fleetNumber: '',
        chasis: '',
        engineNumber: '',
        vin: '',
        licensePlate: '',
        yearManufacture: '',
        brand: '',
        model: '',
        regState: '',
        upload: '',
        opeStatus: '',
        assigneeLC: '',
        assigneeJO: '',
        assigneeDO: '',
        ownership: '',
        owner: '',
        adddetails: '',
        // FormA2
        refNumber: '',
        issDate: '',
        exDate: '',
        hpRefNumber: '',
        hpIssDate: '',
        hpExDate: '',
        poRefNumber: '',
        poIssDate: '',
        poExDate: '',
        cpRefNumber: '',
        cpIssDate: '',
        cpExDate: '',
        rwRefNumber: '',
        rwIssDate: '',
        rwExDate: '',
        hdRefNumber: '',
        hdIssDate: '',
        hdExDate: '',
        aRefNumber: '',
        aIssDate: '',
        aExDate: '',
        cmRefNumber: '',
        cmIssDate: '',
        cmExDate: '',
        irRefNumber: '',
        irIssDate: '',
        irExDate: '',
        tiRefNumber: '',
        tiIssDate: '',
        tiExDate: '',
        hdpRefNumber: '',
        hdpIssDate: '',
        hdpExDate: '',
        // FormA3
        lPmDate: '',
        nPmDate: '',
        inSerDate: '',
        inSerOd: '',
        estServiceMon: '',
        estServiceMet: '',
        estResaleVal: '',
        estServiceLifeMonth: '',
        oServiceOd: '',
        purchaseVendor: '',
        purchaseDate: '',
        purchasePrice: '',
        odometer: '',
        notes: '',
        expDate: '',
        maxMeterVal: '',
        // FormA4
    })
    const formDisplay = () => {
        if (form === 0) {
            return <FormA1 formData={formData} setFormData={setFormData} />
        } else if (form === 1) {
            return <FormA2 formData={formData} setFormData={setFormData} />
        } else if (form === 2) {
            return <FormA3 formData={formData} setFormData={setFormData} />
        } else {
            return <FormA4 />
        }
    }

    return (
        <div className='grid'>
            <div>{formDisplay()}</div>
            <div className="btn-group mx-auto pt-5">
                <button disabled={form === 0} className="btn btn-active" onClick={() => { setForm((currFage) => currFage - 1) }}>Prev</button>
                <button
                    className="btn btn-active"
                    onClick={() => {
                        if (form === 3) {
                            // innerHTML.text = 'Submit'
                        } else
                            setForm((currForm) => currForm + 1)
                    }
                    }>
                    {form === 3 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div >
    )
}

export default FormA