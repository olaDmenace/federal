import React from 'react'

function FormA2({ formData, setFormData }) {
    console.log('formData:', formData);



    const titles = new Map()
    titles.set(0, "Vehicle License")
    titles.set(1, 'Hackney Permit')
    titles.set(2, 'Proof of Ownership')
    titles.set(3, 'Carriage Permit')
    titles.set(4, 'Road Worthiness')
    titles.set(5, 'Heavy Duty Permit')
    titles.set(6, 'All of Registration Number')
    titles.set(7, 'CMR')
    titles.set(8, 'Info Req for Clearance/Attestation')
    titles.set(9, 'Carriage Permit')
    titles.set(10, 'Truck Insurance')
    // titles.set(11, 'Heavy Duty Permit')

    const mutateField = (type, valToChange, newVal) => {
        let i = 0

        while (i < formData.truckDocuments.length) {
            if (formData.truckDocuments[i].type === type) {
                formData.truckDocuments[i][valToChange] = newVal
                break;
            }
            i += 1
        }
        setFormData({ ...formData })
    }
    console.log('titles:', titles);
    return (
        <div className='py-5 text-primary space-y-3'>
            <h4 className='text-lg font-semibold'>Truck Document</h4>
            <form action="" className='grid text-primary gap-5 w-full'>
                {formData.truckDocuments.map((v, i) =>
                    <fieldset type={v.type} key={i}>
                        <h6 className='font-semibold text-lg'>{titles?.get(v?.type)}</h6>
                        <fieldset className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end'>
                            <label htmlFor="">
                                Reference Number
                                <input value={v.referenceNumber} onChange={(e) => mutateField(v.type, 'referenceNumber', e.target.value)} className='input input-primary w-full' type="text" name="" id="" />
                            </label>
                            <label htmlFor="">
                                Issue Date
                                <input value={v.dateIssued} onChange={(e) => mutateField(v.type, 'dateIssued', e.target.value)} className='input input-primary w-full' type="date" name="" id="" />
                            </label>
                            <label htmlFor="">
                                Expiry Date
                                <input value={v.expiryDate} onChange={(e) => mutateField(v.type, 'expiryDate', e.target.value)} className='input input-primary w-full' type="date" name="" id="" />
                            </label>
                        </fieldset>
                    </fieldset>
                )}
            </form>
        </div>
    )
}

export default FormA2