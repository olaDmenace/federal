import React from "react";

const ProgrammingDetails = () => {
  return (
    <div>
      <form className="grid gap-5 text-primary my-5">
        <h4 className="text-xl text-primary font-medium">
          Programming Details
        </h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Trip ID
            <input
              class="input input-primary w-full"
              placeholder="PMS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck Number
            <input
              class="input input-primary w-full"
              placeholder="33,000 LTRS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck Capacity
            <input
              class="input input-primary w-full"
              placeholder="33,000 LTRS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Brand
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Loading Location
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Returning Destination
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Journey Officer
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Logistics Cordinator
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Delivery Officer
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <h4 className="text-xl text-primary font-medium">
          Trip/Customer Details
        </h4>

        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Customer Type
            <input
              class="input input-primary w-full"
              placeholder="PMS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Primary Customer Name
            <input
              class="input input-primary w-full"
              placeholder="33,000 LTRS"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <h4 className="text-xl text-primary font-medium">Customer 1</h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Secondary Customer Name
            <input
              class="input input-primary w-full"
              placeholder="PMS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Secondary Customer Address
            <input
              class="input input-primary w-full"
              placeholder="33,000 LTRS"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Quantity Loaded
            <input
              class="input input-primary w-full"
              placeholder="33,000 LTRS"
              type="text"
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
            Estimated Product Shortage
            <input
              class="input input-primary w-full"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Customer Shortage Claim
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
};

export default ProgrammingDetails;
