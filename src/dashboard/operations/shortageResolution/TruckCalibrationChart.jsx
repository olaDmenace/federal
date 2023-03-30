import React from "react";

function TruckCalibrationChart() {
  return (
    <div>
      <form className="grid gap-5 text-primary my-5" action="">
        <h4 className="text-xl text-primary font-medium">
          Truck Calibration Chart
        </h4>
        <h4 className="text-xl">Compartment 1</h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Capacity (Loaded)
            <select className="select select-primary w-full" name="" id="">
              <option value="">2000 LTRS</option>
            </select>
          </label>
          <label htmlFor="">
            Chart Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Loading Depot Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Difference
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Value
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <h4 className="text-xl">Compartment 2</h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Capacity (Loaded)
            <select className="select select-primary w-full" name="" id="">
              <option value="">2000 LTRS</option>
            </select>
          </label>
          <label htmlFor="">
            Chart Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Loading Depot Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Difference
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Value
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <h4 className="text-xl">Compartment 3</h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Capacity (Loaded)
            <select className="select select-primary w-full" name="" id="">
              <option value="">2000 LTRS</option>
            </select>
          </label>
          <label htmlFor="">
            Chart Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Loading Depot Ullage
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Difference
            <input
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Value
            <input
              className="input input-primary w-full"
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

export default TruckCalibrationChart;
