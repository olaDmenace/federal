import React, { useState } from "react";
import LiquidHeight from "./LiquidHeight";
import Meter from "./Meter";
import UllageParameter from "./UllageParameter";
import TruckCalibrationChart from "./TruckCalibrationChart";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import useFetch from "../../../useFetch";

const TruckResolution = ({ onClose, isOpen, id }) => {
  const handleCalibrationTypeChange = (event) => {
    const newCalibrationType = parseInt(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      resolutions: [
        {
          ...prevFormData.resolutions[0],
          calibration: {
            ...prevFormData.resolutions[0].calibration,
            calibrationType: newCalibrationType,
          },
        },
      ],
    }));
  };
  const options = [
    { value: 0, parameterId: 1, parameter: "Ullage" },
    { value: 1, parameterId: 2, parameter: "Liquid Height" },
    { value: 2, parameterId: 3, parameter: "Meter" },
  ];

  const calibrationType = () => {
    if (formData.resolutions[0].calibration.calibrationType === 0) {
      return <UllageParameter formData={formData} setFormData={setFormData} />;
    } else if (formData.resolutions[0].calibration.calibrationType === 1) {
      return <LiquidHeight formData={formData} setFormData={setFormData} />;
    } else if (formData.resolutions[0].calibration.calibrationType === 2) {
      return <Meter formData={formData} setFormData={setFormData} />;
    } else {
      return "";
    }
  };

  const handleResponsiblePartyChange = (e) => {
    const value = parseInt(e.target.value);
    setFormData({
      ...formData,
      resolutions: [
        {
          ...formData.resolutions[0],
          source: value,
        },
      ],
    });
  };
  const { wayBillId } = useParams();
  const { formData, setFormData } = useFetch(`/truck/journey-management`);
  const handleClick = (event) => {
    event.preventDefault();
    // handle button click logic here
  };

  return (
    <ReactModal
      isOpen={isOpen} // Pass a prop to determine whether the modal is open or closed
      onRequestClose={onClose} // Pass a callback to handle closing the modal
      shouldCloseOnOverlayClick={true} // Set to true to allow closing the modal when clicking outside of it
    >
      <p>{id}</p>
      <h4 className="text-xl text-primary font-medium">
        ACL Shortage Resolution
      </h4>
      <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
        <label htmlFor="">
          Resolution Parameter
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={formData.resolutions[0].calibration.calibrationType}
            onChange={handleCalibrationTypeChange}
          >
            <option>select Parament</option>
            {options.map((opt) => (
              <option key={opt.parameterId} value={opt.value}>
                {opt.parameter}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="">
          Shortage Reason
          <select
            className="w-full select select-primary"
            value={formData.resolutions[0].reason}
            name=""
            id=""
            onChange={(e) =>
              setFormData({
                ...formData,
                resolutions: [
                  {
                    ...formData.resolutions[0],
                    reason: parseInt(e.target.value),
                  },
                ],
              })
            }
          >
            <option>select Shortage Reason</option>
            <option value={0}>Calibration Chart</option>
            <option value={1}> Theft</option>
            <option value={2}>Ullage Ground</option>
            <option value={3}>Short Loading</option>
            <option value={4}> Other</option>
          </select>
        </label>

        <label htmlFor="">
          Responsible Party
          <select
            value={formData.resolutions[0].source}
            className="w-full select select-primary"
            name=""
            id=""
            onChange={handleResponsiblePartyChange}
          >
            <option>select Responsible Party</option>
            <option value={0}>Company</option>
            <option value={1}>DO</option>
            <option value={2}>Customer</option>
          </select>
        </label>

        <label htmlFor="">
          Amount Charged to Responsible Party
          <input
            className="input input-primary w-full"
            type="number"
            name=""
            value={formData.resolutions[0].sourceCharge}
            id=""
            onChange={(e) =>
              setFormData({
                ...formData,
                resolutions: [
                  {
                    ...formData.resolutions[0],
                    sourceCharge: parseInt(e.target.value),
                  },
                ],
              })
            }
          />
        </label>
      </fieldset>
      {calibrationType()}
      {formData.resolutions[0].reason === 0 && <TruckCalibrationChart />}
      <label htmlFor="">
        Remarks
        <textarea
          className="textarea textarea-primary w-full"
          value={formData.resolutions[0].remarks}
          name=""
          id=""
          rows={"6"}
          onChange={(e) =>
            setFormData({
              ...formData,
              resolutions: [
                {
                  ...formData.resolutions[0],
                  remarks: e.target.value,
                },
              ],
            })
          }
        ></textarea>
      </label>
      <fieldset className="grid gap-3 md:grid-cols-2 items-end">
        <label htmlFor="">
          Resolution Status
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={formData.resolutions[0].status}
            onChange={(e) =>
              setFormData({
                ...formData,
                resolutions: [
                  {
                    ...formData.resolutions[0],
                    status: parseInt(e.target.value),
                  },
                ],
              })
            }
          >
            <option value="">Select Resolution Status</option>
            <option value={0}>Open</option>
            <option value={1}>Closed</option>
          </select>
        </label>
        <label htmlFor="">
          Shortage Refund Status
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={formData.resolutions[0].refundStatus}
            onChange={(e) =>
              setFormData({
                ...formData,
                resolutions: [
                  {
                    ...formData.resolutions[0],
                    refundStatus: parseInt(e.target.value),
                  },
                ],
              })
            }
          >
            <option value="">select Shortage Refund Status</option>
            <option value={0}>Pending</option>
            <option value={1}>Completed</option>
          </select>
        </label>

        <button className="btn btn-primary mx-auto" onClick={onClose}>
          Go Back
        </button>
      </fieldset>
    </ReactModal>
  );
};

export default TruckResolution;
