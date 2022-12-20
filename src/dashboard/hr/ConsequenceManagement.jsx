import React from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const ConsequenceManagement = () => {
    PageTitle('Consequence Management')
    return (
        <div>
            <FormTitle Title={'Consequence Management'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end'>
                    <label htmlFor="">
                        Truck Number
                        <input className='w-full input input-primary' placeholder='ID-112200' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Deliver Officer
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Journey Officer
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Logistics Coordinator
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Valication Date
                        <input className='w-full input input-primary' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Validation
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Validation</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Recommended
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Consequence Management</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Status
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Sanction Timeline (Days)
                        <input className='w-full input input-primary' placeholder='Select Number of Days' type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Sanction End Date
                        <input className='w-full input input-primary' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Sanction Status
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Alternative Do: If Sanctioned
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    {/* <label htmlFor="">
                        Alternative Do: Authorized Leave
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label> */}
                </fieldset>
                <button className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default ConsequenceManagement