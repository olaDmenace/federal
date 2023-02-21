import React, { useState } from "react";

const LPG = ({ data, setData, truckPro }) => {
  const questions = new Map();
  questions.set(
    0,
    "1. Vehicle license, Road worthiness and Insurance Certificates Valid?"
  );

  questions.set(1, " 2. Valid Drivers’ license?");
  questions.set(
    2,
    " 3. Complete PPE? (Hard Helmet, Safety boots, and Hi-Vis clothing, Company T-Shirt and Identity cards)"
  );
  questions.set(3, "4. Assistant Available?");
  questions.set(4, "5. Truck free from oil and gas leaks?");
  questions.set(
    5,
    "6. Windscreen free of cracks and the wipers in good condition?"
  );
  questions.set(6, "7. Is the horn & reverse alarm functional?");
  questions.set(7, "8. Driving mirrors free of cracks and firmly fixed?");
  questions.set(
    8,
    "9. All Tyres including the 2 spares in good condition and of a minimum thread depth of 2mm?"
  );
  questions.set(9, "10. Correct wheel nuts and studs are fitted?");
  questions.set(
    10,
    "11. Seat belts in the truck fitted and functioning properly?"
  );
  questions.set(
    11,
    "12. Does the engine start using the ignition key? (No pushing, non-usage of wires)"
  );
  questions.set(
    12,
    "13. Vehicle equipped with two (unexpired) 9kg fire extinguisher and caution sign?"
  );
  questions.set(13, "14. Vehicle have 2 standard wheel chocks with handles?");
  questions.set(
    14,
    "15. Are the following Hydraulic Jack, Wheel Spanner, Tyre Lifter,  Tyre chains and Padlocks, Tyre Gauge, Tyre Pump Offloading Adaptor,  Towing Chain and Harness present and effective?"
  );
  questions.set(
    15,
    "16. Battery secured and terminals properly tightened? Also state the voltage on each Battery in the comment section (Use the meter provided)"
  );
  questions.set(16, "17. Calibration chart valid?");
  questions.set(17, "18. Emergency shut-off switch functional?");
  questions.set(18, "19. Door handle have handlebars and door staircase?");
  questions.set(19, "20. Fifth wheel/turn table kingpin locked?");
  questions.set(20, "21. Is the tank free of rust, corrosion and damage?");
  questions.set(21, "22. Are the dashboard control panels in good condition?");
  questions.set(22, "23. Battery master switch available and functional?");
  questions.set(23, "24. Spark arrestor available?");
  questions.set(24, "25. Emergency notification number available ?");
  questions.set(
    25,
    "26. Headlamp, indicator lights and brake light functional?"
  );
  questions.set(26, "27. Adjustable seat & head restrain functional?");
  questions.set(27, "28. Is the emergency shutdown button functional?");
  questions.set(
    28,
    "29. Mudguards, handrails and API setting available and functioning?"
  );
  questions.set(29, "30. Are the reflective stickers in good condition?");
  questions.set(30, "31. First Aid Kit available");
  questions.set(31, "32. Warning Triangles available");
  questions.set(32, "33. Jack And Handle available");
  questions.set(33, "34. Wheel Spanner available");

  const mutateField = (type, valToChange, newVal) => {
    let i = 0;
    while (i < data.assessments.length) {
      if (data.assessments[i].type === type) {
        data.assessments[i][valToChange] = newVal;
        break;
      }
      i += 1;
    }
    setData({ ...data });
  };

  // const [tracking, setTracking] = {
  //   truckProgrammingId: "",
  // };
  const [input, setInput] = useState("");

  // const questionsForm = () => {
  //   if (data.assessments[v].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             // value={value}
  //             onChange={(e) => {
  //               mutateField(data.assessments.type, "answer", e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  // };

  return (
    <div>
      <div className="space-y-2">
        {" "}
        <form action="" className="grid text-primary gap-5 w-full">
          <h2 className="text-xl -mb-4 text-primary font-semibold">
            TIF - LPG
          </h2>
          <hr />
          <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Trip ID
              <br />
              <input
                class="input input-primary w-full"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="">
              Delivery Officer
              <br />
              <div className="border border-primary h-12 rounded-lg grid items-center">
                {truckPro.map((item) => (
                  <p key={item.truck.deliveryOfficerId} className="px-4">
                    {item.truck.deliveryOfficer}
                  </p>
                ))}
              </div>
            </label>
            <label htmlFor="">
              Journey Officer
              <br />
              <div className="border border-primary h-12 rounded-lg grid items-center">
                {truckPro.map((item) => (
                  <p key={item.truck.journeyOfficerId} className="px-4">
                    {item.truck.journeyOfficer}
                  </p>
                ))}
              </div>
            </label>
            <label htmlFor="">
              Logistics Coordinator
              <br />
              <div className="border border-primary h-12 rounded-lg grid items-center">
                {truckPro.map((item) => (
                  <p key={item.truck.logisticsCoordinatorId} className="px-4">
                    {item.truck.logisticsCoordinator}
                  </p>
                ))}
              </div>
            </label>
            <label htmlFor="">
              Inspection Date
              <br />
              <input
                class="input input-primary w-full"
                type="date"
                name=""
                id=""
              />
            </label>
          </fieldset>
          <hr />

          <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end">
            {data.assessments.map((v, i) => (
              <label htmlFor="" type={v.type} key={i}>
                {questions?.get(v?.type)}
                <br />
                <select
                  className="w-full select select-primary"
                  name=""
                  id=""
                  value={v.answer}
                  onChange={(e) => {
                    mutateField(v.type, "answer", e.target.value);
                    setInput(e.target.value);
                  }}
                >
                  <option value="yes"> Yes</option>
                  <option value="no"> No</option>
                  <option value="others"> Others</option>
                </select>
                {v.answer === "others" && (
                  <label>
                    Specify Others
                    <text
                      type="text"
                      className="w-full input input-primary"
                      placeholder="Others"
                      value={v.answer}
                      onChange={(e) => {
                        mutateField(v.type, "answer", e.target.value);
                        setInput(e.target.value);
                      }}
                    />
                  </label>
                )}
              </label>
            ))}

            <label htmlFor="">
              General comments
              <br />
              <textarea
                className="w-full textarea textarea-primary"
                name=""
                type="text"
                id="  "
                rows="5"
                value={data.comments}
                onChange={(e) => {
                  let comment = { ...data };
                  comment.comments = e.target.value;
                  console.log("data to update ", comment);
                  setData(comment);
                }}
              ></textarea>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default LPG;
