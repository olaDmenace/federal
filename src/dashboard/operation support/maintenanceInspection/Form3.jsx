import React from "react";

const Form3 = () => {
  return (
    <div>
      <div className="space-y-2">
        {" "}
        <form action="" className="grid text-primary gap-5 w-full">
          <br />
          <h4 className="text-xl text-primary font-medium">Safety Equipment</h4>

          <fieldset className="grid md:grid-cols-2 gap-3 items-end">
            <label htmlFor="">
              Fire Extinguisher
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>

            <label htmlFor="">
              Flags/Flares/Fusees
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              Reflective Triangles
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select </option>
              </select>
            </label>
            <label htmlFor="">
              Spare Bulbs and Fuses
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              Spare Seal Beam
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Form3;
