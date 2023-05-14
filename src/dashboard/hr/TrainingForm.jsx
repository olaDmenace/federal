import React, { useState } from 'react'
import PageTitle from '../../utils/PageTitle'
import FormTitle from '../FormTitle'

const TrainingForm = () => {
    PageTitle('Training Form')
    const [data, setData] = useState({
        trainingDate: "",
        status: 0,
        type: 0,
        class: 0,
        facilitator: "",
        participants: [],
        objectives: [],
        topic: "",
        medium: 0,
        venue: ""
    })


    const handleSubmit = (e) => {
        console.log('first')
    }
    return (
        <div className='p-5 rounded-lg bg-white'>
            <FormTitle Title={'Training Form'} />
            <hr className='pb-5' />
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
                    <label htmlFor="">
                        Date of Training
                        <input className='w-full input input-primary' value={data.trainingDate} placeholder='ID-112200' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Training Status
                        <select className='w-full select select-primary' value={data.status} name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Type
                        <select className='w-full select select-primary' value={data.type} name="" id="">
                            <option selected value="">Select Training Type</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Class (Internal/External)
                        <select className='w-full select select-primary' value={data.class} name="" id="">
                            <option selected value="">Select Status</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Name of Facilitator
                        <select className='w-full select select-primary' value={data.facilitator} name="" id="">
                            <option selected value="">Select Facilitator</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Training Topic
                        <input className='w-full input input-primary' value={data.topic} placeholder='Topic' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Participants
                        <select className='w-full select select-primary' value={data.participants} name="" id="">
                            <option selected value="">Select Participants</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Number of Participants
                        {/* <input className='w-full input input-primary' value={} placeholder='20' type="number" name="" id="" /> */}
                    </label>
                </fieldset>
                <label htmlFor="">
                    Training Venue
                    <input className='w-full input input-primary' value={data.value} placeholder='Location' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Training Medium
                    <select className='w-full select select-primary' value={data.medium} name="" id="">
                        <option selected value="">Select Medium</option>
                    </select>
                </label>
                <label htmlFor="">
                    Training Objectives
                    <textarea className='w-full textarea textarea-primary' value={data.objectives} name="" id="" rows="5"></textarea>
                </label>
                <button onClick={handleSubmit} className='btn btn-primary mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default TrainingForm