import React, { useState, useEffect } from "react";
import PageTitle from "../../utils/PageTitle";
import FormTitle from "../FormTitle";

import endpoint from "../../utils/endpoints/endpoint";
import Tif from "./FormA/tif";
import Tif2 from "./FormB/Tif2";
import { useLocation } from "react-router";

const TifForm = () => {
  PageTitle("Axle & Cartage - TifForm");

  const location = useLocation();
  const summ = location?.state;
  // console.log(summ.truckProgrammingId);

  const initialState = summ
    ? {
        truckProgrammingId: summ.truckProgrammingId,
        // productType: "",
        // deliveryOfficer: "",
        // journeyOfficer: "",
        // currentTripId: "",

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
          question:
            "11. Seat belts in the truck fitted and functioning properly?",
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
          question: "19. Door handle have handlebars and door staircase?",
        },
        q20: {
          question: "20. Fifth wheel/turn table kingpin locked?",
        },
        q21: {
          question: "21. Is the tank free of rust, corrosion and damage?",
        },
        q22: {
          question: "22. Are the dashboard control panels in good condition?",
        },
        q23: {
          question: "23. Battery master switch available and functional?",
        },
        q24: {
          question: "24. Spark arrestor available?",
        },
        q25: {
          question: "25. Emergency notification number available ?",
        },
        q26: {
          question:
            "26. Headlamp, indicator lights and brake light functional?",
        },
        q27: {
          question: "27. Adjustable seat & head restrain functional?",
        },
        q28: {
          question: "28. Is the emergency shutdown button functional?",
        },
        q29: {
          question:
            "29. Mudguards, handrails and API setting available and functioning?",
        },
        q30: {
          question: "30. Are the reflective stickers in good condition?",
        },
        q31: {
          question: "31. First Aid Kit available",
        },
        q32: {
          question: "32. Warning Triangles available",
        },
        q33: {
          question: "33. Jack And Handle available",
        },
        q34: {
          question: "34. Wheel Spanner available",
        },
      }
    : {
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
          question:
            "11. Seat belts in the truck fitted and functioning properly?",
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
          question: "19. Door handle have handlebars and door staircase?",
        },
        q20: {
          question: "20. Fifth wheel/turn table kingpin locked?",
        },
        q21: {
          question: "21. Is the tank free of rust, corrosion and damage?",
        },
        q22: {
          question: "22. Are the dashboard control panels in good condition?",
        },
        q23: {
          question: "23. Battery master switch available and functional?",
        },
        q24: {
          question: "24. Spark arrestor available?",
        },
        q25: {
          question: "25. Emergency notification number available ?",
        },
        q26: {
          question:
            "26. Headlamp, indicator lights and brake light functional?",
        },
        q27: {
          question: "27. Adjustable seat & head restrain functional?",
        },
        q28: {
          question: "28. Is the emergency shutdown button functional?",
        },
        q29: {
          question:
            "29. Mudguards, handrails and API setting available and functioning?",
        },
        q30: {
          question: "30. Are the reflective stickers in good condition?",
        },
        q31: {
          question: "31. First Aid Kit available",
        },
        q32: {
          question: "32. Warning Triangles available",
        },
        q33: {
          question: "33. Jack And Handle available",
        },
        q34: {
          question: "34. Wheel Spanner available",
        },
      };

  const [data, setData] = useState(initialState);

  const [assessments, setAssessment] = useState([
    {
      questionId: "513a9f13-6165-4de5-929c-fa35413bcc5d",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "ca9aeea1-0eb8-45f0-9b25-21f677a1cba5",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "b0e67073-5b6e-4178-b08b-6c350a35a940",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "71149a9b-290b-4ba6-91d6-782043447b1b",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "7a3158c3-eef5-4454-be01-fe7e9f4a7729",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "d5db5658-6b6e-459e-a7e4-272585bf960a",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "33f9da06-34b7-42f1-9f66-1ef9ac9f95d3",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "957ba576-20c0-4318-a5fd-64b5a3d9975f",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "214fc4dd-d1c4-43d1-91b9-539e6de174c6",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "c1ef5149-a15b-42d9-ab2d-8aab890ea45b",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "cab3326e-4367-4203-8154-d040d5c7ab75",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "2adda1ed-5acc-4aab-9bfc-80fb853fce14",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "db315d43-561c-4853-ae88-69378d48eca5",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "37b48b06-6ba1-4fd7-bc25-205cbc4fe51d",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "a395bb1b-58fa-4213-a649-d09fdaa49ecc",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "1d8e7bfa-0f15-4a70-9a0a-6c5b4946dc0f",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "6ae082db-eb43-42ad-8586-158879efe1d3",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "77352ba3-9120-4a68-9069-8a6e54af2c67",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "ad5f4842-b58f-4131-91ac-1c4d9ed06d21",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "666ab73f-ad05-4491-8614-0cb07b9bc866",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "5b65f56d-4852-42cc-8c8e-58e2511d5e53",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "0334cc89-3a21-424b-87b2-c87650533974",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "bb98d9ae-f901-49f0-9151-193972a3f2a6",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "a5c76e53-d4d2-43a3-aa72-6f05792a8ea1",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "da2d5b77-67fa-4534-972d-2d39427e1771",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "0ad8f05d-7cf8-4f6b-aed7-c3e57f91ef74",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "a5f49e70-4535-43f1-9f05-9178d1b6d582",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "8ecbf090-4179-4bb8-842b-14a46783c723",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "46d28d9e-68c4-44e9-bdd5-e6121ec4864e",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "af5fe80c-ecd6-4945-aa6c-3a40d8de046d",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "7fabb1ff-1a2f-4e44-b550-9fe60b3efc9f",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "ee06e161-5471-4d73-ae3e-ef6ce9e382d9",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "7f2c130b-e50a-478b-b1ee-8aa92b8e61b1",
      answer: "",
      othersInput: "",
    },
    {
      questionId: "6f290d3e-2315-4ee3-8333-ec5491d692d0",
      answer: "",
      othersInput: "",
    },
  ]);

  const [truckPro, setTruckPro] = useState([]);
  const [comments, setComment] = useState("");
  const [truckProgrammingId, setTruckProgrammingId] = useState("");
  const [truckAssess, setTruckAssess] = useState("");
  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res);
        setTruckPro(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    endpoint
      .get("truck/assessments/e0617b6c-17f6-45ab-8034-7f4c87e8c829")
      .then((res) => {
        console.log(res.data);
        setTruckAssess(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="space-y-2 bg-white p-5 rounded-lg">
      <FormTitle Title={"Pre Trip Inspection Form"} />
      <hr className="pb-5" />

      <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end text-primary">
        <label htmlFor="tripId">
          Trip ID
          <select
            value={data.truckProgrammingId}
            onChange={(e) =>
              setData({ ...data, truckProgrammingId: e.target.value })
            }
            className="select select-primary w-full"
            name=""
            id="tripID"
          >
            <option value="">Select Trip</option>
            {truckPro.map((item) => (
              <option value={item.truckProgrammingId}>
                {item.tripReference}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="">
          Truck Number
          {/* {truckPro
              .filter((i) => i.truckProgrammingId === truckProgrammingId)
              .map((item) => (
                <p>{item.truck.truckNumber}</p>
              ))} */}
          {summ ? (
            <div className="border border-primary h-12 rounded-lg px-4 grid items-center">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p>{item.truck.truckNumber}</p>
                ))}
            </div>
          ) : (
            <div className="border border-primary h-12 rounded-lg px-4 grid items-center">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p>{item.truck.truckNumber}</p>
                ))}
            </div>
          )}
        </label>
        <label htmlFor="">
          Product Type
          <br />
          {summ ? (
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p key={item.product.productId}>{item.product.productType}</p>
                ))}
            </div>
          ) : (
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p key={item.product.productId}>{item.product.productType}</p>
                ))}
            </div>
          )}
        </label>

        <label htmlFor="">
          Odometer Reading
          {summ ? (
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p key={item.truck.truckProgrammingId}>
                    {item.truck.galooliData.odometer}
                  </p>
                ))}
            </div>
          ) : (
            <div className="border border-primary h-12 rounded-lg grid items-center px-4">
              {truckPro
                .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
                .map((item) => (
                  <p key={item.truck.truckProgrammingId}>
                    {item.truck.galooliData.odometer}
                  </p>
                ))}
            </div>
          )}
        </label>
      </fieldset>
      {
        <div>
          {truckPro
            .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
            .map((item) =>
              item.product.productType === "LFG" ? (
                <Tif2
                  data={data}
                  setData={setData}
                  truckPro={truckPro}
                  setTruckPro={setTruckPro}
                  truckProgrammingId={truckProgrammingId}
                  setTruckProgrammingId={setTruckProgrammingId}
                  truckAssess={truckAssess}
                  comments={comments}
                  setComment={setComment}
                />
              ) : (
                <Tif
                  data={data}
                  setData={setData}
                  truckPro={truckPro}
                  setTruckPro={setTruckPro}
                  truckProgrammingId={truckProgrammingId}
                  setTruckProgrammingId={setTruckProgrammingId}
                  truckAssess={truckAssess}
                  assessments={assessments}
                  setAssessment={setAssessment}
                  comments={comments}
                  setComment={setComment}
                />
              )
            )}
        </div>
      }
    </div>
  );
};

export default TifForm;
