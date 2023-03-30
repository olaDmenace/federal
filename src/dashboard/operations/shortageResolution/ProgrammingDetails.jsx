import React, { useState } from "react";
import CustomerWayBills from "./CustomerWayBills.jsx";

const ProgrammingDetails = ({ trucks, formData, setFormData }) => {
  const handlewayBillIdChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      resolutions: [
        {
          ...formData.resolutions[0],
          wayBillId: value,
        },
      ],
    });
  };
  return (
    <div>
      <form className="grid gap-5 text-primary my-5">
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
              onChange={handlewayBillIdChange}
            >
              <option value="">Select Truck Number</option>
              {trucks.map((item) =>
                item.wayBills.map((bills) => (
                  <option value={bills.wayBillId} key={item.wayBillId}>
                    {bills.wayBillNumber}
                  </option>
                ))
              )}
            </select>
          </label>
          <label htmlFor="">
            Truck Number
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
              <option value="">Select Truck Number</option>
              {trucks.map((item) => (
                <option
                  value={item.journeyManagementId}
                  key={item.journeyManagementId}
                >
                  {item.truckProgramming.truck.truckNumber}
                </option>
              ))}
            </select>
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
          />
        )}
      </form>
    </div>
  );
};

export default ProgrammingDetails;
