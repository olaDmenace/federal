import React from 'react'
import PageTitle from '../../../utils/PageTitle'
import FormTitle from '../../FormTitle'


function TruckAssignment() {
    PageTitle('Axle & Cartage - Truck Assigment')
    return (
        <div>
            <FormTitle Title={'Truck Assignment'} />
            <hr />
            <form className='grid gap-5 text-primary w-full md:grid-cols-2 items-end mt-5'>
                <label htmlFor="">
                    Truck Number
                    <select className='select select-primary w-full' name="" id="">
                        <option value="">AXL-123-AA</option>
                    </select>
                </label>
                <label htmlFor="">
                    Journey Officer
                    <input class='input input-primary w-full' placeholder='John Doe' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Logistics Coordinator
                    <input class='input input-primary w-full' placeholder='John Doe' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Delivery Officer
                    <input class='input input-primary w-full' placeholder='John Doe' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Start Date/Time
                    <input class='input input-primary w-full' type="datetime-local" name="" id="" />
                </label>
                <label htmlFor="">
                    End Date/Time
                    <input class='input input-primary w-full' type="datetime-local" name="" id="" />
                </label>
                <button className='btn btn-primary mx-auto' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TruckAssignment