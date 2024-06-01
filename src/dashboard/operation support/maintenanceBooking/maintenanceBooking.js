import React, { useState } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

function MaintenanceBooking() {
  PageTitle("FIRS - Journey Management");
  const [form, setForm] = useState(0);

  const activeForm = () => {
    if (form === 0) {
      return <Form1 />;
    } else if (form === 1) {
      return <Form2 />;
    } else {
      return <Form3 />;
    }
  };

  return (
    <div className="space-y-2 grid bg-white p-5 rounded-lg">
      <FormTitle Title={"Maintenance Booking Form"} />
      <hr />
      <ul className="steps steps-horizontal w-full pt-5">
        <li className="step step-primary"></li>
        <li className={`step ${form === 1 ? `step-primary` : `step`}`}></li>
        <li className={`step ${form === 2 ? `step-primary` : `step`}`}></li>
      </ul>
      <div className="flex gap-10 pb-10 overflow-x-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-red-700">
        <div>{activeForm()}</div>
      </div>
      <div className="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          className="btn btn-active"
        >
          Prev
        </button>
        <button
          className="btn btn-active"
          onClick={() => {
            setForm((currForm) => currForm + 1);
          }}
        >
          {form === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default MaintenanceBooking;
