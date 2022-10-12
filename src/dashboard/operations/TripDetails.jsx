import React from 'react'

function TripDetails() {
  return (
    <div className='space-y-2'>
        <div className='space-y-2'>
            <h4 className='text-xl text-primary font-medium'>Trip/Customer Details</h4>
            <hr />
            {/* Show the entry as requested here */}
            <form className='grid gap-5'>
                <div className='grid text-primary gap-5 w-full md:grid-cols-2 lg:grid-cols-3 items-end'>
                    <label htmlFor="">
                        Customer Type<br/>
                        <input class='input input-primary w-full' placeholder='Ardova Direct Delivery' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Customer Name<br/>
                        <input class='input input-primary w-full' placeholder='Sam Doe' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Customer Destination State<br/>
                        <input class='input input-primary w-full' placeholder='Lagos' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Programmed Number of Customers<br/>
                        <input class='input input-primary w-full' placeholder='3' type="text" name="" id="" />
                    </label><label htmlFor="">
                        Programmed Business Area<br/>
                        <input class='input input-primary w-full' placeholder='Badagry' type="text" name="" id="" />
                    </label><label htmlFor="">
                        Current Truck Operational Status<br/>
                        <input class='input input-primary w-full' placeholder='Truck Programmed' type="text" name="" id="" />
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TripDetails