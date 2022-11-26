import React from 'react'

const TripExpenses = () => {
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Trip Expenses</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                <fieldset className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end'>
                    <label htmlFor="">
                        Union Dues Payable
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Union Dues Paid
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Union Dues Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Road Expense Payable
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Road Expense Paid
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Road Expense Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Trip Allowance Payable
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Trip Allowance Paid
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Trip Allowance Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Aquilla Flashing Payable
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Aquilla Flashing Paid
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Aquilla Flashing Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Welfare Payable
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Welfare Paid
                        <input className='w-full input input-primary' placeholder='4000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Welfare Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value=""></option>
                        </select>
                    </label>
                </fieldset>
                <fieldset className='grid md:grid-cols-2 gap-3 items-end'>
                    <label htmlFor="">
                        Other Expenses Paid
                        <input className='w-full input input-primary' placeholder='3000' type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Other Expenses Status
                        <select className='w-full select select-primary' name="" id="">
                            <option value="">Paid</option>
                        </select>
                    </label>
                </fieldset>
                <label htmlFor="">
                    Purpose
                    <textarea className='w-full textarea textarea-primary' name="" id="" rows="5"></textarea>
                </label>
            </form>
        </div>
    )
}

export default TripExpenses