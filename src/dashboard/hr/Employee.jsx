import React, { useState } from 'react'
import endpoint from '../../utils/endpoints/endpoint'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'
import gist from '../../utils/gistfile1.json'


const Employee = () => {
    PageTitle('Axle & Cartage Employee Form')
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        otherNames: "",
        email: "",
        photoUrl: "",
        status: 0,
        contactInfo: {
            mobile: "",
            home: "",
            address: "",
            addressLineTwo: "",
            city: "",
            state: "",
            country: "g"
        },
        startDate: "",
        endDate: "",
        dateOfBirth: "",
        employmentNumber: "",
        roleId: "",
        employeeType: 0
    })

    const url = '/human-resource/employee'

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        endpoint.post(url, data).then(
            res => {
                console.log(res)
            }
        ).then((err => {
            console.log(err)
        }))
    }
    console.log(gist.countries)
    return (
        <div>
            <FormTitle Title={'Employee Details'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5'>
                <h4 className='text-xl text-primary font-medium'>Customer Details</h4>
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="firstname">
                        First Name
                        <input className='w-full input input-primary' value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} placeholder='' type="text" name="" id="firstname" />
                    </label>
                    <label htmlFor="middleName">
                        Middle Name
                        <input className='w-full input input-primary' value={data.otherNames} onChange={(e) => setData({ ...data, otherNames: e.target.value })} placeholder='' type="text" name="" id="middleName" />
                    </label>
                    <label htmlFor="lastName">
                        Last Name
                        <input className='w-full input input-primary' value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} placeholder='' type="text" name="" id="lastName" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input className='w-full input input-primary' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="email" name="email" id="email" />
                    </label>
                </fieldset>
                <input type="file" value={data.photoUrl} onChange={(e) => setData({ ...data, photoUrl: e.target.value })} name="" id="" />
                {/* <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="clasifications">
                        Classifications
                        <select className='w-full select select-primary' onChange={(e) => setData({ ...data, })} name="classifications" id="classifications">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="enableAcess">
                        Enable Acess
                        <select className='w-full select select-primary' name="classifications" id="enableAcess">
                            <option value=""></option>
                        </select>
                    </label>
                </fieldset> */}
                <h4 className='text-xl text-primary font-medium'>Contact Information</h4>
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="mobilePhone">
                        Mobile Phone Number
                        <input className='w-full input input-primary' value={data.contactInfo.mobile} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, mobile: e.target.value } })} type="tel" name="" id="mobilePhone" />
                    </label>
                    <label htmlFor="homePhone">
                        Home Phone Number
                        <input className='w-full input input-primary' value={data.contactInfo.home} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, home: e.target.value } })} type="tel" name="" id="homePhone" />
                    </label>
                </fieldset>
                <label htmlFor="address1">
                    Address
                    <input className='w-full input input-primary' value={data.contactInfo.address} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, address: e.target.value } })} type="text" name="" id="address1" />
                </label>
                <label htmlFor="address2">
                    Address Line 2
                    <input className='w-full input input-primary' value={data.contactInfo.addressLineTwo} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, addressLineTwo: e.target.value } })} type="text" name="" id="address2" />
                </label>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <label htmlFor="city">
                        City
                        <input className='w-full input input-primary' value={data.contactInfo.city} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, city: e.target.value } })} type="text" name="" id="city" />
                    </label>
                    <label htmlFor="state">
                        State/Province/Region
                        <select className='select select-primary w-full' value={data.contactInfo.state} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, state: e.target.value } })} name="" id="" >
                            <option value="">Select State</option>
                        </select>
                        {/* <input className='w-full input input-primary'  type="text" name="" id="state" /> */}
                    </label>
                    <label htmlFor="country">
                        Country
                        <select className='select select-primary w-full' value={data.contactInfo.country} onChange={(e) => setData({ ...data, contactInfo: { ...data.contactInfo, country: e.target.value } })} name="" id="">
                            <option value="">Select Country</option>
                            {gist.countries.map(item => <option value="">{item.country}</option>)}
                        </select>
                        {/* <input className='w-full input input-primary' type="text" name="" id="country" /> */}
                    </label>
                </fieldset>
                <h4 className='text-xl text-primary font-medium'>Personal Details</h4>
                <fieldset className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    <label htmlFor="jobTitle">
                        Job Title
                        <input className='w-full input input-primary' value={data.roleId} onChange={(e) => setData({ ...data, roleId: e.target.value })} type="text" name="" id="jobTitle" />
                    </label>
                    <label htmlFor="dob">
                        Date of Birth
                        <input className='w-full input input-primary' value={data.dateOfBirth} onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })} type="text" name="" id="dob" />
                    </label>
                    <label htmlFor="employeeNumber">
                        Employee Number
                        <input className='w-full input input-primary' value={data.employmentNumber} onChange={(e) => setData({ ...data, employmentNumber: e.target.value })} type="text" name="" id="employeeNumber" />
                    </label>
                    {/* <label htmlFor="licenseNumber">
                        License Number
                        <input className='w-full input input-primary' type="text" name="" id="licenseNumber" />
                    </label>
                    <label htmlFor="licenseClass">
                        License Class
                        <input className='w-full input input-primary' type="text" name="" id="licenseClass" />
                    </label>
                    <label htmlFor="licenseClass">
                        License State/Province/Region
                        <input className='w-full input input-primary' type="text" name="" id="licenseClass" />
                    </label> */}
                </fieldset>
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="startDate">
                        Start Date
                        <input className='w-full input input-primary' value={data.startDate} onChange={(e) => setData({ ...data, startDate: e.target.value })} type="date" name="" id="startDate" />
                    </label>
                    <label htmlFor="leaveDate">
                        Leave Date
                        <input className='w-full input input-primary' value={data.endDate} onChange={(e) => setData({ ...data, endDate: e.target.value })} type="date" name="" id="leaveDate" />
                    </label></fieldset>
                <button className='mx-auto btn btn-primary' type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Employee