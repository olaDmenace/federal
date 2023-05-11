import React, { useState } from "react";
import LiquidHeight from "./LiquidHeight";
import Meter from "./Meter";
import UllageParameter from "./UllageParameter";

function ProductDetails({ trucks, formData, setFormData }) {
  // const handleCalibrationTypeChange = (event) => {
  //   const newCalibrationType = parseInt(event.target.value);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     resolutions: [
  //       {
  //         ...prevFormData.resolutions[0],
  //         calibration: {
  //           ...prevFormData.resolutions[0].calibration,
  //           calibrationType: newCalibrationType,
  //         },
  //       },
  //     ],
  //   }));
  // };
  // const options = [
  //   { value: 0, parameterId: 1, parameter: "Ullage" },
  //   { value: 1, parameterId: 2, parameter: "Liquid Height" },
  //   { value: 2, parameterId: 3, parameter: "Meter" },
  // ];

  // const calibrationType = () => {
  //   if (formData.resolutions[0].calibration.calibrationType === 0) {
  //     return <UllageParameter formData={formData} setFormData={setFormData} />;
  //   } else if (formData.resolutions[0].calibration.calibrationType === 1) {
  //     return <LiquidHeight formData={formData} setFormData={setFormData} />;
  //   } else if (formData.resolutions[0].calibration.calibrationType === 2) {
  //     return <Meter formData={formData} setFormData={setFormData} />;
  //   } else {
  //     return "";
  //   }
  // };
  // const [disableFields, setDisableFields] = useState({
  //   company: false,
  //   do: false,
  //   customer: false,
  // });

  // const handleResponsiblePartyChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   setFormData({
  //     ...formData,
  //     resolutions: [
  //       {
  //         ...formData.resolutions[0],
  //         source: value,
  //       },
  //     ],
  //   });
  // };

  // return (
  //   <div>
  //     <form className="grid gap-5 text-primary my-5">
  //       <h4 className="text-xl text-primary font-medium">Product Details</h4>
  //       <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
  //         <label htmlFor="">
  //           Product Loaded
  //           <br />
  //           <div className="border border-primary h-12 rounded-lg grid items-center px-4">
  //             {trucks
  //               .filter(
  //                 (i) => i.journeyManagementId === formData.journeyManagementId
  //               )
  //               .map((item) => (
  //                 <p key={item.truckProgramming.product.productId}>
  //                   {item.truckProgramming.product.productType}
  //                 </p>
  //               ))}
  //           </div>
  //         </label>

  //         <label htmlFor="">
  //           Quantity Loaded
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             min={0}
  //             type="number"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Quantity Delivered
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Estimated Product Shortage (Entire Trip)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           ACL Confirmed Shortage (Entire Trip)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Customer Shortage Claim (Entire Trip)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Total Agreed Shortage (Multiple Customers)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Agreed Shortage (Direct Customer)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             value={formData.resolutions[0].agreedShortage}
  //             type="number"
  //             min={0}
  //             name=""
  //             id=""
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 resolutions: [
  //                   {
  //                     ...formData.resolutions[0],
  //                     agreedShortage: +e.target.value,
  //                   },
  //                 ],
  //               })
  //             }
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Product Price
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             value={formData.productPrice}
  //             type="number"
  //             min={0}
  //             name=""
  //             id=""
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 productPrice: +e.target.value,
  //               })
  //             }
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Agreed shortage Value (Multiple Customers)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //         <label htmlFor="">
  //           Agreed Shortage Value (Direct Customer)
  //           <input
  //             class="input input-primary w-full"
  //             placeholder=""
  //             type="text"
  //             name=""
  //             id=""
  //           />
  //         </label>
  //       </fieldset>
  //       <h4 className="text-xl text-primary font-medium">
  //         ACL Shortage Resolution
  //       </h4>
  //       <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
  //         <label htmlFor="">
  //           Resolution Parameter
  //           <select
  //             className="w-full select select-primary"
  //             name=""
  //             id=""
  //             value={formData.resolutions[0].calibration.calibrationType}
  //             onChange={handleCalibrationTypeChange}
  //           >
  //             <option>select Parament</option>
  //             {options.map((opt) => (
  //               <option key={opt.parameterId} value={opt.value}>
  //                 {opt.parameter}
  //               </option>
  //             ))}
  //           </select>
  //         </label>

  //         <label htmlFor="">
  //           Shortage Reason
  //           <select
  //             className="w-full select select-primary"
  //             value={formData.resolutions[0].reason}
  //             name=""
  //             id=""
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 resolutions: [
  //                   {
  //                     ...formData.resolutions[0],
  //                     reason: parseInt(e.target.value),
  //                   },
  //                 ],
  //               })
  //             }
  //           >
  //             <option>select Shortage Reason</option>
  //             <option value={0}>Calibration Chart</option>
  //             <option value={1}> Theft</option>
  //             <option value={2}>Ullage Ground</option>
  //             <option value={3}>Short Loading</option>
  //             <option value={4}> Other</option>
  //           </select>
  //         </label>
  //         <label htmlFor="">
  //           Responsible Party
  //           <select
  //             value={formData.resolutions[0].source}
  //             className="w-full select select-primary"
  //             name=""
  //             id=""
  //             onChange={handleResponsiblePartyChange}
  //           >
  //             <option>select Responsible Party</option>
  //             <option value={0}>Company</option>
  //             <option value={1}>DO</option>
  //             <option value={2}>Customer</option>
  //           </select>
  //         </label>

  //         <label htmlFor="">
  //           Amount Charged to Responsible Party
  //           <input
  //             className="input input-primary w-full"
  //             type="number"
  //             min={0}
  //             name=""
  //             value={formData.resolutions[0].sourceCharge}
  //             id=""
  //             disabled={disableFields.company}
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 resolutions: [
  //                   {
  //                     ...formData.resolutions[0],
  //                     sourceCharge: parseInt(e.target.value),
  //                   },
  //                 ],
  //               })
  //             }
  //           />
  //         </label>
  //       </fieldset>
  //       {calibrationType()}
  //       <label htmlFor="">
  //         Remarks
  //         <textarea
  //           className="textarea textarea-primary w-full"
  //           value={formData.resolutions[0].remarks}
  //           name=""
  //           id=""
  //           type="text"
  //           onChange={(e) =>
  //             setFormData({
  //               ...formData,
  //               resolutions: [
  //                 {
  //                   ...formData.resolutions[0],
  //                   remarks: e.target.value,
  //                 },
  //               ],
  //             })
  //           }
  //           rows="5"
  //         ></textarea>
  //       </label>

  //       <fieldset className="grid gap-3 md:grid-cols-2 items-end">
  //         <label htmlFor="">
  //           Resolution Status
  //           <select
  //             className="w-full select select-primary"
  //             name=""
  //             id=""
  //             value={formData.resolutions[0].status}
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 resolutions: [
  //                   {
  //                     ...formData.resolutions[0],
  //                     status: parseInt(e.target.value),
  //                   },
  //                 ],
  //               })
  //             }
  //           >
  //             <option value="">Select Resolution Status</option>
  //             <option value={0}>Open</option>
  //             <option value={1}>Closed</option>
  //           </select>
  //         </label>
  //         <label htmlFor="">
  //           Shortage Refund Status
  //           <select
  //             className="w-full select select-primary"
  //             name=""
  //             id=""
  //             value={formData.resolutions[0].refundStatus}
  //             onChange={(e) =>
  //               setFormData({
  //                 ...formData,
  //                 resolutions: [
  //                   {
  //                     ...formData.resolutions[0],
  //                     refundStatus: parseInt(e.target.value),
  //                   },
  //                 ],
  //               })
  //             }
  //           >
  //             <option value="">select Shortage Refund Status</option>
  //             <option value={0}>Pending</option>
  //             <option value={1}>Completed</option>
  //           </select>
  //         </label>
  //       </fieldset>
  //     </form>
  //   </div>
  // );
}

export default ProductDetails;
