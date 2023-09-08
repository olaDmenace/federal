import React, { useState } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import FuelReconciliation from "./FuelReconciliation";
import FuelRequest from "./FuelRequest";
import TripExpenses from "./TripExpenses";

const TripExpense = () => {
  PageTitle("Axle & Cartage - Trip Expense Request Form");
  const [form, setForm] = useState(1);

  const activeForm = () => {
    if (form === 1) {
      return <FuelRequest formData={formData} setFormData={setFormData} />;
    } else if (form === 2) {
      return (
        <FuelReconciliation formData={formData} setFormData={setFormData} />
      );
    } else {
      return <TripExpenses formData={formData} setFormData={setFormData} />;
    }
  };

  const [formData, setFormData] = useState({
    journeyManagementId: "",
    fuelRequest: {
      dispensingStation: "",
      requestDate: "",
      currentVolume: "",
      issuedVolume: "",
      baseStock: "",
      status: 0,
    },
    topUpRequest: {
      dispensingStation: "",
      requestDate: "",
      currentVolume: "",
      issuedVolume: "",
      baseStock: "",
      status: "",
      reason: "",
    },
    fuelReconciliation: {
      volumeConsumed: "",
      comment: "",
      variationReason: "",
    },
    unionDuesPayable: "",
    unionDuesPaid: "",
    status: 0,
    roadExpensePayable: "",
    roadExpensePaid: "",
    roadExpenseStatus: 0,
    tripAllowancePayable: "",
    tripAllowancePaid: "",
    tripAllowanceStatus: 0,
    aquilaFlashingPayable: "",
    aquilaFlashingPaid: "",
    aquilaFlashingStatus: 0,
    welfarePayable: "",
    welfarePaid: "",
    welfareStatus: 0,
    otherExpensesPaid: "",
    purpose: "",
    otherExpensesStatus: 0,
  });

  const submithandler = () => {
    form !== 3 ? setForm((currForm) => currForm + 1) : console.log(formData);
  };

  return (
    <div className="space-y-2 grid bg-white p-5 rounded-lg">
      <FormTitle Title={"Trip Expense Request Form"} />
      <hr className="pb-5" />
      <ul className="steps">
        <li className="step step-primary"></li>
        <li className={form >= 2 ? "step step-primary" : "step"}></li>
        <li className={form >= 3 ? "step step-primary" : "step"}></li>
      </ul>
      {activeForm()}
      <div class="btn-group mx-auto pt-5">
        <button
          disabled={form === 1}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          class="btn btn-active"
        >
          Prev
        </button>
        <button class="btn btn-active" onClick={submithandler}>
          {form === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TripExpense;
