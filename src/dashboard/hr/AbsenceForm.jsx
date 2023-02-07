import { XCircleIcon } from '@heroicons/react/outline'
import { ThumbUpIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import endpoint from '../../utils/endpoints/endpoint'
import { truck } from '../../utils/features/truckSlice'
import { logout } from '../../utils/features/userSlice'
import PageTitle from '../../utils/PageTitle'
import PopUp from '../../utils/PopUp'
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
        alternativeDeliveryOfficerId: null
        // deliveryOfficerId: "",
        // journeyOfficerId: "",
        // logisticsCoordinatorId: ""
    })

    const navigate = useNavigate()
    // Collects data from the '/truck' endpoint to be mapped
    const [trucks, setTrucks] = useState([])

    // Store the data that was collected so it can be shown in other fields
    const [final, setFinal] = useState()

    const [delivery, setDelivery] = useState([])

    useEffect(() => {
        endpoint.get('/truck').then(res => {
            if (res.status === 401) {
                dispatch(logout())
                return
            }
            console.log(res.data.data)
            setTrucks(res.data.data)
            dispatch(truck(res.data.data))
        }).catch(err => {
            console.log(err)
        })

        endpoint.get('/user?UserType=1').then(res => {
            console.log(res.data)
            setDelivery(res.data.data)
        }).catch(err => {

        })
    }, [])




    const [reply, setReply] = useState({
        icon: '',
        message: ''
    })

    const [show, setShow] = useState(false)

    const url = 'human-resource/delivery-officer/absence'
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        data.startDate = new Date(data.startDate).toISOString()
        data.endDate = new Date(data.endDate).toISOString()
        endpoint.post(url, data).then(res => {
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
        }).then((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            {show && <PopUp>
                {reply.icon}
                <p className='mx-auto text-center text-primary bg-transparent'>{reply.message}</p>
                <button className='btn btn-primary' onClick={(e) => setShow(false)}>Confirm</button>
            </PopUp>}
            <FormTitle Title={'Delivery Officer Absence Form'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
                    <label htmlFor="">
                        Truck Number
                        <select className='w-full input input-primary' value={data.truckId} onChange={(e) => setData({ ...data, truckId: e.target.value })} name="" id="">
                            <option disabled value="">Select Truck</option>
                            {trucks.map(item => <option value={item.truckId} key={item.truckId}>{item.truckNumber}</option>)}
                        </select>
                        {/* {truck.map(item => <input className='w-full input input-primary' value={data.truckId} onChange={(e) => setData({ ...data, truckId: e.target.value })} placeholder='ID-112200' type="text" name="" id="" />)} */}
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
                        Alternative DO: Authorized Leave
                        <select value={data.alternativeDeliveryOfficerId} onChange={(e) => setData({ ...data, alternativeDeliveryOfficerId: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option value="">Select DO</option>
                            {delivery.map(item => <option value={item.userId}>{`${item.firstName} ${item.lastName}`}</option>)}
                        </select>
                        {/* <input className='w-full input input-primary' value={data.alternativeDeliveryOfficerId} onChange={(e) => setData({ ...data, alternativeDeliveryOfficerId: e.target.value })} placeholder='John Doe' type="text" name="" id="" /> */}
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