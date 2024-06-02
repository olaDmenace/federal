import React, { useState } from "react";
import endpoint from "../../../utils/endpoints/endpoint";
import FormA1 from "./FormA1";
import FormA2 from "./FormA2";
import FormA3 from "./FormA3";
import FormA4 from "./FormA4";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import PopUp from "../../../utils/PopUp";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import * as xlsx from "xlsx";
import { saveAs } from "file-saver";

function FormA() {
  const [form, setForm] = useState(0);
  const location = useLocation();
  // console.log(location?.state?.truck)

  // Collects and holds the data from the children form
  const initialState = location.state
    ? {
        // Use the data from location.state.truck
        // truckNumber: location.state.truck.truckNumber,
        // fleetNumber: location.state.truck.fleetNumber,
        // licensePlateNumber: location.state.truck.licensePlateNumber,

        ...location?.state?.truck?.truck,
        // truckNumber: location.state.truck?.truckNumber || '',
        // fleetNumber: '',
        // licensePlateNumber: '',
        // pictureUrl: '',
        // tractorChasis: '',
        // engineNumber: '',
        // identificationNumber: '',
        // manufactureDate: '',
        // brand: {
        //     model: '',
        //     manufacturer: ''
        // },
        truckDocuments: [
          {
            type: 0,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 1,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 2,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 3,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 4,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 5,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 6,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 7,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 8,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 9,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 10,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
        ],
        // FormA3

        maintenanceInfo: {
          lastPreventiveMaintenance: null,
          nextPreventiveMaintenance: null,
          inServiceDate: null,
          inServiceOdometer: 0,
          estimatedServiceLive: 0,
          estServiceMet: null,
          estimatedResaleValue: 0,
          outOfServiceDate: null,
          outOfServiceOdometer: 0,
        },
        purchaseInfo: {
          vendorName: null,
          purchaseDate: null,
          purchaseValue: 0,
          odometer: 0,
          notes: null,
          warrantyExpiryDate: null,
          warrantyMaxOdometer: 0,
        },
        specification: {
          driveType: null,
          brakeSystem: null,
          rearAxle: 0,
          fuelType: null,
          fisrtTankCapacity: 0,
          secondTankCapacity: 0,
          tankCapacityMetric: null,
          oilCapacity: 0,
          oilCapacityMetric: null,
          maintenanceVendor: null,
        },
        // Rest of the properties...
      }
    : {
        // FormA1
        truckNumber: null,
        fleetNumber: null,
        licensePlateNumber: null,
        tractorChasis: null,
        engineNumber: null,
        identificationNumber: null,
        manufactureDate: null,
        brand: {
          model: null,
          manufacturer: null,
        },
        registrationState: null,
        pictureUrl: null,
        status: 0,
        logisticsCoordinatorId: null,
        journeyOfficerId: null,
        deliveryOfficerId: null,
        ownership: null,
        ownerId: null,
        additionalDetails: null,

        // FormA2

        truckDocuments: [
          {
            type: 0,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 1,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 2,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 3,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 4,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 5,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 6,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 7,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 8,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 9,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
          {
            type: 10,
            referenceNumber: null,
            dateIssued: null,
            expiryDate: null,
          },
        ],

        // FormA3

        maintenanceInfo: {
          lastPreventiveMaintenance: null,
          nextPreventiveMaintenance: null,
          inServiceDate: null,
          inServiceOdometer: 0,
          estimatedServiceLive: 0,
          estServiceMet: null,
          estimatedResaleValue: 0,
          outOfServiceDate: null,
          outOfServiceOdometer: 0,
        },
        purchaseInfo: {
          vendorName: null,
          purchaseDate: null,
          purchaseValue: 0,
          odometer: 0,
          notes: null,
          warrantyExpiryDate: null,
          warrantyMaxOdometer: 0,
        },

        // FormA4

        specification: {
          driveType: null,
          brakeSystem: null,
          rearAxle: 0,
          fuelType: null,
          fisrtTankCapacity: 0,
          secondTankCapacity: 0,
          tankCapacityMetric: null,
          oilCapacity: 0,
          oilCapacityMetric: null,
          maintenanceVendor: null,
        },
      };

  const [formData, setFormData] = useState(initialState);

  function flattenObject(obj, prefix = "") {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        return { ...acc, ...flattenObject(obj[key], `${prefix}${key}.`) };
      } else {
        return { ...acc, [`${prefix}${key}`]: obj[key] };
      }
    }, {});
  }

  function convertToExcel(data = formData) {
    const flattenedData = flattenObject(data);
    const headers = Object.keys(flattenedData);
    const rows = [];

    // Push the headers as the first row
    rows.push(headers);

    // Populate rowData with values from the flattened data
    const rowData = headers.map((header) => flattenedData[header] || "");
    rows.push(rowData);

    // Handle truckDocuments.type array
    for (let i = 0; i < 11; i++) {
      // Change to 11 to include "truckDocuments.10.type"
      const truckDocument = data.truckDocuments[i];
      if (truckDocument) {
        const flattenedDocument = flattenObject(
          truckDocument,
          `truckDocuments.${i}.`
        );

        // // Populate rowData with values from the flattened document
        // const rowData = headers.map(
        //   (header) => flattenedDocument[header] || ""
        // );

        // // Push the populated rowData to rows array
        // rows.push(rowData);
      }
    }

    // Create a worksheet from the data
    const worksheet = xlsx.utils.aoa_to_sheet(rows);

    // Create a workbook and add the worksheet
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    // Convert the workbook to an Excel file
    const excelFile = xlsx.write(workbook, { type: "array", bookType: "xlsx" });

    // Download the Excel file
    saveAs(new Blob([excelFile]), "Asset Register Template.xlsx");
  }

  const [formValues, setFormValues] = useState({
    truckNumber: formData.truckNumber,
    fleetNumber: formData.fleetNumber,
    licensePlateNumber: formData.licensePlateNumber,
    pictureUrl: "",
    tractorChasis: formData.tractorChasis,
    engineNumber: formData.engineNumber,
    identificationNumber: formData.identificationNumber,
    manufactureDate: formData.manufactureDate,
    brand: {
      model: formData.brand.model,
      manufacturer: formData.brand.manufacturer,
    },
  });

  // Controls which form is displayed on the page
  const formDisplay = () => {
    if (form === 0) {
      return <FormA1 formData={formData} setFormData={setFormData} />;
    } else if (form === 1) {
      return <FormA2 formData={formData} setFormData={setFormData} />;
    } else if (form === 2) {
      return <FormA3 formData={formData} setFormData={setFormData} />;
    } else {
      return <FormA4 formData={formData} setFormData={setFormData} />;
    }
  };

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  // Handles the submit event
  function handleSubmit() {
    // e.preventDefault()
    setLoading(!loading);
    console.log(formData);
    endpoint
      .post("/truck", formData)
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
          message: `Please, check your form and try again. ${err.response.data.message}`,
        });
        console.log(err);
      });
    // setLoading(!loading)
  }

  function closePop(e) {
    setShow(false);
    setLoading(!loading);
  }

  const handleUpdate = (arg) => {
    // console.log(formValues)
    // arg.preventDefault()
    setLoading(!loading);
    console.log(formValues);
    endpoint
      .put(`/truck/${arg}`, formValues)
      .then((res) => {
        setShow(true);
        console.log(res);
        setShow(!show);
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
      })
      .then((err) => {
        setShow(!show);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: `Please, check your form and try again ${err.response.data.message}`,
        });
        console.log(err);
      });
  };

  const formSubmit = () => {
    if (form === 3 && location.state) {
      handleUpdate(location.state.truck.truckId);
    } else if (form === 3 && !location.state) {
      // dataExport(formData);
      handleSubmit();
    } else setForm((currForn) => currForn + 1);
  };

  // const formSubmit = () => {
  //     if (form === 3 && location.state) {
  //       handleUpdate(location.state.truck.truckId)
  //     } else if (form === 3 && !location.state) {
  //       handleSubmit()
  //     } else {
  //       setForm((currForm) => currForm + 1)
  //     }
  //   }

  // { form === 3 ? handleSubmit() : setForm((currForm) => currForm + 1) }

  return (
    <div className="grid rounded-lg p-5 bg-white">
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
      <div>{formDisplay()}</div>
      {!loading && (
        <div className="btn-group mx-auto pt-5">
          <button
            className={form === 0 ? "btn btn-disabled" : "btn btn-primary"}
            onClick={() => {
              setForm((currFage) => currFage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={form === 3 && !formData.truckNumber}
            className="btn btn-active"
            onClick={() => formSubmit()}
            // onClick={() => convertToExcel()}
          >
            {form === 3 ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default FormA;
