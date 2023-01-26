import React from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const Employee = () => {
    PageTitle('Axle & Cartage Employee Form')
    return (
        <div>
            <FormTitle Title={'Employee Details'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5'>
                <h4 className='text-xl text-primary font-medium'>Customer Details</h4>
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="firstname">
                        First Name
                        <input className='w-full input input-primary' placeholder='' type="text" name="" id="firstname" />
                    </label>
                    <label htmlFor="middleName">
                        Middle Name
                        <input className='w-full input input-primary' placeholder='' type="text" name="" id="middleName" />
                    </label>
                    <label htmlFor="lastName">
                        Last Name
                        <input className='w-full input input-primary' placeholder='' type="text" name="" id="lastName" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input className='w-full input input-primary' type="email" name="email" id="email" />
                    </label>
                </fieldset>
                <input type="file" name="" id="" />
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="clasifications">
                        Classifications
                        <select className='w-full select select-primary' name="classifications" id="classifications">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="enableAcess">
                        Enable Acess
                        <select className='w-full select select-primary' name="classifications" id="enableAcess">
                            <option value=""></option>
                        </select>
                    </label>
                </fieldset>
                <h4 className='text-xl text-primary font-medium'>Contact Information</h4>
                <fieldset className='grid md:grid-cols-2 gap-5'>
                    <label htmlFor="mobilePhone">
                        Mobile Phone Number
                        <input className='w-full input input-primary' type="tel" name="" id="mobilePhone" />
                    </label>
                    <label htmlFor="homePhone">
                        Home Phone Number
                        <input className='w-full input input-primary' type="tel" name="" id="homePhone" />
                    </label>
                </fieldset>
                <label htmlFor="address1">
                    Address
                    <input className='w-full input input-primary' type="text" name="" id="address1" />
                </label>
                <label htmlFor="address2">
                    Address Line 2
                    <input className='w-full input input-primary' type="text" name="" id="address2" />
                </label>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <label htmlFor="city">
                        City
                        <input className='w-full input input-primary' type="text" name="" id="city" />
                    </label>
                    <label htmlFor="state">
                        State/Province/Region
                        <input className='w-full input input-primary' type="text" name="" id="state" />
                    </label>
                    <label htmlFor="country">
                        Country
                        <input className='w-full input input-primary' type="text" name="" id="country" />
                    </label>
                </fieldset>
                <h4 className='text-xl text-primary font-medium'>Personal Details</h4>
                <fieldset className='grid gap-5 md:grid-cols-2'>
                    <label htmlFor="jobTitle">
                        Job Title
                        <input className='w-full input input-primary' type="text" name="" id="jobTitle" />
                    </label>
                    <label htmlFor="dob">
                        Date of Birth
                        <input className='w-full input input-primary' type="text" name="" id="dob" />
                    </label>
                    <label htmlFor="employeeNumber">
                        Emloyee Number
                        <input className='w-full input input-primary' type="text" name="" id="employeeNumber" />
                    </label>
                    <label htmlFor="startDate">
                        Start Date
                        <input className='w-full input input-primary' type="date" name="" id="startDate" />
                    </label>
                    <label htmlFor="leaveDate">
                        Leave Date
                        <input className='w-full input input-primary' type="date" name="" id="leaveDate" />
                    </label>
                    <label htmlFor="licenseNumber">
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
                    </label>
                </fieldset>
                <button className='mx-auto btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Employee