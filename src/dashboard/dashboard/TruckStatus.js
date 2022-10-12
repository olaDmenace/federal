import { LocationMarkerIcon, TruckIcon } from '@heroicons/react/outline'
import React from 'react'
import Fuel from '../../images/Pump.png'

function TruckStatus() {
  return (
    <>
        <div className='flex justify-between border border-primary p-3 rounded-md'>
            <div className='space-y-2'>
                <div className='flex gap-2'>
                    <TruckIcon className='h-6 stroke-1 stroke-primary'/>
                    <h3 className='font-semibold'>AXL 001</h3>
                </div>
                <div className='flex gap-2'>
                    <LocationMarkerIcon className='h-6 stroke-1 stroke-primary' />
                    <h6 className='font-memdium'>Ibafo Deposit</h6>
                </div>
                <div className='flex gap-2'>
                    <img src={Fuel} alt=''/>
                    <p>21305 KMs</p>
                </div>
            </div>
            <button class='btn btn-primary place-self-end'>Available</button>
        </div>
    </>
  )
}

export default TruckStatus