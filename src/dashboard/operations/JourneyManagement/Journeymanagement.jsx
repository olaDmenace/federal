import React, { useState } from 'react'
import endpoint from '../../../utils/endpoints/endpoint'
import LoadingSpinner from '../../../utils/LoadingSpinner'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import TruckProgramming from '../TruckProgramming'
import CustomerDetails from './CustomerDetails'
import CustomerListDetails from './CustomerListDetails'
import ProductDetails from './ProductDetails'
import ReportedShortage from './ReportedShortage'

// import TripDetails from './TripDetails'


function Journeymanagement() {
    PageTitle('Axle & Cartage - Journey Management')
    const [form, setForm] = useState(0)

    const [formData, setFormData] = useState({
        truckProgrammingId: "",
        // estimatedProductShortage: 0,
        primaryWayBill: {
            waybillNumber: "",
            documentUrl: "",
            distanceTravelled: 0,
            quantityDelivered: 0,
            quantityLoaded: 0,
            shortageClaim: 0,
        },
        secondaryWayBills: [
            {
                waybillNumber: "",
                documentUrl: "",
                distanceTravelled: 0,
                customerId: "",
                // deliveryZone: "",
                quantityLoaded: 0,
                quantityDelivered: 0,
                // estimatedProductShortage: 0,
                shortageClaim: 0
            }
        ],
        status: 0
    })

    const activeForm = () => {
        if (form === 0) {
            return (<TruckProgramming formData={formData} setFormData={setFormData} />)
        } else if (form === 1) {
            return (<ProductDetails formData={formData} setFormData={setFormData} />)
        } else if (form === 2) {
            return (<CustomerDetails formData={formData} setFormData={setFormData} />)
        } else if (form === 3) {
            return (<CustomerListDetails formData={formData} setFormData={setFormData} />)
        } else {
            return <ReportedShortage formData={formData} setFormData={setFormData} />
        }
    }

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = () => {
        console.log(formData)
        setIsLoading(!isLoading)
        endpoint.post('/truck/journey-management', formData).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div className='space-y-2 grid'>
            <FormTitle Title={'Journey Management'} />
            <hr />
            <ul className='steps'>
                <li className='step step-primary'></li>
                <li className={form >= 1 ? 'step step-primary' : 'step'}></li>
                <li className={form >= 2 ? 'step step-primary' : 'step'}></li>
                <li className={form >= 3 ? 'step step-primary' : 'step'}></li>
                <li className={form >= 4 ? 'step step-primary' : 'step'}></li>
            </ul>
            <div className='grid gap-10 pb-10'>
                <div>
                    {activeForm()}
                </div>
            </div>
            {!isLoading && <div class='btn-group mx-auto pt-5'>
                <button disabled={form === 0} onClick={() => { setForm((currForm) => currForm - 1) }} className={form === 0 ? 'btn btn-disabled' : 'btn btn-active'}>Prev</button>
                <button class='btn btn-active' onClick={() => { form !== 4 ? setForm((currForm) => currForm + 1) : handleSubmit() }}>
                    {form === 4 ? 'Submit' : 'Next'}
                </button>
            </div>}
            {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default Journeymanagement