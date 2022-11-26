import React from 'react'

const FuelRequest = () => {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Fuel Request - Top-up</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
                    <label htmlFor="">
                        Dispensing Station Name
                        <select className='w-full select select-primary'>
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Request Date
                        <input className='w-full input input-primary' type="date" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Current Fuel In Tank (L)
                        <input className='w-full input input-primary' placeholder='20' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Base Stock Request - Top-up
                        <input className='w-full input input-primary' placeholder='48 Ltr' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Fuel Requested
                        <input className='w-full input input-primary' placeholder='68 Ltr' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Fuel Issued (Litres)
                        <input className='w-full input input-primary' placeholder='68' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Fuel Issued (Price/Litre)
                        <input className='w-full input input-primary' placeholder='145' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Fuel Cost (Naira)
                        <input className='w-full input input-primary' placeholder='6960' type="text" name="" id="" />
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="">
                        Top-up Reason
                        <textarea className='w-full textarea textarea-primary' name="" id="" rows="5"></textarea>
                    </label>
                    <label htmlFor="">
                        Fuel Request - Top-Up Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value="">Issued</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default FuelRequest 