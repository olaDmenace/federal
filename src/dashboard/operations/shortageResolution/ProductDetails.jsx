import TruckResolution from "./TruckResolution";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import useFetch from "../../../useFetch";

function ProductDetails({ trucks, setFormData, formData }) {
  return (
    <div>
      <form className="grid gap-5 text-primary my-5">
        <h4 className="text-xl text-primary font-medium">Product Details</h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Product Loaded
            <br />
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.product.productId}>
                    {item.truckProgramming.product.productType}
                  </p>
                ))}
            </div>
          </label>

          <label htmlFor="">
            Quantity Loaded
            <input
              class="input input-primary w-full"
              placeholder=""
              type="number"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Quantity Delivered
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Estimated Product Shortage (Entire Trip)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            ACL Confirmed Shortage (Entire Trip)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Customer Shortage Claim (Entire Trip)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Total Agreed Shortage (Multiple Customers)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Agreed Shortage (Direct Customer)
            <input
              class="input input-primary w-full"
              placeholder=""
              value={formData.resolutions[0].agreedShortage}
              type="number"
              name=""
              id=""
              onChange={(e) =>
                setFormData({
                  ...formData,
                  resolutions: [
                    {
                      ...formData.resolutions[0],
                      agreedShortage: +e.target.value,
                    },
                  ],
                })
              }
            />
          </label>
          <label htmlFor="">
            Product Price
            <input
              class="input input-primary w-full"
              placeholder=""
              value={formData.productPrice}
              type="number"
              name=""
              id=""
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productPrice: +e.target.value,
                })
              }
            />
          </label>
          <label htmlFor="">
            Agreed shortage Value (Multiple Customers)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Agreed Shortage Value (Direct Customer)
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default ProductDetails;
