import React, { useEffect, useState } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import WaybillItem from "./WaybillItem";
import endpoint from "../../../utils/endpoints/endpoint";
import PopUp from "../../../utils/PopUp";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/outline";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const WaybillsManagement = () => {
  PageTitle("Axle & Cartage - Waybills Management");

  const [truck, setTruck] = useState([]);
  const [selectedJourneyManagementId, setSelectedJourneyManagementId] =
    useState("");
  const [formData, setFormData] = useState({
    journeyManagementId: "",
    wayBills: [],
  });

  useEffect(() => {
    endpoint
      .get("/truck/journey-management")
      .then((res) => {
        console.log(res.data.data);
        setTruck(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Function to set formData based on selectedJourneyManagementId
    const setFormDataFromJourneyId = () => {
      // Find the selected journey management
      const selectedJourney = truck.find(
        (item) => item.journeyManagementId === selectedJourneyManagementId
      );

      if (selectedJourney) {
        // Find the primary waybill in the selected journey
        const primaryWaybill = selectedTruck?.wayBills.find(
          (waybill) => waybill.isPrimaryWayBill === true
        );

        // Set formData based on selected journey and primary waybill
        const newFormData = {
          journeyManagementId: selectedJourneyManagementId,
          wayBills: [
            {
              wayBillId: primaryWaybill ? primaryWaybill.wayBillId : "",
              status: primaryWaybill ? primaryWaybill.status : 0,
            },
            ...selectedJourney.wayBills
              .filter((waybill) => waybill.isPrimaryWayBill === false)
              .map((waybill) => ({
                wayBillId: waybill.wayBillId,
                status: waybill.status,
              })),
          ],
        };

        setFormData(newFormData);
      }
    };

    // Check if the selectedJourneyManagementId has changed
    if (selectedJourneyManagementId === formData.journeyManagementId) {
      setFormDataFromJourneyId();
    }
  }, [selectedJourneyManagementId, truck]);

  const handleJourneyManagementChange = (e) => {
    setFormData({ ...formData, journeyManagementId: e.target.value });
    setSelectedJourneyManagementId(e.target.value);
  };

  // Find primary and secondary waybills for the selected journey management
  const selectedTruck = truck.find(
    (item) => item.journeyManagementId === selectedJourneyManagementId
  );

  // Filter primary waybill
  const primaryWaybill = selectedTruck?.wayBills.find(
    (waybill) => waybill.isPrimaryWayBill === true
  );

  // Filter secondary waybills
  const secondaryWaybills = selectedTruck?.wayBills.filter(
    (waybill) => waybill !== primaryWaybill
  );

  const handleSubmit = () => {
    console.log(formData);
    setIsLoading(!isLoading);
    endpoint
      .put("/truck/journey-management/waybill", formData)
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
  };

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

  return (
    <div className="text-primary grid gap-5 bg-white p-5 rounded-lg overflow-x-scroll">
      <div>
        <FormTitle Title={"Waybills Management Form"} />
        <hr />
      </div>
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
      <form className="grid gap-5 pt-5" action="">
        <fieldset className="grid lg:grid-flow-col lg:grid-cols-3 gap-5">
          <label htmlFor="trip_Id">
            Trip ID
            <select
              className="select select-primary w-full"
              value={selectedJourneyManagementId}
              onChange={handleJourneyManagementChange}
            >
              <option value="">Select Trip ID</option>
              {truck.map((item) => (
                <option
                  key={item.journeyManagementId}
                  value={item.journeyManagementId}
                >
                  {item.truckProgramming.tripReference}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="product">
            Product Loaded
            <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
              {selectedTruck?.truckProgramming.product.productName || ""}
            </div>
          </label>
          <label htmlFor="quantity">
            Quantity Loaded
            <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
              {primaryWaybill?.quantityLoaded || ""}
            </div>
          </label>
        </fieldset>
        <fieldset className="grid lg:grid-flow-col lg:grid-cols-2 gap-5">
          <label htmlFor="trip_Id">
            Quantity Delivered
            <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
              {primaryWaybill?.quantityDelivered || ""}
            </div>
          </label>
          <label htmlFor="product">
            Primary/Direct Waybill Number
            <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
              {primaryWaybill?.wayBillNumber || ""}
            </div>
          </label>
        </fieldset>
        <label htmlFor="status">
          Primary/Direct Waybill Status
          <br />
          <select
            className="select select-primary w-full"
            name=""
            id=""
            value={formData.wayBills[0]?.status || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                wayBills: [
                  {
                    ...formData.wayBills[0],
                    status: +e.target.value,
                  },
                  ...formData.wayBills.slice(1),
                ],
              })
            }
          >
            <option value="">Select Status</option>
            <option value="1">Approved</option>
            <option value="2">Declined</option>
          </select>
        </label>
        {/* Secondary Waybills */}
        {secondaryWaybills && secondaryWaybills.length > 0 && (
          <WaybillItem
            secondaryWaybills={secondaryWaybills}
            formData={formData}
            onStatusChange={(waybillId, selectedStatus) => {
              // Update your formData with the selected status
              setFormData({
                ...formData,
                wayBills: formData.wayBills.map((waybill) =>
                  waybill.wayBillId === waybillId
                    ? { ...waybill, status: +selectedStatus }
                    : waybill
                ),
              });
            }}
          />
        )}
      </form>
      {!isLoading && (
        <button className="btn btn-primary mx-auto" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default WaybillsManagement;
