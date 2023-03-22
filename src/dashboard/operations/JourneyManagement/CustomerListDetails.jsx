import { PlusCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import SecondaryWaybill from './SecondaryWaybill'

function CustomerListDetails({ formData, setFormData }) {
  const [formNumber, setFormNumber] = useState(0)
  const handleNewWayBillFrm = (formNumber) => {
    let newWbFrm = {
      waybillNumber: "",
      documentUrl: "",
      distanceTravelled: 0,
      customerId: "",
      deliveryZone: "",
      quantityLoaded: 0,
      totalQuantityDelivered: 0,
      estimatedProductShortage: 0,
      customerShortageClaim: 0
    }
    setFormData((prev) => {
      if (!Array.isArray(prev.secondaryWayBills)) {
        prev.secondaryWayBills = []
      }
      prev.secondaryWayBills[formNumber] = newWbFrm
      return prev
    })
    setFormNumber(formNumber)
  }
  return (
    <div className='space-y-4 pr-10'>
      <div className='flex justify-between space-y-2'>
        <h4 className='text-xl text-primary font-medium'>Customer</h4>
        <div className='float-right flex items-center gap-3 text-primary'>
          <PlusCircleIcon className='h-4' />
          <button onClick={(e) => handleNewWayBillFrm(formNumber + 1)} className='font-medium'>Add Waybill</button>
        </div>
      </div>
      <div className='flex gap-10'>
        {[...Array(formNumber + 1)].map((item, i) => (<SecondaryWaybill formData={formData} setFormData={setFormData} key={i} index={i} />))}
      </div>
    </div>
  )
}

export default CustomerListDetails