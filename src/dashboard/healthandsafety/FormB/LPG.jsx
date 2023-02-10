import React, { useState } from "react";

const LPG = ({ data, setData, trucks, truckPro, setTruckPro }) => {
  // const [tracking, setTracking] = {
  //   truckProgrammingId: "",
  // };
  const [otherQ1, setOtherQ1] = useState("");
  const [otherQ2, setOtherQ2] = useState("");
  const [otherQ3, setOtherQ3] = useState("");
  const [otherQ4, setOtherQ4] = useState("");
  const [otherQ5, setOtherQ5] = useState("");
  const [otherQ6, setOtherQ6] = useState("");
  const [otherQ7, setOtherQ7] = useState("");
  const [otherQ8, setOtherQ8] = useState("");
  const [otherQ9, setOtherQ9] = useState("");
  const [otherQ10, setOtherQ10] = useState("");
  const [otherQ11, setOtherQ11] = useState("");
  const [otherQ12, setOtherQ12] = useState("");
  const [otherQ13, setOtherQ13] = useState("");
  const [otherQ14, setOtherQ14] = useState("");
  const [otherQ15, setOtherQ15] = useState("");

  console.log("question >> ", data);

  // const submitForm = () => {
  //   let data = {
  //     truckProgrammingId: "",
  //     assessments: [...data],
  //   };
  // };
  // const DynamisLicense = () => {
  //   if (data.truckId === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           hello world
  //           <input />
  //         </label>
  //       </>
  //     );
  //   }
  // };

  const questionsForm = (question) => {
    if (question === "q1" && data.q1.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ1}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q1.answer = e.target.value;
                setData(ques);
                setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q2" && data.q2.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ2}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q2.answer = e.target.value;
                setData(ques);
                setOtherQ2(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q3" && data.q3.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ3}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q3.answer = e.target.value;
                setData(ques);
                setOtherQ3(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q4" && data.q4.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ4}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q4.answer = e.target.value;
                setData(ques);
                setOtherQ4(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q5" && data.q5.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ5}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q5.answer = e.target.value;
                setData(ques);
                setOtherQ5(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q6" && data.q6.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ6}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q6.answer = e.target.value;
                setData(ques);
                setOtherQ6(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q7" && data.q7.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ7}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q7.answer = e.target.value;
                setData(ques);
                setOtherQ7(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q8" && data.q8.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ8}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q8.answer = e.target.value;
                setData(ques);
                setOtherQ8(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q9" && data.q9.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ9}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q9.answer = e.target.value;
                setData(ques);
                setOtherQ9(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q10" && data.q10.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ10}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q10.answer = e.target.value;
                setData(ques);
                setOtherQ10(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q11" && data.q11.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ11}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q11.answer = e.target.value;
                setData(ques);
                setOtherQ11(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q12" && data.q12.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ12}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q12.answer = e.target.value;
                setData(ques);
                setOtherQ12(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q13" && data.q13.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ13}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q13.answer = e.target.value;
                // setData(ques);
                setOtherQ13(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q14" && data.q14.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ14}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q14.answer = e.target.value;
                // setData(ques);
                setOtherQ14(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q15" && data.q15.answer == "others") {
      return (
        <>
          <label>
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ15}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q15.answer = e.target.value;
                setData(ques);
                setOtherQ15(value);
              }}
            />
          </label>
        </>
      );
    }
  };

  return (
    <div>
      <div className="space-y-2">
        <form action="" className="grid text-primary gap-5 w-full">
          <h2 className="text-xl -mb-4 text-primary font-semibold">
            TIF - LPG
          </h2>
          <hr />
          <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Trip ID
              <br />
              <div className="border border-primary h-12 rounded-lg grid items-center">
                {truckPro.map((item) => (
                  <p key={item.truck.currentTripId} className="px-4">
                    {item.truck.currentTripId}
                  </p>
                ))}
              </div>
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
            <label htmlFor="">
              {data.q1.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q1.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q1.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
            </label>
            {questionsForm("q1")}

            <label htmlFor="">
              {data.q2.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q2.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q2.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
            </label>
            {questionsForm("q2")}
            <label htmlFor="">
              {data.q3.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q3.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q3.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q3")}
            </label>
            <label htmlFor="">
              {data.q4.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q4.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q4.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q4")}
            </label>
            <label htmlFor="">
              {data.q5.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q5.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q5.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q5")}
            </label>
            <label htmlFor="">
              {data.q6.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q6.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q6.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q6")}
            </label>
            <label htmlFor="">
              {data.q7.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q7.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q7.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q7")}
            </label>
            <label htmlFor="">
              {data.q8.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q8.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q8.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q8")}
            </label>
            <label htmlFor="">
              {data.q9.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q9.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q9.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q9")}
            </label>
            <label htmlFor="">
              {data.q10.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q10.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q10.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q10")}
            </label>
            <label htmlFor="">
              {data.q11.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q11.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q11.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q11")}
            </label>
            <label htmlFor="">
              {data.q12.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q12.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q12.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q12")}
            </label>
            <label htmlFor="">
              {data.q13.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q13.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q13.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q13")}
            </label>
            <label htmlFor="">
              {data.q14.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q14.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q14.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q14")}
            </label>
            <label htmlFor="">
              {data.q15.question}
              <br />
              <select
                className="w-full select select-primary"
                name=""
                id=""
                value={data.q15.answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = { ...data };
                  ques.q15.answer = e.target.value;
                  console.log("data to update ", ques);
                  setData(ques);
                  console.log("data to update ", data);
                }}
              >
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others"> Others</option>
              </select>
              {questionsForm("q15")}
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default LPG;
