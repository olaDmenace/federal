import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";

import ProductDetails from "./ProductDetails";
import TruckCalibrationChart from "./TruckCalibrationChart";

import ProgrammingDetails from "./ProgrammingDetails";

import useFetch from "../../../useFetch";

function ShortageResolution() {
  PageTitle("Axle & Cartage - Shortage Resolution");
  const { trucks, formData, setFormData } = useFetch(
    "/truck/journey-management"
  );

  return (
    <div className="space-y-2 grid p-5 rounded-lg bg-white">
      <FormTitle Title={"Shortage Resolution"} />
      <hr />

      <div className="grid gap-10 pb-10">
        <div>
          <ProgrammingDetails
            trucks={trucks}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
    </div>
  );
}

export default ShortageResolution;
