import React from "react";

const Form2 = () => {
  return (
    <div>
      {" "}
      <form action="" className="grid text-primary gap-5 w-full">
        <h4 className="text-xl text-primary font-medium">Work Order</h4>
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Maintenance Vendor
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Repair Priority Type
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Owner"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Job Level
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Service Location
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Service Location if Offsite
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck-in Scheduled Date
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck-in Scheduled Time
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Actual Truck-in Date
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Actual Truck- in Time
            <input
              className="w-full input input-primary"
              type="time"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Proposed Completion Date
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Proposed Time of Completion
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="time"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Actual Completion Date
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Actual Completion Time
            <input
              className="w-full input input-primary"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>

        <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end text-primary">
          <label htmlFor="">
            Description of Maintenance - After Inspection
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
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Asset Type
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Fault Type
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
            Delay Reason
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
      </form>
    </div>
  );
};

export default Form2;
