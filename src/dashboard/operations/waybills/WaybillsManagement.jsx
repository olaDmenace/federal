import { PlusIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react'
import PageTitle from '../../../utils/PageTitle';
import FormTitle from '../../FormTitle';
import WaybillItem from './WaybillItem';
import endpoint from '../../../utils/endpoints/endpoint';

const WaybillsManagement = () => {
    PageTitle("Axle & Cartage - Waybills Management");

    const [bill, setBill] = useState([0])
    const handleAdd = () => {
        const waybills = [...bill, []]
        setBill(waybills)
    }

    const [truck, setTruck] = useState([])

    useEffect(() => {
        endpoint.get('/truck/journey-management').then(res => {
            console.log(res.data.data)
            setTruck(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const PrimaryWaybill = truck.some(item => item.wayBills.some(i => i.isPrimaryWayBill === true))
    console.log(PrimaryWaybill)
    const [formData, setFormData] = useState({
        journeyManagementId: "",
        wayBills: [
            {
                wayBillId: "",
                status: 0
            }
        ]
    })

    return (
        <div className='text-primary grid gap-5 bg-white p-5 rounded-lg overflow-x-scroll'>
            <div>
                <FormTitle Title={"Waybills Management Form"} />
                <hr />
            </div>
            <form className='grid gap-5 pt-5' action="">
                <fieldset className='grid lg:grid-flow-col lg:grid-cols-3 gap-5'>
                    <label htmlFor="trip_Id">
                        Trip ID
                        <select className='select select-primary w-full' value={formData.journeyManagementId} onChange={(e) => setFormData({ ...formData, journeyManagementId: e.target.value })}>
                            <option value="">Select Trip ID</option>
                            {truck.map(item => <option key={item.journeyManagementId} value={item.journeyManagementId}>{item.truckProgramming.tripReference}</option>)}
                        </select>
                        {/* <input className='input input-primary w-full' type="text" name="trip_Id" id="trip_Id" /> */}
                    </label>
                    <label htmlFor="product">
                        Product Loaded
                        <div className='border border-primary w-full h-12 px-4 rounded-lg grid items-center'>
                            {truck.filter(i => i.journeyManagementId === formData.journeyManagementId).map(item => <p>{item.truckProgramming.product.productName}</p>)}
                        </div>
                    </label>
                    <label htmlFor="quantity">
                        Quantity Loaded
                        <input className='input input-primary w-full' type="text" name="quantity" id="quantity" />
                    </label>
                </fieldset>
                <fieldset className='grid lg:grid-flow-col lg:grid-cols-2 gap-5'>
                    <label htmlFor="trip_Id">
                        Quantity Delivered
                        <input className='input input-primary w-full' type="text" name="trip_Id" id="trip_Id" />
                    </label>
                    <label htmlFor="product">
                        Primary/Direct Waybill Number
                        <input className='input input-primary w-full' type="text" name="product" id="product" />
                    </label>
                </fieldset>
                <input type="file" name="" id="" className='w-1/3   ' />
                {/* <img className='h-56 w-56 shadow-xl' src="" alt="" /> */}
                <label htmlFor="status">
                    Primary/Direct Waybill Status<br />
                    <input className='input input-primary w-full lg:w-1/3' type="text" name="" id="" />
                </label>
                <div className='grid grid-flow-col items-center gap-5'>
                    {bill.map((data, i) => <WaybillItem />)}
                    <PlusIcon onClick={handleAdd} className='h-40 text-primary/40' />
                </div>
            </form>
            <button className='btn btn-primary mx-auto'>Submit</button>
        </div>
    )
}

export default WaybillsManagement