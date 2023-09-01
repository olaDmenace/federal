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
      return <FuelRequest />;
    } else if (form === 2) {
      return <FuelReconciliation />;
    } else {
      return <TripExpenses />;
    }
  };

  const [formData, setFormData] = useState({
    journeyManagementId: "",
    fuelRequest: {
      dispensingStation: "",
      requestDate: "",
      currentVolume: 0,
      issuedVolume: 0,
      baseStock: 0,
      status: 0,
    },
    topUpRequest: {
      dispensingStation: "",
      requestDate: "",
      currentVolume: 0,
      issuedVolume: 0,
      baseStock: 0,
      status: 0,
      reason: "",
    },
    fuelReconciliation: {
      volumeConsumed: 0,
      comment: "",
      variationReason: "",
    },
    unionDuesPayable: 0,
    unionDuesPaid: 0,
    status: 0,
    roadExpensePayable: 0,
    roadExpensePaid: 0,
    roadExpenseStatus: 0,
    tripAllowancePayable: 0,
    tripAllowancePaid: 0,
    tripAllowanceStatus: 0,
    aquilaFlashingPayable: 0,
    aquilaFlashingPaid: 0,
    aquilaFlashingStatus: 0,
    welfarePayable: 0,
    welfarePaid: 0,
    welfareStatus: 0,
    otherExpensesPaid: 0,
    purpose: "",
    otherExpensesStatus: 0,
  });

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
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          class="btn btn-active"
        >
          Prev
        </button>
        <button
          class="btn btn-active"
          onClick={() => {
            setForm((currForm) => currForm + 1);
          }}
        >
          {form === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TripExpense;
