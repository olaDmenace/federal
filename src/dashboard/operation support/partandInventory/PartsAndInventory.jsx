import React from "react";
import FormTitle from "../../FormTitle";
const PartsAndInventory = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <FormTitle Title={"Parts and Inventory"} />
      <form action="" className="grid text-primary gap-5 w-full">
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Stock Name
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Stock Group
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Owner"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Stock ID
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Stock Brand
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Date Received
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Cost Per Unit
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Quantity Received
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Total Quantity in Store
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Total Quantity in Store (Value)
            <input
              className="w-full input input-primary"
              placeholder="ID-0000000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Measurement Unit
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <input className="py-2" type="file" src="" alt="" />
        <input className="py-2" type="file" src="" alt="" />
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Stock Location
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Supplier
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Reorder Level
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Stock Reorder Quantity
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Total QTY Consummed/Issued
            <input
              className="w-full input input-primary"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>

        <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end text-primary">
          <label htmlFor="">
            Description
            <br />
            <textarea
              className="w-full textarea textarea-primary"
              name=""
              id="  "
              value=""
              rows="5"
            ></textarea>
          </label>
        </fieldset>
        <button class="btn btn-primary mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartsAndInventory;
