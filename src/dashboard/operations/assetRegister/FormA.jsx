import React, { useState } from 'react'
import FormA1 from './FormA1'
import FormA2 from './FormA2'
import FormA3 from './FormA3'
import FormA4 from './FormA4'

function FormA() {
    const [form, setForm] = useState(0)

    // Collects and holds the data from the children form
    const [formData, setFormData] = useState({
        // FormA1
        truckNumber: '',
        fleetNumber: '',
        tractorChasis: '',
        engineNumber: '',
        identificationNumber: '',
        // licensePlate: '',
        manufactureDate: '',
        brand: {
            manufacturer: '',
            model: ''
        },
        registrationState: '',
        // upload: '',
        status: '',
        logisticsCoordinatorId: '',
        journeyOfficerId: '',
        deliveryOfficerId: '',
        // ownership: '',
        // owner: '',
        additionalDetails: '',

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

        maintenanceInfo: {
            lastPreventiveMaintenance: '',
            nextPreventiveMaintenance: '',
            inServiceDate: '',
            inServiceOdometer: '',
            estimatedServiceLive: '',
            // estServiceMet: '',
            estimatedResaleValue: '',
            outOfServiceDate: '',
            outOfServiceOdometer: '',
        },
        purchaseInfo: {
            vendorName: '',
            purchaseDate: '',
            purchaseValue: '',
            odometer: '',
            notes: '',
            warrantyExpiryDate: '',
            warrantyMaxOdometer: '',
        },

        // FormA4

        specification: {
            driveType: '',
            brakeSystem: '',
            rearAxle: '',
            fuelType: '',
            fisrtTankCapacity: '',
            secondTankCapacity: '',
            oilCapacity: '',
            maintenanceVendor: ''
        }
    })

    console.log(formData)

    // Controls which form is displayed on the page
    const formDisplay = () => {
        if (form === 0) {
            return <FormA1 formData={formData} setFormData={setFormData} />
        } else if (form === 1) {
            return <FormA2 formData={formData} setFormData={setFormData} />
        } else if (form === 2) {
            return <FormA3 formData={formData} setFormData={setFormData} />
        } else {
            return <FormA4 formData={formData} setFormData={setFormData} />
        }
    }


    // Handles the submit event
    const handleSubmit = (e) => {
        e.preventDefault()
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