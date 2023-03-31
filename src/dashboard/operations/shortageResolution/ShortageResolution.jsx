import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";

import ProductDetails from "./ProductDetails";
import TruckCalibrationChart from "./TruckCalibrationChart";

import ProgrammingDetails from "./ProgrammingDetails";

import endpoint from "../../../utils/endpoints/endpoint";
import { useLocation } from "react-router-dom";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import PopUp from "../../../utils/PopUp";
import LoadingSpinner from "../../../utils/LoadingSpinner";

function ShortageResolution() {
  PageTitle("Axle & Cartage - Shortage Resolution");
  const [form, setForm] = useState(0);
  const [trucks, setTrucks] = useState([]);

  const [formData, setFormData] = useState({
    productPrice: 0,
    journeyManagementId: "",
    resolutions: [
      {
        wayBillId: "",
        agreedShortage: 0,
        reason: 0,
        source: 0,
        status: 0,
        sourceCharge: 0,
        remarks: "",
        refundStatus: 0,
        calibration: {
          calibrationType: 0,
          meter: {
            loadingDepot: 0,
            arrivalLocation: 0,
          },
          ullage: [
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
          ],
          liquidHeight: [
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
            {
              loadingDepot: 0,
              arrivalLocation: 0,
            },
          ],
        },
      },
    ],
  });

  useEffect(() => {
    endpoint
      .get("/truck/journey-management")
      .then((res) => {
        console.log(res.data.data, "data");
        setTrucks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activeForm = () => {
    if (form === 0) {
      return (
        <ProgrammingDetails
          trucks={trucks}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (form === 1) {
      return (
        <ProductDetails
          trucks={trucks}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else {
      return <TruckCalibrationChart />;
    }
  };

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
    <div className="space-y-2 grid">
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
      <FormTitle Title={"Shortage Resolution"} />
      <hr />
      <ul className="steps">
        <li className="step step-primary"></li>
        <li className={form >= 1 ? "step step-primary" : "step"}></li>
        <li className={form >= 2 ? "step step-primary" : "step"}></li>
      </ul>
      <div className="grid gap-10 pb-10">
        <div>{activeForm()}</div>
      </div>
      <div class="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          className={form === 0 ? "btn btn-disabled" : "btn btn-active"}
        >
          Prev
        </button>

        {location.pathname === "/dashboard/ShortageResolution" ? (
          <div className="mx-auto">
            {" "}
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <button
                class="btn btn-primary mx-auto"
                onClick={(e) => {
                  form !== 2
                    ? setForm((currForm) => currForm + 1)
                    : handleSubmit(e);
                }}
              >
                {form === 2 ? "Submit" : "Next"}
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ShortageResolution;
