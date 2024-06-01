import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";
import { useLocation } from "react-router-dom";

function AssetRegister() {
  PageTitle("FIRS - Register New Asset");

  const location = useLocation();
  console.log(location);

  const [select, setSelect] = useState();
  const [formA, setFormA] = useState(false);
  const [formB, setFormB] = useState(false);
  const [formC, setFormC] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    select === "FormA" ? setFormA(true) : setFormA(false);
    select === "FormB" ? setFormB(true) : setFormB(false);
    select === "FormC" ? setFormC(true) : setFormC(false);
  }, [select]);

  const handleChange = (e) => {
    setSelect(e.target.value);
    setHide(false);
  };

  return (
    <div className="space-y-2">
      <FormTitle Title={"Asset Register"} />
      <hr className="pb-5" />
      {hide && (
        <label className="text-primary">
          Asset Type
          <select
            class="select select-primary w-full"
            value={select}
            onChange={handleChange}
            name=""
            id=""
          >
            <option selected disabled>
              Select Asset Type
            </option>
            <option value="FormA">Form A</option>
            <option value="FormB">Form B</option>
            <option value="FormC">Form C</option>
          </select>
        </label>
      )}
      {formA && <FormA />}
      {formB && <FormB />}
      {formC && <FormC />}
    </div>
  );
}

export default AssetRegister;
