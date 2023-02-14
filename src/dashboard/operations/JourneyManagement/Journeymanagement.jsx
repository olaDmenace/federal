import React, { useState } from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import CustomerDetails from './CustomerDetails'
import CustomerListDetails from './CustomerListDetails'
import ProductDetails from './ProductDetails'
import ReportedShortage from './ReportedShortage'
// import TripDetails from './TripDetails'


function Journeymanagement() {
    PageTitle('Axle & Cartage - Journey Management')
    const [form, setForm] = useState(0)

    const activeForm = () => {
        if (form === 0) {
            return (<ProductDetails />)
        } else if (form === 1) {
            return (<CustomerDetails />)
        } else if (form === 2) {
            return (<CustomerListDetails />)
        } else {
            return (<ReportedShortage />)
        }
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
            </ul>
            <div className='flex gap-10 pb-10'>
                <div>
                    {activeForm()}
                </div>
            </div>
            <div class='btn-group mx-auto pt-5'>
                <button disabled={form === 0} onClick={() => { setForm((currForm) => currForm - 1) }} className={form === 0 ? 'btn btn-disabled' : 'btn btn-active'}>Prev</button>
                <button class='btn btn-active' onClick={() => { setForm((currForm) => currForm + 1) }}>
                    {form === 3 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default Journeymanagement