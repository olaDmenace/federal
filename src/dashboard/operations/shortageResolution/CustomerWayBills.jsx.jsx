import React, { useState } from "react";
import useFetch from "../../../useFetch";
import TruckResolution from "./TruckResolution";

const CustomerWayBills = ({ trucks, journeyManagementId }) => {
  const { handleResolveShortageClaim } = useFetch();
  const [isTruckResolutionOpen, setIsTruckResolutionOpen] = useState(false);
  const [selectedWayBillId, setSelectedWayBillId] = useState(null);

  const handleOpenTruckResolution = (wayBillId) => {
    setSelectedWayBillId(wayBillId);
    setIsTruckResolutionOpen(true);
  };

  const handleCloseTruckResolution = () => {
    setIsTruckResolutionOpen(false);
  };

  return (
    <div>
      <form className="grid gap-5 text-primary my-5">
        {trucks
          .filter((i) => i.journeyManagementId === journeyManagementId)
          .map((item) =>
            item.wayBills
              .filter((wb) => wb.shortageClaim > 0) // Filter the waybills with shortage claims > 0
              .map((items, index) => (
                <div key={index}>
                  <h4 className="text-xl text-primary font-medium">{`Customer ${
                    index + 1
                  }`}</h4>
                  <br />
                  <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
                    <label htmlFor="">
                      Secondary Customer Name
                      <div className="border border-primary h-12 rounded-lg grid items-center px-4">
                        <p>{items.customer.customerName}</p>
                      </div>
                    </label>
                    <label htmlFor="">
                      Secondary Customer Address
                      <input
                        class="input input-primary w-full"
                        placeholder=""
                        type="text"
                        name=""
                        id=""
                      />
                    </label>
                    <label htmlFor="">
                      Quantity Loaded
                      <div className="border border-primary h-12 rounded-lg grid items-center px-4">
                        <p>{items.quantityLoaded}</p>
                      </div>
                    </label>
                    <label htmlFor="">
                      Quantity Delivered
                      <div className="border border-primary h-12 rounded-lg grid items-center px-4">
                        <p>{items.quantityDelivered}</p>
                      </div>
                    </label>
                    <label htmlFor="">
                      Estimated Product Shortage
                      <div className="border border-primary h-12 rounded-lg grid items-center px-4">
                        <p>{items.quantityLoaded - items.quantityDelivered}</p>
                      </div>
                    </label>
                    <label htmlFor="">
                      Customer Shortage Claim
                      <div className="border border-primary h-12 rounded-lg grid items-center px-4">
                        <p>{items.shortageClaim}</p>
                      </div>
                    </label>
                  </fieldset>
                  <div class="btn-group mx-auto pt-5">
                    <div
                      className="btn btn-primary mx-auto "
                      onClick={() => handleOpenTruckResolution(items.wayBillId)}
                    >
                      Resolve Shortage Claim
                    </div>

                    <TruckResolution
                      id={items.wayBillId}
                      onClose={handleCloseTruckResolution}
                      isOpen={isTruckResolutionOpen}
                    />
                  </div>
                </div>
              ))
          )}
      </form>
    </div>
  );
};

export default CustomerWayBills;
