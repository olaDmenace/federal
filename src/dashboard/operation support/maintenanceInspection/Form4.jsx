import React from "react";

const Form4 = () => {
  return (
    <div>
      <div className="space-y-2">
        {" "}
        <form action="" className="grid text-primary gap-5 w-full">
          <br />
          <h4 className="text-xl text-primary font-medium">Sign-Off</h4>

          <fieldset className="grid md:grid-cols-2 gap-3 items-end">
            <label htmlFor="">
              Remarks Fire Extinguisher
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>

            <label htmlFor="">
              Vehicle Condition
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              Above Defects Corrected
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select </option>
              </select>
            </label>
            <label htmlFor="">
              Above Defects Need to Be Corrected for Safe Operation of Vehicle
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              Vendor Signature
              <br />
              <select className="w-full select select-primary" name="" id="">
                <option value="1"> Select</option>
              </select>
            </label>
            <label htmlFor="">
              Maintenance Coordinator Signature
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

export default Form4;
