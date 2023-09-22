import React, { useEffect, useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import states from "./nigeria-states.json";
import * as xlsx from "xlsx";
import { ThumbUpIcon, XCircleIcon } from "@heroicons/react/solid";
import PopUp from "../../../utils/PopUp";
import CloudinaryUpload from "../../../utils/CloudinaryUpload";
// import ImageUploader from "../../../utils/ImageUploader";
// import { readFile } from "xlsx";

function FormA1({ formData, setFormData }) {
  // Fetch list of Users (JO, DO & LC)
  const [delivery, setDelivery] = useState([]);
  const [journey, setJourney] = useState([]);
  const [logistics, setLogistics] = useState([]);
  useEffect(() => {
    // SearchTerm = delivery & UserType=1 & PageNumber=1 & PageSize=1
    endpoint
      .get("/user?UserType=1")
      .then((res) => {
        // console.log(res.data.data)
        setDelivery(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    endpoint
      .get("user?UserType=2")
      .then((res) => {
        // console.log(res.data.data)
        setJourney(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    endpoint
      .get("user?UserType=3")
      .then((res) => {
        console.log(res);
        setLogistics(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch list of owners
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    endpoint
      .get("/variable/owners")
      .then((res) => {
        console.log(res.data.data);
        setOwners(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [truckType, setTruckType] = useState("");
  const [upload, setUpload] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUpload(file);
    console.log(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

      // Remove the first row from the jsonData
      jsonData.shift();

      console.log(jsonData);

      // Process the spreadsheet data
      jsonData.forEach((row) => {
        const [
          truckNumber,
          fleetNumber,
          licensePlateNumber,
          tractorChasis,
          engineNumber,
          identificationNumber,
          manufactureDate,
          brandModel,
          brandManufacturer,
          registrationState,
          pictureUrl,
          status,
          logisticsCoordinatorId,
          journeyOfficerId,
          deliveryOfficerId,
          ownership,
          ownerId,
          additionalDetails,
          ...truckDocumentValues
        ] = row;

        // Function to convert date strings to ISO date format
        function convertToISODate(dateString) {
          if (dateString) {
            const dateObject = new Date(dateString);

            // Check if the dateObject is valid
            if (!isNaN(dateObject.getTime())) {
              return dateObject.toISOString();
            }
          }

          return null; // Return null for empty or invalid date strings
        }

        // Convert date strings to ISO date format
        const convertedManufactureDate = convertToISODate(manufactureDate);

        // Convert date strings to ISO date format for truckDocument values
        const truckDocumentsArray = truckDocumentValues.map((dateString) =>
          convertToISODate(dateString)
        );

        // Check if any value is non-empty in the entire row
        const hasAnyValue = row.some((value) => value !== "");

        // Convert engineNumber to String
        const convertEngineNumber = engineNumber.toString();

        if (hasAnyValue) {
          // FormA2 - truckDocuments
          const truckDocumentsArray = [];
          for (let i = 0; i <= 10; i++) {
            const startIndex = i * 4;
            const type = i; // Use i as the value of type to increase from 0 to 10
            const referenceNumber = truckDocumentValues[startIndex + 1] || "";
            const dateIssued = truckDocumentValues[startIndex + 2] || "";
            const expiryDate = truckDocumentValues[startIndex + 3] || "";

            truckDocumentsArray.push({
              type,
              referenceNumber,
              dateIssued: convertToISODate(dateIssued) || null,
              expiryDate: convertToISODate(expiryDate) || null,
            });
          }

          // Extract the remaining fields
          const [
            lastPreventiveMaintenance,
            nextPreventiveMaintenance,
            inServiceDate,
            inServiceOdometer,
            estimatedServiceLive,
            estimatedResaleValue,
            outOfServiceDate,
            outOfServiceOdometer,
            vendorName,
            purchaseDate,
            purchaseValue,
            odometer,
            notes,
            warrantyExpiryDate,
            warrantyMaxOdometer,
            driveType,
            brakeSystem,
            rearAxle,
            fuelType,
            fisrtTankCapacity,
            secondTankCapacity,
            tankCapacityMetric,
            oilCapacity,
            oilCapacityMetric,
            maintenanceVendor,
          ] = row.slice(62); // Adjust the index based on your data structure

          const convertedOutOfServiceDate = convertToISODate(outOfServiceDate);
          const convertedWarrantyExpiryDate =
            convertToISODate(warrantyExpiryDate);
          const convertedInServiceDate = convertToISODate(inServiceDate);
          const convertedPurchaseDate = convertToISODate(purchaseDate);

          // Make API call with the mapped data
          const payload = {
            // FormA1
            status: 0,
            truckNumber: truckNumber || null,
            fleetNumber: fleetNumber || "",
            licensePlateNumber: licensePlateNumber || null,
            tractorChasis: tractorChasis || null,
            engineNumber: convertEngineNumber || null,
            identificationNumber: identificationNumber || null,
            manufactureDate: convertedManufactureDate || null,
            brand: {
              model: brandModel || null,
              manufacturer: brandManufacturer || null,
            },
            registrationState: registrationState || null,
            pictureUrl: pictureUrl || "",
            logisticsCoordinatorId: logisticsCoordinatorId.toString() || null,
            journeyOfficerId: journeyOfficerId.toString() || null,
            deliveryOfficerId: deliveryOfficerId.toString() || null,
            ownership: ownership || null,
            ownerId: ownerId.toString() || null,
            additionalDetails: additionalDetails || null,

            // FormA2 - truckDocuments
            truckDocuments: truckDocumentsArray || null,

            // FormA3 - maintenanceInfo and purchaseInfo
            maintenanceInfo: {
              lastPreventiveMaintenance:
                convertToISODate(lastPreventiveMaintenance) || null,
              nextPreventiveMaintenance:
                convertToISODate(nextPreventiveMaintenance) || null,
              inServiceDate: convertedInServiceDate || null,
              inServiceOdometer: inServiceOdometer || null,
              estimatedServiceLive: estimatedServiceLive || null,
              estimatedResaleValue: estimatedResaleValue || null,
              outOfServiceDate: convertedOutOfServiceDate || null,
              outOfServiceOdometer: outOfServiceOdometer || null,
            },
            purchaseInfo: null,
            // purchaseInfo: {
            //   vendorName: vendorName !== undefined ? vendorName : null,
            //   purchaseDate:
            //     purchaseDate !== undefined ? convertedPurchaseDate : null,
            //   purchaseValue: purchaseValue !== undefined ? purchaseValue : null,
            //   odometer: odometer !== undefined ? odometer : null,
            //   notes: notes !== undefined ? notes : null,
            //   warrantyExpiryDate:
            //     warrantyExpiryDate !== undefined
            //       ? convertedWarrantyExpiryDate
            //       : null,
            //   warrantyMaxOdometer:
            //     warrantyMaxOdometer !== undefined ? warrantyMaxOdometer : null,
            // },

            // FormA4 - specification
            specification: null,
            // specification: {
            //   driveType: driveType || null,
            //   brakeSystem: brakeSystem || null,
            //   rearAxle: rearAxle || null,
            //   fuelType: fuelType || null,
            //   fisrtTankCapacity: fisrtTankCapacity || null,
            //   secondTankCapacity: secondTankCapacity || null,
            //   tankCapacityMetric: tankCapacityMetric || null,
            //   oilCapacity: oilCapacity || null,
            //   oilCapacityMetric: oilCapacityMetric || null,
            //   maintenanceVendor: maintenanceVendor || null,
            // },
          };

          console.log(payload);

          // Make the API call using `payload`

          endpoint
            .post("/truck/file", payload)
            .then((res) => {
              setShow(true);
              console.log(res);
              setShow(!show);
              setReply({
                icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
                message: res.data.message,
              });
            })
            .catch((err) => {
              setShow(!show);
              setReply({
                icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
                message: `${err.response.data.message}`,
              });
              console.log(err);
            });
        }
      });
    };
    reader.readAsArrayBuffer(file);
  };

  function closePop(e) {
    setShow(false);
    setLoading(!loading);
  }

  return (
    <div className="py-5 text-primary space-y-3">
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
      <h4 className="text-lg font-semibold">Form A - Tractor</h4>
      <h6 className="font-semibold text-lg">Identification</h6>
      <form action="" className="grid text-primary gap-5 w-full">
        <label htmlFor="bulkUpload">
          <p>Bulk Upload</p>
          <input
            onChange={handleUpload}
            type="file"
            accept=".xls, .xlsx"
            name="bulkUpload"
            id="bulkUpload"
          />
        </label>
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label className="text-primary">
            Truck Number
            <input
              value={formData.truckNumber}
              onChange={(e) =>
                setFormData({ ...formData, truckNumber: e.target.value })
              }
              class="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label className="text-primary">
            Fleet No. - Tractor
            <input
              value={formData.fleetNumber}
              onChange={(e) =>
                setFormData({ ...formData, fleetNumber: e.target.value })
              }
              className="input input-primary w-full"
              type="text"
            />
            {/* <select class='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Service Type</option>
                        </select> */}
          </label>
          <label>
            Tractor Chasis
            <input
              value={formData.tractorChasis}
              onChange={(e) =>
                setFormData({ ...formData, tractorChasis: e.target.value })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Engine Number
            <input
              value={formData.engineNumber}
              onChange={(e) =>
                setFormData({ ...formData, engineNumber: e.target.value })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            VIN/SN
            <input
              value={formData.identificationNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  identificationNumber: e.target.value,
                })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            License Plate
            <input
              value={formData.licensePlateNumber}
              onChange={(e) =>
                setFormData({ ...formData, licensePlateNumber: e.target.value })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Year Manufacture
            <input
              value={formData.manufactureDate}
              onChange={(e) =>
                setFormData({ ...formData, manufactureDate: e.target.value })
              }
              className="input input-primary w-full"
              type="date"
              name=""
              id=""
            />
            {/* <select  className='select select-primary w-full'>
                            <option selected disabled value="">Select Year</option>
                        </select> */}
          </label>
          <label htmlFor="">
            Brand
            <input
              value={formData.brand.model}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  brand: { ...formData.brand, model: e.target.value },
                })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Model
            <input
              value={formData.brand.manufacturer}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  brand: { ...formData.brand, manufacturer: e.target.value },
                })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Registration State/Province
            <select
              className="select select-primary w-full"
              name=""
              id=""
              value={formData.registrationState}
              onChange={(e) =>
                setFormData({ ...formData, registrationState: e.target.value })
              }
            >
              <option value="">Select State</option>
              {states.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            {/* <input
              value={formData.registrationState}
              onChange={(e) =>
                setFormData({ ...formData, registrationState: e.target.value })
              }
              className="input input-primary w-full"
              type="text"
              name=""
              id=""
            /> */}
          </label>
          <label htmlFor="truck_type">
            Truck Type
            <select
              className="select select-primary w-full"
              name=""
              id=""
              value={truckType}
              onChange={(e) => setTruckType(e.target.value)}
            >
              <option value="">Select Truck Type</option>
              <option value="articulated">Articulated Truck</option>
              <option value="rigid">Rigid Truck</option>
            </select>
          </label>
          <label htmlFor="">
            Attached Semi-Trailer
            <input
              className="input input-primary w-full"
              type="text"
              disabled={truckType === "rigid"}
              name=""
              id=""
            />
          </label>
        </fieldset>
        <CloudinaryUpload
          onSuccess={(imageURL) =>
            setFormData({ ...formData, pictureUrl: imageURL })
          }
        />
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          {/* <label htmlFor="">
                        Operational Status
                        <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Status</option>
                        </select>
                    </label> */}
          <label htmlFor="">
            Current Assignee - LC
            <select
              value={formData.logisticsCoordinatorId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  logisticsCoordinatorId: e.target.value,
                })
              }
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option value="">Select Logistic Coordinator</option>
              {logistics.map((item) => (
                <option value={item.userId}>
                  {" "}
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
            {/* <input className='input input-primary w-full' type="text" name="" id="" /> */}
          </label>
          <label htmlFor="">
            Current Assignee - JO
            <select
              value={formData.journeyOfficerId}
              onChange={(e) =>
                setFormData({ ...formData, journeyOfficerId: e.target.value })
              }
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option value="">Select Journey Officer</option>
              {journey.map((item) => (
                <option key={item.userId} value={item.userId}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
            {/* <input className='input input-primary w-full' type="text" name="" id="" /> */}
          </label>
          <label htmlFor="">
            Current Asignee - DO
            <select
              className="select select-primary w-full"
              value={formData.deliveryOfficerId}
              onChange={(e) =>
                setFormData({ ...formData, deliveryOfficerId: e.target.value })
              }
              name=""
              id=""
            >
              <option value="">Select Delivery Officer</option>
              {delivery.map((item) => (
                <option key={item.userId} value={item.userId}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
            {/* <input className='input input-primary w-full' type="text" name="" id="" /> */}
          </label>
          <label htmlFor="">
            Owner
            <select
              value={formData.ownerId}
              onChange={(e) =>
                setFormData({ ...formData, ownerId: e.target.value })
              }
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option selected disabled value="">
                Select Owner
              </option>
              {owners.map((owner) => (
                <option key={owner.ownerId} value={owner.ownerId}>
                  {owner.ownerName}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="">
            Ownership
            {/* <select value={formData.ownership} onChange={(e) => setFormData({ ...formData, ownership: e.target.value })} className='select select-primary w-full' name="" id="">
                            <option selected disabled value="">Select Ownership</option>
                        </select> */}
            <div className="border border-primary h-12 rounded-lg grid items-center">
              {owners
                .filter((t) => t.ownerId === formData.ownerId)
                .map((item) => (
                  <p
                    key={item.ownerId}
                    value={formData.ownerShip}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerShip: e.target.value })
                    }
                    className="px-4"
                  >
                    {item.ownerShip}
                  </p>
                ))}
            </div>
          </label>
        </fieldset>
        <label htmlFor="">
          Additional Details
          <textarea
            value={formData.additionalDetails}
            onChange={(e) =>
              setFormData({ ...formData, additionalDetails: e.target.value })
            }
            className="textarea textarea-primary w-full"
            name=""
            id=""
            rows="4"
          ></textarea>
        </label>
      </form>
    </div>
  );
}

export default FormA1;
