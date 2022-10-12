import React from 'react'
import CustomerDetails from './CustomerDetails'
import ProductDetails from './ProductDetails'
import TripDetails from './TripDetails'


function Journeymanagement() {
  return (
    <div className='space-y-2 grid'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl text-primary font-semibold'>Journey Management</h2>
            <div className='inlne flex items-center gap-3'>
                <button>Save as Draft</button>
                <button class='btn btn-primary'>Completed</button>
            </div>
        </div>
        <hr />
        <ul className="steps steps-horizontal w-full pt-5">
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step"></li>
            <li className="step"></li>
        </ul>
        <TripDetails/>
        <ProductDetails/>
        <CustomerDetails/>
        <div class='btn-group mx-auto pt-5'>
            <button disabled class='btn'>Previous</button>
            <button class='btn btn-active'>Next</button>
        </div>
    </div>
  )
}

export default Journeymanagement