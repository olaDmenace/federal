import React from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'
import FormA from './FormA'
import FormA2 from './FormA2'
import FormA3 from './FormA3'
import FormA4 from './FormA4'

function AssetRegister() {
    PageTitle('Axle & Cartage - Register New Asset')
    return (
        <div className='space-y-2'>
            <FormTitle Title={'Asset Register'} />
            <hr />
            <ul className="steps py-3 w-full">
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <label className='text-primary'>
                Reminder Type
                <select class='select select-primary w-full' name="" id="">
                    <option selected disabled value="">Select Reminder</option>
                    <option value="">Form A</option>
                    <option value="">Form B</option>
                    <option value="">Form C</option>
                </select>
            </label>
            <FormA4 />
        </div>
    )
}

export default AssetRegister