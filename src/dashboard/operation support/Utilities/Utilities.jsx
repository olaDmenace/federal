import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";

function Utilities() {
  PageTitle("Axle & Cartage - Utilities");

  const [select, setSelect] = useState();
  const [formA, setFormA] = useState(false);
  const [formB, setFormB] = useState(false);
  const [formC, setFormC] = useState(false);

  useEffect(() => {
    select === "FormA" ? setFormA(true) : setFormA(false);
    select === "FormB" ? setFormB(true) : setFormB(false);
    select === "FormC" ? setFormC(true) : setFormC(false);
  }, [select]);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="space-y-2">
      <FormTitle Title={"Utilities"} />
      <hr className="pb-5" />
      <h4 className="text-xl text-primary font-medium">Reminders</h4>
      <br />

      <label className="text-primary">
        Reminder Type
        <select
          class="select select-primary w-full"
          value={select}
          onChange={handleChange}
          name=""
          id=""
        >
          <option selected disabled>
            Select Reminder
          </option>
          <option value="FormA">Form A</option>
          <option value="FormB">Form B</option>
          <option value="FormC">Form C</option>
        </select>
      </label>
      {formA && <FormA />}
      {formB && <FormB />}
      {formC && <FormC />}
    </div>
  );
}

export default Utilities;
