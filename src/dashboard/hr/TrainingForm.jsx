import React from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const TrainingForm = () => {
    PageTitle('Training Form')
    return (
        <div>
            <FormTitle Title={'Training Form'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
                    <label htmlFor="">
                        Date of Training
                        <input className='w-full input input-primary' placeholder='ID-112200' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Training Status
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Type
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Training Type</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Class (Internal/External)
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Name of Facilitator
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Facilitator</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Topic
                        <input className='w-full input input-primary' placeholder='Topic' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Participants
                        <select className='w-full select select-primary' name="" id="">
                            <option selected value="">Select Participants</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Number of Participants
                        <input className='w-full input input-primary' placeholder='20' type="number" name="" id="" />
                    </label>
                </fieldset>
                <label htmlFor="">
                    Training Venue
                    <input className='w-full input input-primary' placeholder='Location' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Training Medium
                    <select className='w-full select select-primary' name="" id="">
                        <option selected value="">Select Medium</option>
                    </select>
                </label>
                <label htmlFor="">
                    Training Objectives
                    <textarea className='w-full textarea textarea-primary' name="" id="" rows="5"></textarea>
                </label>
                <button className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default TrainingForm