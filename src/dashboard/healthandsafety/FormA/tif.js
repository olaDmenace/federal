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
  // setTruckProgrammingId,
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

  function handleSubmit() {
    const formData = {
      truckProgrammingId,
      assessments,
      comments,
    };
    console.log(formData);

    console.log("first");

    // setIsLoading(true);
    // setComment("");
    // resetForm();

    // endpoint
    //   .post("/truck/inspect", formData)
    //   .then((res) => {
    //     console.log("new data added", res);
    //     if (res.status === 200) {
    //       setShow(true);
    //       setReply({
    //         icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
    //         message: res.data.message,
    //       });
    //     } else {
    //       setReply({
    //         icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
    //         message: res.data.message,
    //       });
    //     }
    //     setIsLoading(!isLoading);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
      <div>{activeForm()}</div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="btn-group mx-auto pt-5">
          <button
            disabled={form === 0}
            className="btn btn-active"
            onClick={() => setForm((form) => form - 1)}
          >
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={
              form === 1 && comments !== "" ? handleSubmit : () => setForm(1)
            }
          >
            {form === 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Tif;
