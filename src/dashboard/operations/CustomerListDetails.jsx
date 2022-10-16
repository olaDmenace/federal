import { PlusCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import SecondaryWaybill from './SecondaryWaybill'

function CustomerListDetails() {
  return (
    <div className='space-y-4'>
        <div className='flex justify-between space-y-2'>
            <h4 className='text-xl text-primary font-medium'>Customer</h4>
            <div className='float-right flex items-center gap-3 text-primary'>
                <PlusCircleIcon className='h-4'/>
                <h6 className='font-medium'>Add Waybill</h6>
            </div>
        </div>
        <div className=''>
            <SecondaryWaybill/>
        </div>
    </div>
  )
}

export default CustomerListDetails