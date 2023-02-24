import React from 'react'

function ReportedShortage() {
    return (
        <div className='space-y-2'>
            <h4 className='text-xl text-primary font-medium'>Reported Shortage</h4>
            <hr />
            {/* Show the entry as requested here */}
            <form className='grid gap-5 text-primary w-full md:grid-cols-2 items-end mt-5'>
                <label htmlFor="">
                    Residence Time at Loading Point<br />
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Residence Time at Customer 1 Loacation<br />
                    <input class='input input-primary w-full' placeholder='33000 LTRS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Residence Time at Customer 2 Loacation<br />
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Residence Time at Customer 3 Loacation<br />
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label><label htmlFor="">
                    Residence Time at the Depot Before Flash<br />
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label><label htmlFor="">
                    Resdidence Time at the Depot After Flash<br />
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label><label htmlFor="">
                    Total Rsidence Time at the Depot
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Outbound Travel Time
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Inbound Travel Time
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
                <label htmlFor="">
                    Total Trip Cycle Time
                    <input class='input input-primary w-full' placeholder='PMS' type="time" name="" id="" />
                </label>
            </form>
        </div>
    )
}

export default ReportedShortage