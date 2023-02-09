import React, { useState, useEffect } from "react";
import PageTitle from "../../utils/PageTitle";
import FormTitle from "../FormTitle";

import endpoint from "../../utils/endpoints/endpoint";
import Tif from "./FormA/tif";
import Tif2 from "./FormB/tif2";
import LPG from "./FormB/LPG";

function TifForm() {
  PageTitle("Axle & Cartage - TifForm");

  const [data, setData] = useState({
    truckId: "",
    truckNumber: "",
    logisticsCoordinatorId: "",
    logisticsCoordinator: "",
    journeyOfficerId: "",
    journeyOfficer: "",
    deliveryOfficerId: "",
    deliveryOfficer: "",
    productId: "",
    type: 0,
    productType: "",
    truckProgrammingId: "",

    q1: {
      question:
        "1. Vehicle license, Road worthiness and Insurance Certificates Valid?",
      answer: "",
    },
    q2: {
      question: " 2. Valid Drivers’ license?",
      answer: "",
    },
    q3: {
      question:
        " 3. Complete PPE? (Hard Helmet, Safety boots, and Hi-Vis clothing, Company T-Shirt and Identity cards)",
      answer: "",
    },
    q4: {
      question: "4. Assistant Available?",
      answer: "",
    },
    q5: {
      question: "5. Truck free from oil and gas leaks?",
      answer: "",
    },
    q6: {
      question:
        "6. Windscreen free of cracks and the wipers in good condition?",
      answer: "",
    },
    q7: {
      question: "7. Is the horn & reverse alarm functional?",
      answer: "",
    },
    q8: {
      question: "8. Driving mirrors free of cracks and firmly fixed?",
      answer: "",
    },
    q9: {
      question:
        "9. All Tyres including the 2 spares in good condition and of a minimum thread depth of 2mm?",
      answer: "",
    },
    q10: {
      question: "10. Correct wheel nuts and studs are fitted?",
      answer: "",
    },
    q11: {
      question: "11. Seat belts in the truck fitted and functioning properly?",
      answer: "",
    },
    q12: {
      question:
        "12. Does the engine start using the ignition key? (No pushing, non-usage of wires)",
      answer: "",
    },
    q13: {
      question:
        "13. Vehicle equipped with two (unexpired) 9kg fire extinguisher and caution sign?",
      answer: "",
    },
    q14: {
      question: "14. Vehicle have 2 standard wheel chocks with handles?",
      answer: "",
    },
    q15: {
      question:
        "15. Are the following Hydraulic Jack, Wheel Spanner, Tyre Lifter,  Tyre chains and Padlocks, Tyre Gauge, Tyre Pump Offloading Adaptor,  Towing Chain and Harness present and effective?",
      answer: "",
    },
    q16: {
      question:
        "16. Battery secured and terminals properly tightened? Also state the voltage on each Battery in the comment section (Use the meter provided)",
      answer: "",
    },
    q17: {
      question: "17. Calibration chart valid?",
      answer: "",
    },
    q18: {
      question: "18. Emergency shut-off switch functional?",
      answer: "",
    },
    q19: {
      question: "19. Door handle have handlebars and door staircase?",
      answer: "",
    },
    q20: {
      question: "20. Fifth wheel/turn table kingpin locked?",
      answer: "",
    },
    q21: {
      question: "21. Is the tank free of rust, corrosion and damage?",
      answer: "",
    },
    q22: {
      question: "22. Are the dashboard control panels in good condition?",
      answer: "",
    },
    q23: {
      question: "23. Battery master switch available and functional?",
      answer: "",
    },
    q24: {
      question: "24. Spark arrestor available?",
      answer: "",
    },
    q25: {
      question: "25. Emergency notification number available ?",
      answer: "",
    },
    q26: {
      question: "26. Headlamp, indicator lights and brake light functional?",
      answer: "",
    },
    q27: {
      question: "27. Adjustable seat & head restrain functional?",
      answer: "",
    },
    q28: {
      question: "28. Is the emergency shutdown button functional?",
      answer: "",
    },
    q29: {
      question:
        "29. Mudguards, handrails and API setting available and functioning?",
      answer: "",
    },
    q30: {
      question: "30. Are the reflective stickers in good condition?",
      answer: "",
    },
    q31: {
      question: "31. First Aid Kit available",
      answer: "",
    },
    q32: {
      question: "32. Warning Triangles available",
      answer: "",
    },
    q33: {
      question: "33. Jack And Handle available",
      answer: "",
    },
    q34: {
      question: "34. Wheel Spanner available",
      answer: "",
    },
    comments: "",
  });

  const [truckPro, setTruckPro] = useState([]);

  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data);
        setTruckPro(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [hide, setHide] = useState(true);

  const handleChange = (e) => {
    setTruckPro(e.target.value);
    setHide(false);
  };

  return (
    <div className="space-y-2">
      <FormTitle Title={"Pre Trip Inspection Form"} />
      <hr className="pb-5" />

      <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
        <label htmlFor="">
          Truck Numbers
          <select
            type="text"
            className="w-full select select-primary"
            name=""
            id=""
            value={data.truckId}
            onChange={(e) =>
              setData({
                ...data,
                truckId: e.target.value,
              })
            }
          >
            <option value={truckPro.productType} onChange={handleChange}>
              {" "}
              Select Truck Numbers
            </option>

            {truckPro.map((item) => (
              <option value={item.truck.truckId} key={item.truck.truckId}>
                {item.truck.truckNumber}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="">
          Product Type
          <br />
          <div className="border border-primary h-12 rounded-lg grid items-center px-4">
            {truckPro
              .filter((i) => i.truck.truckId === data.truckId)
              .map((item) => (
                <p key={item.product.productId}>{item.product.productType}</p>
              ))}
          </div>
        </label>

        <label htmlFor="">
          Odometer Reading
          <input
            className="w-full input input-primary"
            placeholder="1234"
            type="text"
            name=""
            id=""
          />
        </label>
      </fieldset>
      {hide && (
        <div>
          {truckPro.filter((i) => i.product.productType === "LFG") ? (
            <Tif2
              data={data}
              setData={setData}
              truckPro={truckPro}
              setTruckPro={setTruckPro}
            />
          ) : (
            <Tif
              data={data}
              setData={setData}
              truckPro={truckPro}
              setTruckPro={setTruckPro}
            />
          )}
          {handleChange}
        </div>
      )}
    </div>
  );
}

export default TifForm;
