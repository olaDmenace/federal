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
                    <div className='grid text-primary gap-5 w-full md:grid-cols-2 lg:grid-cols-3 items-end'>
                        <label htmlFor="">
                            Product Loaded<br />
                            <select className='select select-primary w-full' name="" id="">
                                <option value="">Select Product</option>
                                {products.map(item => <option value="" key={item.productId}>{item.productName}</option>)}
                            </select>
                            {/* <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" /> */}
                        </label>
                        <label htmlFor="">
                            Quantity Loaded<br />
                            <input class='input input-primary w-full' value={formData.quantityLoaded} onChange={(e) => setFormData({ ...formData, quantityLoaded: e.target.value })} placeholder='33000 LTRS' type="number" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Total Quatity Delivered (Multiple Customers)<br />
                            <input class='input input-primary w-full' value={formData.totalQuantityDelivered} onChange={(e) => setFormData({ ...formData, totalQuantityDelivered: e.target.value })} placeholder='PMS' type="number" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Quantity Delivered to Direct Customer<br />
                            <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                        </label><label htmlFor="">
                            Estimated Product Storage<br />
                            <input class='input input-primary w-full' value={formData.estimatedProductShortage} onChange={(e) => setFormData({ ...formData, estimatedProductShortage: e.target.value })} placeholder='PMS' type="text" name="" id="" />
                        </label><label htmlFor="">
                            Customer Shortage Claim (Multiple Customers)<br />
                            <input class='input input-primary w-full' value={formData.customerShortageClaim} onChange={(e) => setFormData({ ...formData, customerShortageClaim: e.target.value })} placeholder='PMS' type="text" name="" id="" />
                        </label><label htmlFor="">
                            Customer Shortage Claim (Direct Customer)<br />
                            <input class='input input-primary w-full' placeholder='PMS' type="text" name="" id="" />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails