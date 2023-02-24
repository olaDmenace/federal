import { PlusCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import SecondaryWaybill from './SecondaryWaybill'

function CustomerListDetails({ formData, setFormData }) {
  const [formNumber, setFormNumber] = useState(1)
  return (
    <div className='space-y-4 pr-10'>
      <div className='flex justify-between space-y-2'>
        <h4 className='text-xl text-primary font-medium'>Customer</h4>
        <div className='float-right flex items-center gap-3 text-primary'>
          <PlusCircleIcon className='h-4' />
          <button onClick={(e) => setFormNumber((formNo) => formNo + 1)} className='font-medium'>Add Waybill</button>
        </div>
      </div>
      <div className='flex gap-10'>
        {[...Array(formNumber)].map((item, i) => (<SecondaryWaybill formData={formData} setFormData={setFormData} key={i} index={i} />))}
      </div>
    </div>
  )
}

export default CustomerListDetails