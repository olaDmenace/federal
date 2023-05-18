import React, { useEffect, useState } from 'react'
import endpoint from '../../../utils/endpoints/endpoint'



function ProductDetails({ formData, setFormData }) {

    const [products, setProducts] = useState([])
    useEffect(() => {
        endpoint.get('/variable/products').then(res => {
            console.log(res.data.data)
            setProducts(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className='space-y-2'>
            <div className='space-y-2'>
                <h4 className='text-xl text-primary font-medium'>Product Details</h4>
                <hr />
                {/* Show the entry as requested here */}
                <form className='grid gap-5'>
                    <div className='grid text-primary gap-5 w-full md:grid-cols-2 items-end'>
                        <label htmlFor="">
                            Product Loaded<br />
                            <select className='select select-primary w-full' name="" id="">
                                <option value="">Select Product</option>
                                {products.map(item => <option value="" key={item.productId}>{item.productName}</option>)}
                            </select>
                            {/* <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" /> */}
                        </label>
                        <label htmlFor="">
                            Total Quantity Loaded<br />
                            <input class='input input-primary w-full' value={formData.primaryWayBill.quantityLoaded} onChange={(e) => setFormData({ ...formData, primaryWayBill: { ...formData.primaryWayBill, quantityLoaded: +e.target.value } })} placeholder='33000 LTRS' type="number" min={0} name="" id="" />
                        </label>
                        <label htmlFor="">
                            {/* This should be Automated */}
                            Total Quatity Delivered<br />
                            <input class='input input-primary w-full' value={formData.primaryWayBill.quantityDelivered} onChange={(e) => setFormData({ ...formData, primaryWayBill: { ...formData.primaryWayBill, quantityDelivered: +e.target.value } })} placeholder='PMS' type="number" min={0} name="" id="" />
                        </label>
                        {/* <label htmlFor="">
                            Quantity Delivered to Direct Customer<br />
                            <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                        </label> */}
                        <label htmlFor="">
                            Estimated Product Storage<br />
                            <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Customer Shortage Claim<br />
                            <input class='input input-primary w-full' value={formData.primaryWayBill.shortageClaim} onChange={(e) => setFormData({ ...formData, primaryWayBill: { ...formData.primaryWayBill, shortageClaim: +e.target.value } })} placeholder='PMS' type="text" name="" id="" />
                        </label>
                        {/* <label htmlFor="">
                            Customer Shortage Claim (Direct Customer)<br />
                            <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                        </label> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails