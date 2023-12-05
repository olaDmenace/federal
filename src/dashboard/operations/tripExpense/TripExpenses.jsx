import React from "react";
import FormTitle from "../../FormTitle";
import { useLocation } from "react-router-dom";

const TripExpenses = ({ formData, setFormData }) => {
  const location = useLocation();
  return (
    <div className="space-y-2 grid bg-white p-5 rounded-lg">
      <FormTitle Title={"Fuel Allowance"} />
      <hr className="pb-5" />
      <div className="py-5 text-primary space-y-3">
        <form action="" className="grid text-primary gap-5 w-full">
          <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
            <label htmlFor="">
              Trip Allowance Payable
              <input
                className="w-full input input-primary"
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.tripAllowancePayable}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     tripAllowancePayable: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Trip Allowance Paid
              <input
                className="w-full input input-primary"
                disabled={location?.state === null}
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.tripAllowancePaid}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     tripAllowancePaid: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Trip Allowance Status
              <select
                className="w-full select select-primary"
                name=""
                id=""
                disabled={location?.state === null}
                // value={formData.tripAllowanceStatus}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     tripAllowanceStatus: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
            <label htmlFor="">
              Aquilla Flashing Payable
              <input
                className="w-full input input-primary"
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.aquilaFlashingPayable}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     aquilaFlashingPayable: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Aquilla Flashing Paid
              <input
                className="w-full input input-primary"
                placeholder="4000"
                disabled={location?.state === null}
                type="number"
                name=""
                id=""
                // value={formData.aquilaFlashingPaid}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     aquilaFlashingPaid: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Aquilla Flashing Status
              <select
                className="w-full select select-primary"
                name=""
                id=""
                disabled={location?.state === null}
                // value={formData.aquilaFlashingStatus}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     aquilaFlashingStatus: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
            <label htmlFor="">
              Welfare Payable
              <input
                className="w-full input input-primary"
                placeholder="4000"
                type="number"
                name=""
                id=""
                // value={formData.welfarePayable}
                // onChange={(e) => {
                //   setFormData({ ...formData, welfarePayable: +e.target.value });
                // }}
              />
            </label>
            <label htmlFor="">
              Welfare Paid
              <input
                className="w-full input input-primary"
                placeholder="4000"
                disabled={location?.state === null}
                type="number"
                name=""
                id=""
                // value={formData.welfarePaid}
                // onChange={(e) => {
                //   setFormData({ ...formData, welfarePaid: +e.target.value });
                // }}
              />
            </label>
            <label htmlFor="">
              Welfare Status
              <select
                className="w-full select select-primary"
                name=""
                id=""
                disabled={location?.state === null}
                // value={formData.welfareStatus}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     welfareStatus: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
          </fieldset>
          <fieldset className="grid md:grid-cols-2 gap-3 items-end">
            <label htmlFor="">
              Other Expenses Paid
              <input
                className="w-full input input-primary"
                disabled={location?.state === null}
                placeholder="3000"
                type="number"
                name=""
                id=""
                // value={formData.otherExpensesPaid}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     otherExpensesPaid: +e.target.value,
                //   });
                // }}
              />
            </label>
            <label htmlFor="">
              Other Expenses Status
              <select
                className="w-full select select-primary"
                name=""
                disabled={location?.state === null}
                id=""
                // value={formData.otherExpensesStatus}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     otherExpensesStatus: +e.target.value,
                //   })
                // }
              >
                <option value="">Select Status</option>
                <option value="1">Paid</option>
                <option value="2">Refused</option>
              </select>
            </label>
          </fieldset>
          <label htmlFor="">
            Purpose
            <textarea
              className="w-full textarea textarea-primary"
              name=""
              id=""
              rows="5"
              // value={formData.purpose}
              // onChange={(e) => {
              //   setFormData({ ...formData, purpose: e.target.value });
              // }}
            ></textarea>
          </label>
          <button className="btn btn-primary mx-auto">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TripExpenses;
