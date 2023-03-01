export const questionsForm = ({ assessments, setAssessment, question }) => {
  if (question === "q1" && assessments[0].answer === "others") {
    return (
      <>
        <label>
          {" "}
          Specify Others
          <input
            className="w-full input input-primary"
            placeholder="Others"
            value={assessments[0].others}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              let ques = [...assessments];
              assessments[0].others = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
              // setOtherQ1(value);
            }}
          />
        </label>
      </>
    );
  }
  //   if (question === "q2" && assessments[1].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ2}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ2(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q3" && assessments[2].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ3}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ3(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q4" && assessments[3].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ4}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ4(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q5" && assessments[4].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ5}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ5(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q6" && assessments[5].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ6}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ6(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q7" && assessments[6].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ7}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ7(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q8" && assessments[7].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ8}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ8(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q9" && assessments[8].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ9}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ9(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q10" && assessments[9].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ10}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ10(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q11" && assessments[10].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ11}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ11(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q12" && assessments[11].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ12}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ12(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q13" && assessments[12].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ13}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ13(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q14" && assessments[13].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ14}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ14(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  //   if (question === "q15" && assessments[14].answer === "others") {
  //     return (
  //       <>
  //         <label>
  //           {" "}
  //           Specify Others
  //           <input
  //             className="w-full input input-primary"
  //             placeholder="Others"
  //             value={otherQ15}
  //             onChange={(e) => {
  //               // let value = e.target.value;
  //               // let ques = [ ...assessments ];
  //               // ques[0].answer = e.target.value;
  //               // setAssessment(ques);

  //               setOtherQ15(e.target.value);
  //             }}
  //           />
  //         </label>
  //       </>
  //     );
  //   }
  // };
};
