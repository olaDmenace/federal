import React, { useState } from 'react'
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
        quantityLoaded: 0,
        totalQuantityDelivered: 0,
        estimatedProductShortage: 0,
        customerShortageClaim: 0,
        primaryWayBill: {
            waybillNumber: "",
            documentUrl: "",
            distanceTravelled: 0
        },
        secondaryWayBills: [
            {
                waybillNumber: "",
                documentUrl: "",
                distanceTravelled: 0,
                customerId: "",
                deliveryZone: "",
                quantityLoaded: 0,
                totalQuantityDelivered: 0,
                estimatedProductShortage: 0,
                customerShortageClaim: 0
            }
        ],
        transactionStatus: 0
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

    const handleSubmit = () => {
        console.log(formData)
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
            <div class='btn-group mx-auto pt-5'>
                <button disabled={form === 0} onClick={() => { setForm((currForm) => currForm - 1) }} className={form === 0 ? 'btn btn-disabled' : 'btn btn-active'}>Prev</button>
                <button class='btn btn-active' onClick={() => { form !== 4 ? setForm((currForm) => currForm + 1) : handleSubmit() }}>
                    {form === 4 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default Journeymanagement