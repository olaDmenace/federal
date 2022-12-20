import React from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const AbsenceForm = () => {
    PageTitle('Delivery Officer Absence Form')
    return (
        <div>
            <FormTitle Title={'Delivery Officer Absence Form'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
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
                        Absence Reason
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Reason</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Leave Timeline (Days)
                        <input className='w-full input input-primary' placeholder='Select Number of Days' type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Leave End Date
                        <input className='w-full input input-primary' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Alternative Do: Authorized Leave
                        <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                    </label>
                </fieldset>
                <label htmlFor="">
                    Alternative Do: Authorized Leave
                    <input className='w-full input input-primary' placeholder='John Doe' type="text" name="" id="" />
                </label>
                <button className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default AbsenceForm