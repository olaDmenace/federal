import React from "react";

const Form3 = () => {
  return (
    <div>
      {" "}
      <form action="" className="grid text-primary gap-5 w-full">
        <h4 className="text-xl text-primary font-medium">
          Attributed Cost of Repair/Inventory Request
        </h4>

        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor=" ">
            Attributed Cost Item number
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Cost Item Type
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Cost Item Group
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Owner"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Cost Item
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Cost Item Source
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Date Requested
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Date Issued
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Cost Item Unit
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Cost Item Unit Cost
            <input
              className="w-full input input-primary"
              placeholder="ID-0000000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Cost Item Total Cost
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
        </fieldset>

        <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end text-primary">
          <label htmlFor="">
            Maintenance Coordinator Comment
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
        <label htmlFor="">
          Maintenance Coordinator Signature
          <input
            className="w-full input input-primary"
            placeholder=""
            type="text"
            name=""
            id=""
          />
        </label>
      </form>
    </div>
  );
};

export default Form3;
