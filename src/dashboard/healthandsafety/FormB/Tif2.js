import React, { useState, useEffect } from "react";

import endpoint from "../../../utils/endpoints/endpoint";
import { LocationMarkerIcon, XCircleIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import PopUp from "../../../utils/PopUp";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";
import Lfg from "./LPG";
import Lfg2 from "./LPG2";

function Tif2({
  truckPro,
  setTruckPro,
  setTruckProgrammingId,
  truckProgrammingId,
  truckAssess,
}) {
  ("Axle & Cartage - Pre Trip Inspection Form");
  const [form, setForm] = useState(0);

  const [data, setData] = useState({
    truckProgrammingId: "",
    productType: "",
    deliveryOfficer: "",
    journeyOfficer: "",
    currentTripId: "",
    q1: {
      question:
        "1. Vehicle license, Road worthiness and Insurance Certificates Valid?",
    },
    q2: {
      question: " 2. Valid Drivers’ license?",
    },
    q3: {
      question:
        " 3. Complete PPE? (Hard Helmet, Safety boots, and Hi-Vis clothing, Company T-Shirt and Identity cards)",
    },
    q4: {
      question: "4. Assistant Available?",
    },
    q5: {
      question: "5. Truck free from oil and gas leaks?",
    },
    q6: {
      question:
        "6. Windscreen free of cracks and the wipers in good condition?",
    },
    q7: {
      question: "7. Is the horn & reverse alarm functional?",
    },

    q8: {
      question: "8. Driving mirrors free of cracks and firmly fixed?",
    },
    q9: {
      question:
        "9. All Tyres including the 2 spares in good condition and of a minimum thread depth of 2mm?",
    },
    q10: {
      question: "10. Correct wheel nuts and studs are fitted?",
    },
    q11: {
      question: "11. Seat belts in the truck fitted and functioning properly?",
    },
    q12: {
      question:
        "12. Does the engine start using the ignition key? (No pushing, non-usage of wires)",
    },
    q13: {
      question:
        "13. Vehicle equipped with two (unexpired) 9kg fire extinguisher and caution sign?",
    },
    q14: {
      question: "14. Vehicle have 2 standard wheel chocks with handles?",
    },
    q15: {
      question:
        "15. Are the following Hydraulic Jack, Wheel Spanner, Tyre Lifter,  Tyre chains and Padlocks, Tyre Gauge, Tyre Pump Offloading Adaptor,  Towing Chain and Harness present and effective?",
    },
    q16: {
      question:
        "16. Battery secured and terminals properly tightened? Also state the voltage on each Battery in the comment section (Use the meter provided)",
    },
    q17: {
      question: "17. Calibration chart valid?",
    },
    q18: {
      question: "18. Emergency shut-off switch functional?",
    },
    q19: {
      question: "19. Pressure relief valve functional?",
    },
    q20: {
      question: "20. Fifth wheel/turn table kingpin locked?",
    },
    q21: {
      question: "21. Is the tank free of rust, corrosion and damage?",
    },
    q22: {
      question: "22. Temperature, pressure, and rotor gauges functional?",
    },
    q23: {
      question: "23. Transport Emergency (TREM ) card available?",
    },
    q24: {
      question: "24. Battery master switch available and functional?",
    },
    q25: {
      question: "25. Spark arrestor available ?",
    },
    q26: {
      question: "26. Emergency notification number available ?",
    },
    q27: {
      question: "27. All flanges well bolted and leak free?",
    },
    q28: {
      question:
        "28. Are the three blind flanges complete, well bolted and in good condition?",
    },
    q29: {
      question: "29. First Aid Kit available",
    },
    q30: {
      question: "30. Warning Triangles available",
    },
    q31: {
      question: "31. Jack and Handle available",
    },
    q32: {
      question: "32. Wheel Spanner available",
    },
  });

  const [assessments, setAssessment] = useState([
    {
      questionId: "4f62977e-b164-4bf2-9f01-47976d09c44b",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "428685d8-8fad-4549-92f1-27e407295acf",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "5c2c8443-0780-41cd-8ad9-c30b7a864a74",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "b4893ba2-14eb-47bb-ae22-4c27ad131e6a",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "8923f950-071f-419f-b767-5eed8ced0c12",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "55178745-9a27-4f58-a841-448488aff3e0",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "f9c572c0-fbe7-4fd1-8fde-ee3215494163",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "aec31ebd-1a95-4c78-8bf2-9ec21a14cbba",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "fabc6097-3ab9-4956-adef-d48aa170af37",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "21290cc8-7b37-47fe-88b9-4f930de827d2",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "466f27ef-50ed-4a7d-8817-6a183f7ef660",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "e6c67189-3ef5-46fb-81a4-3201494256cb",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "deccf417-f06e-473d-a963-7ca2208b290a",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "bacaa8ae-cc5f-41dc-91a6-997dbeb61898",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "194d33d6-4bdd-4c1d-bd51-3167257d4d53",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "af52a13f-f90c-4e2e-b5d0-93fc9ee12e71",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "ff57ca92-13c3-4757-a4a9-3799a5c55794",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "6a5010a6-756e-496b-a7d3-333243db3c71",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "cf078917-77e5-4996-af9a-d92ea4fb44f9",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "30fbc412-bb95-44c1-a8a8-7498f8cb7a6c",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "825252ed-0ca1-410a-8dd4-ef4482d40ae2",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "8eb50b9a-39c0-4273-b4fc-27f60924bd73",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "d93b0e49-4623-4a8b-9bd3-afb78e176ed0",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "3e87c044-e94b-45d3-bc34-1f224e5d04b4",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "e1d64592-4e4e-4325-9e52-7ba5c1d0b931",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "f439818f-a5fa-4a36-978c-4576156905cf",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "fdc67f4f-5dab-4a36-a93b-53dc881dd315",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "f75a6f04-652e-4541-b045-fc1b8715222a",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "7427d3e7-584e-4e0f-adf8-df99e060a45b",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "daa7d27d-933f-469a-8f50-9360c4d6232b",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "2f5dcd03-33bc-415b-8e7c-56aef5308e87",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "fbc3e7de-4f59-431e-8f10-286e3b4d7cc8",
      answer: "",
      othersInput: "",
    },
  ]);
  const [comments, setComment] = useState("");
  const activeForm = () => {
    if (form === 0) {
      return (
        <Lfg
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
        <Lfg2
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

    const data = {
      truckProgrammingId,
      assessments,
      comments,
    };

    endpoint
      .post("/truck/inspect", data)
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

export default Tif2;
