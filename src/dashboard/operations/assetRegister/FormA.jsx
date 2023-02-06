import React, { useState } from 'react'
import endpoint from '../../../utils/endpoints/endpoint'
import FormA1 from './FormA1'
import FormA2 from './FormA2'
import FormA3 from './FormA3'
import FormA4 from './FormA4'
import LoadingSpinner from '../../../utils/LoadingSpinner'
import PopUp from '../../../utils/PopUp'
import { ThumbUpIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/outline'


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
        status: 0,
        logisticsCoordinatorId: '',
        journeyOfficerId: '',
        deliveryOfficerId: '',
        ownership: '',
        ownerId: '',
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
            tankCapacityMetric: "",
            oilCapacity: 0,
            oilCapacityMetric: "",
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

    const truck = '/truck'

    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [reply, setReply] = useState({
        icon: '',
        message: ''
    })

    // Handles the submit event
    function handleSubmit(e) {
        setLoading(!loading)
        endpoint.post(truck, formData).then(
            res => {
                if (res.status === 200) {
                    setReply({
                        icon: <ThumbUpIcon className='mx-auto h-24 text-primary' />,
                        message: res.data.message
                    })
                } else {
                    setReply({
                        icon: <XCircleIcon className='mx-auto h-24 text-red-500' />,
                        message: res.data.message
                    })
                }
            }
        ).then((err) => {
            // console.log(err)
        })
        setLoading(!loading)
    }


    return (
        <div className='grid'>
            {show && <PopUp>
                {reply.icon}
                <p className='mx-auto text-center text-primary bg-transparent'>{reply.message}</p>
                <button className='btn btn-primary' onClick={(e) => setShow(false)}>Confirm</button>
            </PopUp>}
            <div>{formDisplay()}</div>
            {!loading && <div className="btn-group mx-auto pt-5">
                <button className={form === 0 ? 'btn btn-disabled' : 'btn btn-primary'} onClick={() => { setForm((currFage) => currFage - 1) }}>Prev</button>
                <button
                    className="btn btn-active"
                    onClick={() => { form === 3 ? handleSubmit() : setForm((currForm) => currForm + 1) }
                    }>
                    {form === 3 ? 'Submit' : 'Next'}
                </button>
            </div>}
            {loading && <LoadingSpinner />}
        </div>
    )
}

export default FormA