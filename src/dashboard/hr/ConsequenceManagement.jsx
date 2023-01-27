import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import endpoint from '../../utils/endpoints/endpoint'
import { logout } from '../../utils/features/userSlice'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'
import PopUp from '../../utils/PopUp'
import { ThumbUpIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/outline'

const ConsequenceManagement = () => {
    PageTitle('Consequence Management')

    const [data, setData] = useState({
        violationDate: "",
        sanctionDate: "",
        sanctionEndDate: "",
        sanctionStatus: '',
        recommendation: '',
        violation: '',
        status: '',
        truckId: "",
        alternativeDeliveryOfficerId: null
        // deliveryOfficerId: "",
        // journeyOfficerId: "",
        // logisticsCoordinatorId: ""
    })

    const [trucks, setTrucks] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        endpoint.get('/truck').then(res => {
            if (res.status === 401) {
                dispatch(logout())
                return
            }
            console.log(res)
            setTrucks(res.data.data)
            // dispatch(truck(res.data.data))
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const [reply, setReply] = useState({
        icon: '',
        message: ''
    })

    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        data.violationDate = new Date(data.violationDate).toISOString()
        data.sanctionDate = new Date(data.sanctionDate).toISOString()
        data.sanctionEndDate = new Date(data.sanctionEndDate).toISOString()
        endpoint.post('human-resource/consequence', data).then(res => {
            setShow(true)
            if (res.status === 200) {
                setReply({
                    icon: <ThumbUpIcon className='mx-auto h-24 text-primary' />,
                    message: res.data.message
                })
            } else {
                setReply({
                    icon: <XCircleIcon className='mx-auto h-24 text-red-500' />,
                    message: res.data.message
                })
            }
            return console.log(res)
        }).then(err => {
            console.log(err)
        })
    }


    return (
        <div>
            {show && <PopUp>
                {reply.icon}
                <p className='mx-auto text-center text-primary bg-transparent'>{reply.message}</p>
                <button className='btn btn-primary' onClick={(e) => setShow(false)}>Dashboard</button>
            </PopUp>}
            <FormTitle Title={'Consequence Management'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end'>
                    <label htmlFor="">
                        Truck Number
                        <select className='w-full input input-primary' value={data.truckId} onChange={(e) => setData({ ...data, truckId: e.target.value })} name="" id="">
                            <option value="">Select Truck</option>
                            {trucks.map(truck => <option key={truck.truckId} value={truck.truckId}>{truck.truckNumber}</option>)}
                        </select>
                        {/* <input className='w-full input input-primary' value={data.truckId} onChange={(e) => setData({ ...data, truckId: e.target.value })} placeholder='ID-112200' type="text" name="" id="" /> */}
                    </label>
                    <label htmlFor="">
                        Deliver Officer
                        <div className='border border-primary h-12 rounded-lg grid items-center'>
                            {trucks.filter((t) => t.truckId === data.truckId).map(item => <span className='px-4'>{item.deliveryOfficer}</span>)}
                        </div>
                    </label>
                    <label htmlFor="">
                        Journey Officer
                        <div className='border border-primary h-12 rounded-lg grid items-center'>
                            {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span className='px-4'>{item.journeyOfficer}</span>)}
                        </div>
                    </label>
                    <label htmlFor="">
                        Logistics Coordinator
                        <div className='border border-primary h-12 rounded-lg grid items-center'>
                            {trucks.filter((t) => (t.truckId === data.truckId)).map(item => <span className='px-4'>{item.logisticsCoordinator}</span>)}
                        </div>
                    </label>
                    <label htmlFor="">
                        Violation Date
                        <input className='w-full input input-primary' value={data.violationDate} onChange={(e) => setData({ ...data, violationDate: e.target.value })} type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Violation
                        <select className='w-full select select-primary' value={data.violation} onChange={(e) => setData({ ...data, violation: +e.target.value })} name="" id="">
                            <option defaultValue={''} value="">Select Validation</option>
                            <option value="0">Harsh Acceleration</option>
                            <option value="1">Harsh Breaking</option>
                            <option value="2">Over Speeding</option>
                            <option value="3">Seat Belt</option>
                            <option value="4">Harsh Turning</option>
                            <option value="5">Prohibited Working Time</option>
                            <option value="6">Others</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Recommended
                        <select className='w-full select select-primary' value={data.recommendation} onChange={(e) => setData({ ...data, recommendation: +e.target.value })} name="" id="">
                            <option defaultValue={''} value="">Select Consequence Management</option>
                            <option value="0">Training</option>
                            <option value="1">Suspended Without Pay</option>
                            <option value="2">Suspension With Pay</option>
                            <option value="3">Payment</option>
                            <option value="4">Relief</option>
                            <option value="5">N/A</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Consequence Management - Status
                        <select className='w-full select select-primary' value={data.status} onChange={(e) => setData({ ...data, status: +e.target.value })} name="" id="">
                            <option defaultValue={''} value="">Select Status</option>
                            <option value="0">Rejected</option>
                            <option value="1">Accepted</option>
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
                        <select className='w-full select select-primary' value={data.sanctionStatus} onChange={(e) => setData({ ...data, sanctionStatus: +e.target.value })} name="" id="">
                            <option defaultValue={''} value="">Select Status</option>
                            <option value="0">Closed</option>
                            <option value="1">Opened</option>
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