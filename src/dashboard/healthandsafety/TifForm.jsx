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
    truckProgrammingId: "",
    productType: '',
    assessments: [
      {
        question:
          "1. Vehicle license, Road worthiness and Insurance Certificates Valid?",
        answer: "",
      },
      {
        question: " 2. Valid Drivers’ license?",
        answer: "",
      },
      {
        question:
          " 3. Complete PPE? (Hard Helmet, Safety boots, and Hi-Vis clothing, Company T-Shirt and Identity cards)",
        answer: "",
      },
      {
        question: "4. Assistant Available?",
        answer: "",
      },
      {
        question: "5. Truck free from oil and gas leaks?",
        answer: "",
      },
      {
        question:
          "6. Windscreen free of cracks and the wipers in good condition?",
        answer: "",
      },
      {
        question: "7. Is the horn & reverse alarm functional?",
        answer: "",
      },
      {
        question: "8. Driving mirrors free of cracks and firmly fixed?",
        answer: "",
      },
      {
        question:
          "9. All Tyres including the 2 spares in good condition and of a minimum thread depth of 2mm?",
        answer: "",
      },
      {
        question: "10. Correct wheel nuts and studs are fitted?",
        answer: "",
      },
      {
        question: "11. Seat belts in the truck fitted and functioning properly?",
        answer: "",
      },
      {
        question:
          "12. Does the engine start using the ignition key? (No pushing, non-usage of wires)",
        answer: "",
      },
      {
        question:
          "13. Vehicle equipped with two (unexpired) 9kg fire extinguisher and caution sign?",
        answer: "",
      },
      {
        question: "14. Vehicle have 2 standard wheel chocks with handles?",
        answer: "",
      },
      {
        question:
          "15. Are the following Hydraulic Jack, Wheel Spanner, Tyre Lifter,  Tyre chains and Padlocks, Tyre Gauge, Tyre Pump Offloading Adaptor,  Towing Chain and Harness present and effective?",
        answer: "",
      },
      {
        question:
          "16. Battery secured and terminals properly tightened? Also state the voltage on each Battery in the comment section (Use the meter provided)",
        answer: "",
      },
      {
        question: "17. Calibration chart valid?",
        answer: "",
      },
      {
        question: "18. Emergency shut-off switch functional?",
        answer: "",
      },
      {
        question: "19. Door handle have handlebars and door staircase?",
        answer: "",
      },
      {
        question: "20. Fifth wheel/turn table kingpin locked?",
        answer: "",
      },
      {
        question: "21. Is the tank free of rust, corrosion and damage?",
        answer: "",
      },
      {
        question: "22. Are the dashboard control panels in good condition?",
        answer: "",
      },
      {
        question: "23. Battery master switch available and functional?",
        answer: "",
      },
      {
        question: "24. Spark arrestor available?",
        answer: "",
      },
      {
        question: "25. Emergency notification number available ?",
        answer: "",
      },
      {
        question: "26. Headlamp, indicator lights and brake light functional?",
        answer: "",
      },
      {
        question: "27. Adjustable seat & head restrain functional?",
        answer: "",
      },
      {
        question: "28. Is the emergency shutdown button functional?",
        answer: "",
      },
      {
        question:
          "29. Mudguards, handrails and API setting available and functioning?",
        answer: "",
      },
      {
        question: "30. Are the reflective stickers in good condition?",
        answer: "",
      },
      {
        question: "31. First Aid Kit available",
        answer: "",
      },
      {
        question: "32. Warning Triangles available",
        answer: "",
      },
      {
        question: "33. Jack And Handle available",
        answer: "",
      },
      {
        question: "34. Wheel Spanner available",
        answer: "",
      }
    ],
    comments: ""
  });

  const [truckPro, setTruckPro] = useState([]);

  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data);
        setTruckPro(res.data.data);
        // console.log(res.data.data.product.productType)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [hide, setHide] = useState(true);

  const handleChange = (e) => {
    console.log(data)
  };

  const questions = new Map()
  questions.set(0, "Vehicle License")
  questions.set(1, 'Hackney Permit')
  questions.set(2, 'Proof of Ownership')
  questions.set(3, 'Carriage Permit')
  questions.set(4, 'Road Worthiness')
  questions.set(5, 'Heavy Duty Permit')
  questions.set(6, 'All of Registration Number')
  questions.set(7, 'CMR')
  questions.set(8, 'Info Req for Clearance/Attestation')
  questions.set(9, 'Carriage Permit')
  questions.set(10, 'Truck Insurance')
  questions.set(11, 'Heavy Duty Permit')

  const mutateField = (type, valToChange, newVal) => {
    let i = 0
    while (i < data.truckDocuments.length) {
      if (data.assessments[i].type === type) {
        data.assessments[i][valToChange] = newVal
        break;
      }
      i += 1
    }
    setData({ ...data })
  }


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
            value={data.truckProgrammingId}
            onChange={(e) =>
              setData({
                ...data,
                truckProgrammingId: e.target.value,
              })
            }
          >
            <option value=''>
              Select Truck Numbers
            </option>
            {truckPro.map((item) => (
              <option value={item.truckProgrammingId} key={item.truckProgrammingId}>
                {item.truck.truckNumber}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="">
          Product Type
          <br />
          <div className="border border-primary h-12 rounded-lg grid items-center px-4">
            {truckPro.filter((i) => i.truckProgrammingId === data.truckProgrammingId)
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
      {/* {hide && (
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
      )} */}
      <button className="btn btn-primary" onClick={handleChange}>Submit</button>
    </div>
  );
}

export default TifForm;
