// import { PlusCircleIcon } from "@heroicons/react/solid";
// import React, { useState } from "react";
// import SecondaryWaybill from "./SecondaryWaybill";

// function CustomerListDetails({ formData, setFormData }) {
//   const [formNumber, setFormNumber] = useState(0);
//   const handleNewWayBillFrm = (formNumber) => {
//     let newWbFrm = {
//       waybillNumber: "",
//       documentUrl: "",
//       distanceTravelled: null,
//       customerId: "",
//       // deliveryZone: "",
//       quantityLoaded: null,
//       quantityDelivered: null,
//       // estimatedProductShortage: 0,
//       shortageClaim: null,
//     };
//     setFormData((prev) => {
//       if (!Array.isArray(prev.secondaryWayBills)) {
//         prev.secondaryWayBills = [];
//       }
//       prev.secondaryWayBills[formNumber] = newWbFrm;
//       return prev;
//     });
//     setFormNumber(formNumber);
//   };
//   return (
//     <div className="space-y-4 pr-10">
//       <div className="flex justify-between space-y-2">
//         <h4 className="text-xl text-primary font-medium">Customer Split</h4>
//         <div className="float-right flex items-center gap-3 text-primary">
//           <PlusCircleIcon className="h-4" />
//           <button
//             onClick={(e) => handleNewWayBillFrm(formNumber + 1)}
//             className="font-medium"
//           >
//             Add Waybill
//           </button>
//         </div>
//       </div>
//       <div className="flex gap-10">
//         {[...Array(formNumber + 1)].map((item, i) => (
//           <SecondaryWaybill
//             formData={formData}
//             setFormData={setFormData}
//             key={i}
//             index={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CustomerListDetails;

import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import SecondaryWaybill from "./SecondaryWaybill";

function CustomerListDetails({ formData, setFormData }) {
  const [waybills, setWaybills] = useState(() => {
    const localWaybills = JSON.parse(localStorage.getItem("waybills"));
    return localWaybills ? localWaybills : [];
  });

  const handleNewWayBillFrm = () => {
    const newWbFrm = {
      waybillNumber: "",
      documentUrl: "",
      distanceTravelled: null,
      customerId: "",
      quantityLoaded: null,
      quantityDelivered: null,
      shortageClaim: null,
    };

    setWaybills((prevWaybills) => [...prevWaybills, newWbFrm]);
  };

  useEffect(() => {
    localStorage.setItem("waybills", JSON.stringify(waybills));
  }, [waybills]);

  return (
    <div className="space-y-4 pr-10">
      <div className="flex justify-between space-y-2">
        <h4 className="text-xl text-primary font-medium">Customer Split</h4>
        <div className="float-right flex items-center gap-3 text-primary">
          <PlusCircleIcon className="h-4" />
          <button onClick={handleNewWayBillFrm} className="font-medium">
            Add Waybill
          </button>
        </div>
      </div>
      <div className="flex gap-10">
        {waybills.length === 0 && ( // Display one instance initially
          <SecondaryWaybill
            formData={formData}
            setFormData={setFormData}
            index={0}
          />
        )}
        {waybills.map((waybill, index) => (
          <SecondaryWaybill
            formData={formData}
            setFormData={setFormData}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerListDetails;
