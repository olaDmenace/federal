import React, { useState } from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import FuelReconciliation from './FuelReconciliation'
import FuelRequest from './FuelRequest'
import TripExpenses from './TripExpenses'


const TripExpense = () => {
    PageTitle('Axle & Cartage - Trip Expense Request Form')
    const [form, setForm] = useState(0)

    const activeForm = () => {
        if (form === 0) {
            return (<FuelRequest />)
        } else if (form === 1) {
            return (<FuelReconciliation />)
        } else {
            return (<TripExpenses />)
        }
    }


    return (
        <div className='space-y-2 grid bg-white p-5 rounded-lg'>
            <FormTitle Title={'Trip Expense Request Form'} />
            <hr className='pb-5' />
            <progress className="progress progress-success w-full" value="0" max="100"></progress>
            {activeForm()}
            <div class='btn-group mx-auto pt-5'>
                <button disabled={form === 0} onClick={() => { setForm((currForm) => currForm - 1) }} class='btn btn-active'>Prev</button>
                <button class='btn btn-active' onClick={() => { setForm((currForm) => currForm + 1) }}>
                    {form === 2 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default TripExpense