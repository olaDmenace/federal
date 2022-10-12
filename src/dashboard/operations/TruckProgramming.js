import { LocationMarkerIcon, ThumbUpIcon } from '@heroicons/react/outline'
import React from 'react'
import PopUp from '../../utils/PopUp'

function TruckProgramming() {
  return (
    <div className='space-y-2'>
        {/* <h2 className='text-3xl text-primary font-semibold'>Truck Programming Form</h2> */}
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl text-primary font-semibold'>Truck Programming</h2>
            <div className='inlne flex items-center gap-3'>
                <button>Save as Draft</button>
                <button class='btn btn-primary'>Completed</button>
            </div>
        </div>
        <hr />
        <form action="" className='grid text-primary gap-5 w-full'>
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                <label htmlFor="">
                    Track Number<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Select Truck Number</option>
                    </select>
                </label>
                <label htmlFor="">
                    Track Odometer<br/>
                    <input class='input input-primary w-full' placeholder='27 Km' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Track Milage to Next PM<br/>
                    <input class='input input-primary w-full' placeholder='4 mpg' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Next PM Due Date<br/>
                    <input class='input input-primary w-full' placeholder='27Km' type="date" name="" id="" />
                </label>
                <label htmlFor="">
                    Truck Capacity<br/>
                    <input class='input input-primary w-full' placeholder='35,000 LTRs' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Volume Unit<br/>
                    <input class='input input-primary w-full' placeholder='MT, KG, LTR' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Brand<br/>
                    <input class='input input-primary w-full' placeholder='ISUZU' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Product Type<br/>
                    <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                </label>
                <label htmlFor="" className='relative'>
                    Current Position<br/>
                    <input class='input input-primary w-full' placeholder='Lorem Depot' type="text" name="" id="" />
                    <LocationMarkerIcon className='srtoke-1 h-6 absolute top-9 right-4' />
                </label>
                <label htmlFor="">
                    Dedicated Destination<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </label>
                <label htmlFor="">
                    Programmed Destination<br/>
                    <input class='input input-primary w-full' placeholder='40, Toyin Street, Ikeja' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Programmed Trip Type<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Trip Type</option>
                    </select>
                </label>
                <label htmlFor="">
                    Bridging Depot<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">354 Oshodi</option>
                    </select>
                </label>
                <label htmlFor="">
                    Restrictions<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Select Restrictions</option>
                    </select>
                </label>
                <label htmlFor="">
                    Truck Loading Configuration<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Select Loading Position</option>
                    </select>
                </label>
                <label htmlFor="">
                    Loading Location<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option value="">34, Muritala Muhammed</option>
                    </select>
                </label>
                <label htmlFor="">
                    Returning Destination<br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Select Returning Destination</option>
                    </select>
                </label>
            </div>
            <fieldset className='grid md:grid-cols-2 gap-3 w-full'>
                <label htmlFor="">
                    Journey Officer<br/>
                    <input class='input input-primary w-full' placeholder='Jane Doe' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Logistics Officer<br/>
                    <input class='input input-primary w-full' placeholder='John Doe' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Delivery Officer<br/>
                    <input class='input input-primary w-full' placeholder='John Smith' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Trip Officer<br/>
                    <input class='input input-primary w-full' placeholder='ID-120021' type="text" name="" id="" />
                </label>
            </fieldset>
            <h2 className='text-xl -mb-4 text-primary font-semibold'>Trip/Customer Details</h2>
            <hr />
            <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>                
                <label htmlFor="">
                    Customer Type<br/>
                    <input class='input input-primary w-full' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Customer Name<br/>
                    <input class='input input-primary w-full' placeholder='Jane Smith' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Customer Destination State<br/>
                    <input class='input input-primary w-full' placeholder='Jane Smith' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Programmed Number of Customers<br/>
                    <input class='input input-primary w-full' type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    Programmed Business Area (Final Destination)<br/>
                    <input class='input input-primary w-full' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Current Truck Operational Status <br/>
                    <select class='select select-primary w-full' name="" id="">
                        <option selected disabled value="">Select Status</option>
                    </select>
                </label>
            </fieldset>
            <button class='btn btn-primary mx-auto' type="submit">Submit</button>
        </form>
        <div className=''>
        {/* <PopUp>
            <div className='bg-white text-center mx-auto z-10 w-4/5 md:w-1/2 h-4/5 md:h-2/3 py-10 gap-5 rounded-md grid'>
                <ThumbUpIcon className='h-36 stroke-1 mx-auto stroke-primary' />
                <h1 className='text-primary text-5xl font-extrabold'>Submitted</h1>
                <p>Welldone! Truck programming sucessful!</p>
                <button class='btn btn-primary mx-auto'>Download</button>
            </div>
        </PopUp> */}
        </div>
    </div>
  )
}

export default TruckProgramming