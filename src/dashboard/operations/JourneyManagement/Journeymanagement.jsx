import { XCircleIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import PageTitle from "../../../utils/PageTitle";
import PopUp from "../../../utils/PopUp";
import FormTitle from "../../FormTitle";
import TruckProgramming from "../TruckProgramming";
import CustomerDetails from "./CustomerDetails";
import CustomerListDetails from "./CustomerListDetails";
import ProductDetails from "./ProductDetails";
import ReportedShortage from "./ReportedShortage";

// import TripDetails from './TripDetails'

function Journeymanagement() {
  PageTitle("Axle & Cartage - Journey Management");
  const [form, setForm] = useState(0);

  const [formData, setFormData] = useState({
    truckProgrammingId: "",
    // estimatedProductShortage: 0,
    primaryWayBill: {
      waybillNumber: "",
      documentUrl: "",
      distanceTravelled: 0,
      quantityDelivered: "",
      quantityLoaded: "",
      shortageClaim: "",
    },
    secondaryWayBills: [
      {
        waybillNumber: "",
        documentUrl: "",
        distanceTravelled: "",
        customerId: "",
        // deliveryZone: "",
        quantityLoaded: "",
        quantityDelivered: "",
        // estimatedProductShortage: 0,
        shortageClaim: "",
      },
    ],
    status: 0,
  });

  const activeForm = () => {
    if (form === 0) {
      return <TruckProgramming formData={formData} setFormData={setFormData} />;
    } else if (form === 1) {
      return <ProductDetails formData={formData} setFormData={setFormData} />;
    } else if (form === 2) {
      return <CustomerDetails formData={formData} setFormData={setFormData} />;
    } else if (form === 3) {
      return (
        <CustomerListDetails formData={formData} setFormData={setFormData} />
      );
    } else {
      return <ReportedShortage formData={formData} setFormData={setFormData} />;
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    setIsLoading(!isLoading);
    endpoint
      .post("/truck/journey-management", formData)
      .then((res) => {
        setShow(true);
        // console.log(res.response.status)
        // setIsLoading(!isLoading)
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
        // if (res.response.status === 200) {
        // }
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: err.response.data.message,
        });
        // setIsLoading(!isLoading)
      });
  };

  function closePop(e) {
    setShow(false);
    setIsLoading(!isLoading);
  }

  return (
    <div className="space-y-2 grid">
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
      <FormTitle Title={"Journey Management"} />
      <hr />
      <ul className="steps">
        <li className="step step-primary"></li>
        <li className={form >= 1 ? "step step-primary" : "step"}></li>
        <li className={form >= 2 ? "step step-primary" : "step"}></li>
        <li className={form >= 3 ? "step step-primary" : "step"}></li>
        <li className={form >= 4 ? "step step-primary" : "step"}></li>
      </ul>
      <div className="grid gap-10 pb-10">
        <div>{activeForm()}</div>
      </div>
      {!isLoading && (
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
              form !== 4 ? setForm((currForm) => currForm + 1) : handleSubmit();
            }}
          >
            {form === 4 ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default Journeymanagement;
