import React from "react";

const WaybillItem = ({ secondaryWaybills, formData, onStatusChange }) => {
  const handleStatusChange = (waybillId, e) => {
    const selectedStatus = e.target.value;
    // Call the parent component's onChange function to update the status
    onStatusChange(waybillId, selectedStatus);
  };

  // Set default props for secondaryWaybills
  WaybillItem.defaultProps = {
    secondaryWaybills: [],
  };

  return (
    <div className="grid gap-2 lg:w-60">
      <p>Secondary Waybills</p>
      {secondaryWaybills.map((waybill) => (
        <div key={waybill.wayBillId} className="grid gap-5">
          <div className="border border-primary w-full h-12 px-4 rounded-lg grid items-center">
            <p>{waybill.wayBillNumber}</p>
          </div>
          {/* Display other secondary waybill information here */}
          {(() => {
            // Create a block scope to capture waybillId
            const waybillId = waybill.wayBillId;

            return (
              // <select
              //   className="select select-primary w-full"
              //   name="status"
              //   id="status"
              //   value={waybill.status || ""}
              //   onChange={(e) => handleStatusChange(waybillId, e)}
              // >
              //   <option value="">Select Status</option>
              //   <option value="1">Approved</option>
              //   <option value="2">Declined</option>
              // </select>
              <select
                className="select select-primary w-full"
                name="status"
                id="status"
                value={
                  formData.wayBills.find(
                    (waybill) => waybill.wayBillId === waybillId
                  )?.status || ""
                }
                onChange={(e) => handleStatusChange(waybillId, e)}
              >
                <option value="">Select Status</option>
                <option value="1">Approved</option>
                <option value="2">Declined</option>
              </select>
            );
          })()}
        </div>
      ))}
    </div>
  );
};

export default WaybillItem;
