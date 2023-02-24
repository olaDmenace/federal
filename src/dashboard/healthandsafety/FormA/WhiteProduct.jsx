import React, { useState } from "react";

const WhiteProduct = ({
  data,
  setData,
  truckPro,
  truckAssess,
  setTruckAssess,
  assessments,
  setAssessments,
}) => {
  // const [tracking, setTracking] = {
  //   truckProgrammingId: "",
  // };

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
  // const Select = ({ assessments, setAssessments }) => {
  //   return (
  //     <select
  //       className="w-full select select-primary"
  //       name=""
  //       id=""
  //       value={assessments.answer}
  //       onChange={(e) => {
  //         setAssessments({
  //           ...assessments,
  //           answer: e.target.value,
  //         });
  //       }}
  //     >
  //       <option value="yes"> Yes</option>
  //       <option value="no"> No</option>
  //       <option value="others"> Others</option>
  //     </select>
  //   );
  // };
  const [assessments1, setAssessments1] = useState("");
  const handle = (e) => {
    setAssessments1(e.target.value);
    console.log(e.target.value);
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
                  .filter(
                    (i) => i.truckProgrammingId === data.truckProgrammingId
                  )
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
                  .filter(
                    (i) => i.truckProgrammingId === data.truckProgrammingId
                  )
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
                  .filter(
                    (i) => i.truckProgrammingId === data.truckProgrammingId
                  )
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
                  .filter(
                    (i) => i.truckProgrammingId === data.truckProgrammingId
                  )
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
            {truckAssess.map((item) => (
              <label htmlFor="" key={item.questionId}>
                {item.question}
                <br />
                <select
                  className="w-full select select-primary"
                  name=""
                  id=""
                  value={assessments.answer}
                  onChange={(e) => {
                    setAssessments({
                      ...assessments,
                      answer: e.target.value,
                    });
                  }}
                >
                  <option value="yes"> Yes</option>
                  <option value="no"> No</option>
                  <option value="others"> Others</option>
                </select>

                {/* {assessments.answer === "others" && (
                  <label>
                    Specify Others
                    <br />
                    <textarea
                      type="text"
                      className="w-full textarea textarea-primary"
                      rows="3"
                      value={assessments.answer}
                      onChange={(e) =>
                        setAssessments({
                          ...assessments,
                          answer: e.target.value,
                        })
                      }
                    ></textarea>
                  </label>
                )} */}
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
                value={assessments.comments}
                onChange={(e) => {
                  let comment = { ...assessments };
                  comment.comments = e.target.value;
                  console.log("data to update ", comment);
                  setAssessments(comment);
                }}
              ></textarea>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default WhiteProduct;
