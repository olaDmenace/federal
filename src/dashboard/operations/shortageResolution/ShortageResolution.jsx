import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import LiquidHeight from "./LiquidHeight";
import ProductDetails from "./ProductDetails";
import TruckCalibrationChart from "./TruckCalibrationChart";
import UllageParameter from "./UllageParameter";
import ProgrammingDetails from "./ProgrammingDetails";
import ProgrammingDetails2 from "./ProgrammingDetails2";
import endpoint from "../../../utils/endpoints/endpoint";

function ShortageResolution() {
  PageTitle("Axle & Cartage - Shortage Resolution");
  const [form, setForm] = useState(0);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    endpoint
      .get("/truck/journey-management")
      .then((res) => {
        console.log(res.data.data);
        setTrucks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activeForm = () => {
    if (form === 0) {
      return <ProgrammingDetails />;
    } else if (form === 1) {
      return <ProgrammingDetails2 />;
    } else if (form === 2) {
      return <ProductDetails />;
    } else if (form === 3) {
      return <TruckCalibrationChart />;
    } else if (form === 4) {
      return <UllageParameter />;
    } else {
      return <LiquidHeight />;
    }
  };

  const handleSubmit = () => {
    console.log();
  };

  return (
    <div className="space-y-2 grid">
      <FormTitle Title={"Shortage Resolution"} />
      <hr />
      <ul className="steps">
        <li className="step step-primary"></li>
        <li className={form >= 1 ? "step step-primary" : "step"}></li>
        <li className={form >= 2 ? "step step-primary" : "step"}></li>
        <li className={form >= 3 ? "step step-primary" : "step"}></li>
        <li className={form >= 4 ? "step step-primary" : "step"}></li>
        <li className={form >= 5 ? "step step-primary" : "step"}></li>
      </ul>
      <div className="grid gap-10 pb-10">
        <div>{activeForm()}</div>
      </div>
      <div class="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          className={form === 0 ? "btn btn-disabled" : "btn btn-active"}
        >
          Prev
        </button>
        <button
          class="btn btn-active"
          onClick={() => {
            form !== 5 ? setForm((currForm) => currForm + 1) : handleSubmit();
          }}
        >
          {form === 5 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default ShortageResolution;
