import React, { useState } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import FuelReconciliation from "./FuelReconciliation";
import FuelRequest from "./FuelRequest";
import TripExpenses from "./TripExpenses";
import endpoint from "../../../utils/endpoints/endpoint";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/outline";
import PopUp from "../../../utils/PopUp";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";

const TripExpense = () => {
  PageTitle("Axle & Cartage - Trip Expense Request Form");
  const [form, setForm] = useState(1);

  const activeForm = () => {
    if (form === 1) {
      return (
        <FuelRequest
          formData={formData}
          setFormData={setFormData}
          location={location}
        />
      );
    } else if (form === 2) {
      return (
        <FuelReconciliation formData={formData} setFormData={setFormData} />
      );
    } else {
      return <TripExpenses formData={formData} setFormData={setFormData} />;
    }
  };

  const location = useLocation();
  console.log(location)
  const id = location?.state;

  const initialData = id
    ? {
        journeyManagementId: id.truckProgrammingId,
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
      }
    : {
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
      };

  const [formData, setFormData] = useState(initialData);

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  function closePop(e) {
    setShow(false);
    setIsLoading(!isLoading);
  }

  const submithandler = () => {
    if (form === 3) {
      console.log(formData)
      setIsLoading(!isLoading);
      endpoint
        .post("/truck/journey-management/expenses/trip", formData)
        .then((res) => {
          setShow(!show);
          setReply({
            icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
            message: res.data.message,
          });
          console.log(res);
        })
        .catch((err) => {
          setShow(!show);
          setReply({
            icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
            message: err.response.data.message,
          });
          console.log(err);
        });
    } else {
      setForm((currForm) => currForm + 1);
    }
  };

  return (
    <div className="space-y-2 grid bg-white p-5 rounded-lg">
      <FormTitle Title={"Trip Expense Request Form"} />
      <hr className="pb-5" />
      {show && (
        <PopUp>
          {reply.icon}
          <p className="mx-auto text-center text-primary bg-transparent">
            {reply.message}
          </p>
          <button className="btn btn-primary" onClick={(e) => closePop()}>
            Confirm
          </button>
        </PopUp>
      )}
      <ul className="steps">
        <li className="step step-primary"></li>
        <li className={form >= 2 ? "step step-primary" : "step"}></li>
        <li className={form >= 3 ? "step step-primary" : "step"}></li>
      </ul>
      {activeForm()}
      {!isLoading && (
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
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default TripExpense;

