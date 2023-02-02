import React from "react";

const Form1 = () => {
  return (
    <div>
      {" "}
      <form action="" className="grid text-primary gap-5 w-full">
        <h4 className="text-xl text-primary font-medium">Detail</h4>
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Truck Number
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Number"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Truck Owner
            <select
              className="w-full select select-primary"
              placeholder="Select Truck Owner"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Journey Officer
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Logistics Cordinator
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Delivery Officer
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Odometer Reading
            <input
              className="w-full input input-primary"
              placeholder="0000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Inpection ID
            <input
              className="w-full input input-primary"
              placeholder="ID-0000000"
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

export default Form1;
