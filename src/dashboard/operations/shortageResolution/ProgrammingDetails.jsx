import React, { useState } from "react";
import CustomerWayBills from "./CustomerWayBills.jsx";
import { useLocation } from "react-router-dom";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import LoadingSpinner from "../../../utils/LoadingSpinner.jsx";
import endpoint from "../../../utils/endpoints/endpoint.jsx";
import PopUp from "../../../utils/PopUp.js";
import ProductDetails from "./ProductDetails.jsx";
import TruckResolution from "./TruckResolution.jsx";

const ProgrammingDetails = ({ trucks, formData, setFormData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });
  console.log(formData, "formdata");
  const handleSubmit = () => {
    setIsLoading(!isLoading);
    endpoint
      .put("/truck/journey-management/shortages", formData)
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

  const location = useLocation();

  return (
    <div>
      <form className="grid gap-5 text-primary my-5">
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
        <h4 className="text-xl text-primary font-medium">
          Programming Details
        </h4>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Trip ID
            <select
              type="text"
              className="w-full disabled: select select-primary"
              name=""
              id=""
              value={formData.journeyManagementId}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  journeyManagementId: e.target.value,
                });
              }}
            >
              <option value="">Select Trip Id</option>
              {trucks.map((item) => (
                <option
                  value={item.journeyManagementId}
                  key={item.journeyManagementId}
                >
                  {item.truckProgramming.tripReference}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="">
            Truck Number
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.truckId}>
                    {item.truckProgramming.truck.truckNumber}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Truck Capacity
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.truckId}>
                    {item.truckProgramming.truck.truckCapacity}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Brand
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.truckId}>
                    {item.truckProgramming.truck.brand.model}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Loading Location
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.loadingDepotId}>
                    {item.truckProgramming.loadingDepot}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Returning Destination
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.returningDepotId}>
                    {item.truckProgramming.returningDepot}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Journey Officer
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.journeyOfficerId}>
                    {item.truckProgramming.truck.journeyOfficer}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Logistics Cordinator
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.logisticsCoordinatorId}>
                    {item.truckProgramming.truck.logisticsCoordinator}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Delivery Officer
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.truck.deliveryOfficerId}>
                    {item.truckProgramming.truck.deliveryOfficer}
                  </p>
                ))}
            </div>
          </label>
        </fieldset>
        <h4 className="text-xl text-primary font-medium">
          Trip/Customer Details
        </h4>

        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Customer Type
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.customer.type}>
                    {item.truckProgramming.customer.customerType}
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="">
            Primary Customer Name
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {trucks
                .filter(
                  (i) => i.journeyManagementId === formData.journeyManagementId
                )
                .map((item) => (
                  <p key={item.truckProgramming.customer.customerId}>
                    {item.truckProgramming.customer.customerName}
                  </p>
                ))}
            </div>
          </label>
        </fieldset>

        {trucks.filter(
          (i) => i.journeyManagementId === formData.journeyManagementId
        ) && (
          <CustomerWayBills
            trucks={trucks}
            journeyManagementId={formData.journeyManagementId}
            formData={formData}
          />
        )}
        <ProductDetails
          trucks={trucks}
          setFormData={setFormData}
          formData={formData}
        />

        {location.pathname === "/dashboard/ShortageResolution" ? (
          <div className="mx-auto">
            {" "}
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <button
                class="btn btn-primary mx-auto"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default ProgrammingDetails;
