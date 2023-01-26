import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import endpoint from '../../utils/endpoints/endpoint'
import { truck } from '../../utils/features/truckSlice'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const AbsenceForm = () => {
    PageTitle('Axle & Cartage Delivery Officer Absence Form')

    const dispatch = useDispatch()

    const [data, setData] = useState({
        status: "",
        reason: "",
        startDate: "",
        endDate: "",
        truckId: "",
        alternativeDeliveryOfficerId: "",
        deliveryOfficerId: "",
        journeyOfficerId: "",
        logisticsCoordinatorId: ""
    })

    useEffect(() => {
        endpoint.get('/truck').then(res => {
            console.log(res)
            dispatch(truck(res.data))
        }).catch(err => {
            console.log(err)
        })
        // fetch('https://dummyjson.com/products/').then(res => {
        //     console.log(res)
        //     return res.json()
        // }).then(data => {
        //     console.log(data)
        //     dispatch(truck(data.products))
        // }).catch(err => {
        //     console.log(err)
        // })
    }, [])


    const url = 'human-resource/delivery-officer/absence'
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // endpoint.post(url, data).then(
        //     res => {
        //         console.log(res)
        //     }
        // ).then((err) => {
        //     console.log(err)
        // })
    }
    return (
        <div>
            <FormTitle Title={'Delivery Officer Absence Form'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
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
                        Absence Reason
                        <select className='w-full select select-primary' value={data.reason} onChange={(e) => setData({ ...data, reason: +e.target.value })} name="" id="">
                            <option value="">Select Reason</option>
                            <option value="0">Paid Leave</option>
                            <option value="1">Unpaid Leave</option>
                            <option value="2">Bereavement Leave</option>
                            <option value="3">Parental Leave</option>
                            <option value="4">Medical Leave</option>
                            <option value="5">Compassionate Leave</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Leave Start Date
                        <input className='w-full input input-primary' value={data.startDate} onChange={(e) => setData({ ...data, startDate: e.target.value })} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Leave End Date
                        <input className='w-full input input-primary' value={data.endDate} onChange={(e) => setData({ ...data, endDate: e.target.value })} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Alternative Do: Authorized Leave
                        <input className='w-full input input-primary' value={data.alternativeDeliveryOfficerId} onChange={(e) => setData({ ...data, alternativeDeliveryOfficerId: e.target.value })} placeholder='John Doe' type="text" name="" id="" />
                    </label>
                </fieldset>
                <label htmlFor="">
                    Leave Status
                    <select className='w-full select select-primary' value={data.status} onChange={(e) => setData({ ...data, status: +e.target.value })} name="" id="">
                        <option value="">Select Reason</option>
                        <option value="0">Closed</option>
                        <option value="1">Open</option>
                    </select>
                    {/* <input className='w-full input input-primary' value={data.status} onChange={(e)} placeholder='John Doe' type="text" name="" id="" /> */}
                </label>
                <button onClick={handleSubmit} className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default AbsenceForm