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
        licensePlateNumber: '',
        tractorChasis: '',
        engineNumber: '',
        identificationNumber: '',
        manufactureDate: '',
        brand: {
            model: '',
            manufacturer: ''
        },
        registrationState: '',
        pictureUrl: '',
        status: '',
        logisticsCoordinatorId: '',
        journeyOfficerId: '',
        deliveryOfficerId: '',
        // ownership: '',
        // owner: '',
        additionalDetails: '',

        // FormA2

        truckDocuments: [
            {
                type: 0,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 1,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 2,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 3,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 4,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 5,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 6,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 7,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 8,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 9,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 10,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            },
            {
                type: 11,
                referenceNumber: "",
                dateIssued: "",
                expiryDate: ""
            }
        ],

        // FormA3

        maintenanceInfo: {
            lastPreventiveMaintenance: '',
            nextPreventiveMaintenance: '',
            inServiceDate: '',
            inServiceOdometer: 0,
            estimatedServiceLive: 0,
            estServiceMet: '',
            estimatedResaleValue: 0,
            outOfServiceDate: '',
            outOfServiceOdometer: 0,
        },
        purchaseInfo: {
            vendorName: '',
            purchaseDate: '',
            purchaseValue: 0,
            odometer: 0,
            notes: '',
            warrantyExpiryDate: '',
            warrantyMaxOdometer: 0
        },

        // FormA4

        specification: {
            driveType: '',
            brakeSystem: '',
            rearAxle: 0,
            fuelType: '',
            fisrtTankCapacity: 0,
            secondTankCapacity: 0,
            // tankCapacityMetric: "",
            oilCapacity: 0,
            // oilCapacityMetric: "",
            maintenanceVendor: ''
        }
    })


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
    function handleSubmit() {
        console.log(formData)
    }


    return (
        <div className='grid'>
            <div>{formDisplay()}</div>
            <div className="btn-group mx-auto pt-5">
                <button className={form === 0 ? 'btn btn-disabled' : 'btn btn-primary'} onClick={() => { setForm((currFage) => currFage - 1) }}>Prev</button>
                <button
                    className="btn btn-active"
                    onClick={() => { form === 3 ? handleSubmit() : setForm((currForm) => currForm + 1) }
                    }>
                    {form === 3 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default FormA