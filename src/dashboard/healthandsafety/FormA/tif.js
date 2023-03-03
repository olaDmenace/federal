import React, { useState, useEffect } from "react";
import WhiteProduct from "./WhiteProduct";
import WhiteProduct2 from "./WhiteProduct2";
import endpoint from "../../../utils/endpoints/endpoint";
import { LocationMarkerIcon, XCircleIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import PopUp from "../../../utils/PopUp";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";

function Tif({
  truckPro,
  setTruckPro,
  data,
  setData,
  truckProgrammingId,
  truckAssess,
  assessments,
  setAssessment,
  comments,
  setComment,
  setTruckProgrammingId,
}) {
  ("Axle & Cartage - Pre Trip Inspection Form");
  const [form, setForm] = useState(0);

  const activeForm = () => {
    if (form === 0) {
      return (
        <WhiteProduct
          data={data}
          setData={setData}
          truckPro={truckPro}
          setTruckPro={setTruckPro}
          assessments={assessments}
          setAssessment={setAssessment}
          truckProgrammingId={truckProgrammingId}
          truckAssess={truckAssess}
        />
      );
    } else if (form === 1) {
      return (
        <WhiteProduct2
          data={data}
          setData={setData}
          assessments={assessments}
          setAssessment={setAssessment}
          comments={comments}
          setComment={setComment}
          truckAssess={truckAssess}
        />
      );
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  const resetForm = () => {
    const newAssessments = assessments.map((assessment) => {
      return {
        ...assessment,
        answer: "",
        othersInput: "",
      };
    });
    setAssessment(newAssessments);
  };

  // Handles the submit event

  function handleSubmit(e) {
    console.log(e.cancelable);
    e.preventDefault();
    setIsLoading(true);
    setComment("");
    resetForm();

    endpoint
      .post("/truck/inspect", {
        truckProgrammingId,
        assessments,
        comments,
      })
      .then((res) => {
        console.log("new data added", res.data);
        if (res.status === 200) {
          setShow(true);
          setReply({
            icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
            message: res.data.message,
          });
        } else {
          setReply({
            icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
            message: res.data.message,
          });
        }
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const closePop = () => {
    setIsLoading(!isLoading);
    setShow(false);
  };
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
      <hr />
      <ul className="steps steps-horizontal w-full pt-5">
        <li className="step step-primary"></li>
        <li className={`step ${form === 1 ? `step-primary` : `step`}`}></li>
      </ul>
      {/* <div className="flex gap-10 pb-10 overflow-x-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900"> */}
      <div>{activeForm()}</div>

      {/* </div> */}
      <div className="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          className="btn btn-active"
        >
          Prev
        </button>
        <button
          disabled={form === 1}
          onClick={() => {
            setForm((currForm) => currForm + 1);
          }}
          className="btn btn-active "
        >
          Next
        </button>
        {location.pathname === "/dashboard/tifForm" ? (
          <div className="mx-auto">
            {" "}
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <button
                disabled={comments === ""}
                class="btn btn-primary mx-auto"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
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

export default Tif;
