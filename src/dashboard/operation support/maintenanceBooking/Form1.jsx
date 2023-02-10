import React from "react";

const Form1 = () => {
  return (
    <div>
      {" "}
      <form action="" className="grid text-primary gap-5 w-full">
        <h4 className="text-xl text-primary font-medium">Booking</h4>
        <fieldset className="grid md:grid-cols-2 gap-3 items-end">
          <label htmlFor="">
            Truck
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
            Brand
            <input
              className="w-full input input-primary"
              placeholder="ivusu"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Journey Officer
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
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
            Logistics Cordinator
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Booking ID
            <input
              className="w-full input input-primary"
              placeholder="ID-0000000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Booking Date
            <input
              className="w-full input input-primary"
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Time
            <input
              className="w-full input input-primary"
              placeholder="00:00am"
              type="time"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Maintenance Status
            <select
              className="w-full select select-primary"
              placeholder="Select Status"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Truck Current Location (state)
            <select
              className="w-full select select-primary"
              placeholder="Select Status"
            >
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            Truck Current Location
            <input
              className="w-full input input-primary"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck Loading Status
            <input
              className="w-full input input-primary"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Type of Service
            <input
              className="w-full input input-primary"
              placeholder="ID-0000000"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck glitch noitced Date
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
            Glitch Description
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
        <input className="py-2" type="file" src="" alt="" />
        <input className="py-2" type="file" src="" alt="" />
      </form>
    </div>
  );
};

export default Form1;
