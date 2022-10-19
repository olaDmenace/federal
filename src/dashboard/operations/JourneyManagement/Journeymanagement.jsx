import React from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import CustomerDetails from './CustomerDetails'
import CustomerListDetails from './CustomerListDetails'
import ProductDetails from './ProductDetails'
import ReportedShortage from './ReportedShortage'
import TripDetails from './TripDetails'


function Journeymanagement() {
    PageTitle('Axle & Cartage - Journey Management')
    return (
        <div className='space-y-2 grid'>
            <FormTitle Title={'Journey Management'} />
            <hr />
            <ul className="steps steps-horizontal w-full pt-5">
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <div className='flex gap-10 pb-10 overflow-x-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900'>
                <ReportedShortage />
            </div>
            <div class='btn-group mx-auto pt-5'>
                <button disabled class='btn'>Previous</button>
                <button class='btn btn-active'>Next</button>
            </div>
        </div>
    )
}

export default Journeymanagement