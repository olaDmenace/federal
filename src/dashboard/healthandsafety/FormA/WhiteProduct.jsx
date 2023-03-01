import React, { useState } from "react";

const WhiteProduct = ({
  data,
  truckPro,
  assessments,
  setAssessment,
  truckProgrammingId,
  truckAssess,
}) => {
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
    if (question === "q1" && assessments[0].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[0].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[0].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q2" && assessments[1].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[1].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[1].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q3" && assessments[2].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[2].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[2].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q4" && assessments[3].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[3].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[3].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q5" && assessments[4].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[4].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[4].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q6" && assessments[5].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[5].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[5].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q7" && assessments[6].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[6].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[6].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q8" && assessments[7].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[7].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[7].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q9" && assessments[8].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[8].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[8].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q10" && assessments[9].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[9].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[9].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q11" && assessments[10].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[10].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[10].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q12" && assessments[11].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[11].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[11].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q13" && assessments[12].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[12].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[12].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q14" && assessments[13].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[13].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[13].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q15" && assessments[14].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[14].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[14].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
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
        {" "}
        <form action="" className="grid text-primary gap-5 w-full">
          <h2 className="text-xl -mb-4 text-primary font-semibold">
            TIF - WHITE PRODUCT
          </h2>
          <hr />
          <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
            <label htmlFor="">
              Trip ID
              <br />
              <div className="border border-primary h-12 rounded-lg grid items-center">
                {truckPro
                  .filter((i) => i.truckProgrammingId === truckProgrammingId)
                  .map((item) => (
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
                {truckPro
                  .filter((i) => i.truckProgrammingId === truckProgrammingId)
                  .map((item) => (
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
                {truckPro
                  .filter((i) => i.truckProgrammingId === truckProgrammingId)
                  .map((item) => (
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
                {truckPro
                  .filter((i) => i.truckProgrammingId === truckProgrammingId)
                  .map((item) => (
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
                value={assessments[0].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];

                  ques[0].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="others">others</option>
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
                value={assessments[1].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[1].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[2].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[2].answer = e.target.value;
                  setAssessment(ques);
                }}
              >
                {" "}
                <option value=""> select</option>{" "}
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
                value={assessments[3].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[3].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[4].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[4].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[5].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[5].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[6].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[6].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[7].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[7].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[8].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[8].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[9].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[9].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[10].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[10].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[11].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[11].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[12].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[12].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[13].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[13].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
                value={assessments[14].answer}
                onChange={(e) => {
                  console.log("selected >> ", e.target.value);
                  // let value = e.target.value;
                  let ques = [...assessments];
                  ques[14].answer = e.target.value;

                  setAssessment(ques);
                }}
              >
                <option value=""> select</option>
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
export default WhiteProduct;
