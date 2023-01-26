import React, { useState } from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const ConsequenceManagement = () => {
    PageTitle('Consequence Management')

    const [data, setData] = useState({
        violationDate: "",
        sanctionDate: "",
        sanctionEndDate: "",
        sanctionStatus: 0,
        recommendation: 0,
        violation: 0,
        status: 0,
        truckId: "",
        alternativeDeliveryOfficerId: "",
        deliveryOfficerId: "",
        journeyOfficerId: "",
        logisticsCoordinatorId: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <FormTitle Title={'Consequence Management'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end'>
                    <label htmlFor="">
                        Truck Number
                        <input className='w-full input input-primary' value={data.truckId} onChange={(e) => setData({ ...data, truckId: e.target.value })} placeholder='ID-112200' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Deliver Officer
                        <input className='w-full input input-primary' value={data.deliveryOfficerId} onChange={(e) => setData({ ...data, deliveryOfficerId: e.target.value })} placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Journey Officer
                        <input className='w-full input input-primary' value={data.journeyOfficerId} onChange={(e) => setData({ ...data, journeyOfficerId: e.target.value })} placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Logistics Coordinator
                        <input className='w-full input input-primary' value={data.logisticsCoordinatorId} onChange={(e) => setData({ ...data, logisticsCoordinatorId: e.target.value })} placeholder='John Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Violation Date
                        <input className='w-full input input-primary' value={data.violationDate} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Violation
                        <select className='w-full select select-primary' value={data.violation} onChange={(e) => setData({ ...data, violation: e.target.value })} name="" id="">
                            <option selected value="">Select Validation</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Recommended
                        <select className='w-full select select-primary' value={data.recommendation} onChange={(e) => setData({ ...data, recommendation: e.target.value })} name="" id="">
                            <option selected value="">Select Consequence Management</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Status
                        <select className='w-full select select-primary' value={data.status} onChange={(e) => setData({ ...data, status: e.target.value })} name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Sanction Start Date
                        <input className='w-full input input-primary' value={data.sanctionDate} onChange={(e) => setData({ ...data, sanctionDate: e.target.value })} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Sanction End Date
                        <input className='w-full input input-primary' value={data.sanctionEndDate} onChange={(e) => setData({ ...data, sanctionEndDate: e.target.value })} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Sanction Status
                        <select className='w-full select select-primary' value={data.sanctionStatus} onChange={(e) => setData({ ...data, sanctionStatus: e.target.value })} name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Alternative Do: If Sanctioned
                        <input className='w-full input input-primary' value={data.alternativeDeliveryOfficerId} onChange={(e) => setData({ ...data, alternativeDeliveryOfficerId: e.target.value })} placeholder='John Doe' type="text" name="" id="" />
                    </label>
                </fieldset>
                <button onClick={handleSubmit} className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default ConsequenceManagement