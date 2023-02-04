import React, { useEffect, useState } from 'react'
import endpoint from '../../../utils/endpoints/endpoint'

function FormA1({ formData, setFormData }) {

    // Fetch list of Users (JO, DO & LC)
    useEffect(() => {
        // SearchTerm = delivery & UserType=1 & PageNumber=1 & PageSize=1
        endpoint.get('/user?SearchTerm=delivery&UserType=1&PageNumber=100&PageSize=100').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // Fetch list of owners
    const [owners, setOwners] = useState([])
    useEffect(() => {
        endpoint.get('/variable/owners').then(res => {
            setOwners(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Form A - Tractor</h4>
            <h6 className='font-semibold text-lg'>Identification</h6>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label className='text-primary'>
                        Truck Number
                        <input value={formData.truckNumber} onChange={(e) => setFormData({ ...formData, truckNumber: e.target.value })} class='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label className='text-primary'>
                        Fleet No. - Tractor
                        <select value={formData.fleetNumber} onChange={(e) => setFormData({ ...formData, fleetNumber: e.target.value })} class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Service Type</option>
                        </select>
                    </label>
                    <label>
                        Tractor Chasis
                        <input value={formData.tractorChasis} onChange={(e) => setFormData({ ...formData, tractorChasis: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Engine Number
                        <input value={formData.engineNumber} onChange={(e) => setFormData({ ...formData, engineNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        VIN/SN
                        <input value={formData.identificationNumber} onChange={(e) => setFormData({ ...formData, identificationNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        License Plate
                        <input value={formData.licensePlateNumber} onChange={(e) => setFormData({ ...formData, licensePlateNumber: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Year Manufacture
                        <input value={formData.manufactureDate} onChange={(e) => setFormData({ ...formData, manufactureDate: e.target.value })} className='input input-primary w-full' type="date" name="" id="" />
                        {/* <select  className='select select-primary w-full'>
                            <option selected disabled value="">Select Year</option>
                        </select> */}
                    </label>
                    <label htmlFor="">
                        Brand
                        <input value={formData.brand.model} onChange={(e) => setFormData({ ...formData, brand: { ...formData.brand, model: e.target.value } })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Model
                        <input value={formData.brand.manufacturer} onChange={(e) => setFormData({ ...formData, model: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Registration State/Province
                        <input value={formData.registrationState} onChange={(e) => setFormData({ ...formData, registrationState: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                </fieldset>
                <input value={formData.pictureUrl} onChange={(e) => setFormData({ ...formData, pictureUrl: e.target.value })} className='py-5' type="file" src="" alt="" />
                <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                    {/* <label htmlFor="">
                        Operational Status
                        <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Status</option>
                        </select>
                    </label> */}
                    <label htmlFor="">
                        Current Assignee - LC
                        <input value={formData.logisticsCoordinatorId} onChange={(e) => setFormData({ ...formData, logisticsCoordinatorId: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Assignee - JO
                        <input value={formData.journeyOfficerId} onChange={(e) => setFormData({ ...formData, journeyOfficerId: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Asignee - DO
                        <input value={formData.deliveryOfficerId} onChange={(e) => setFormData({ ...formData, deliveryOfficerId: e.target.value })} className='input input-primary w-full' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Owner
                        <select value={formData.owner} onChange={(e) => setFormData({ ...formData, owner: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Owner</option>
                            {owners.map(owner => <option key={owner.ownerId} value={owner.ownerId}>{owner.ownerName}</option>)}
                        </select>
                    </label>
                    <label htmlFor="">
                        Ownership
                        {/* <select value={formData.ownership} onChange={(e) => setFormData({ ...formData, ownership: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Ownership</option>
                        </select> */}
                        <div className='border border-primary h-12 rounded-lg grid items-center'>
                            {owners.filter((t) => t.ownerId === formData.owner).map(item => <p key={item.ownerId} className='px-4'>{item.ownerShip}</p>)}
                        </div>
                    </label>
                </fieldset>
                <label htmlFor="">
                    Additional Details
                    <textarea value={formData.additionalDetails} onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })} className='textarea textarea-primary w-full' name="" id="" rows="4"></textarea>
                </label>
            </form>
        </div>
    )
}

export default FormA1