import React, { useState } from "react";

const WhiteProduct2 = ({
  data,
  setData,
  assessments,
  setAssessment,
  comments,
  setComment,
}) => {
  const [otherQ16, setOtherQ16] = useState("");
  const [otherQ17, setOtherQ17] = useState("");
  const [otherQ18, setOtherQ18] = useState("");
  const [otherQ19, setOtherQ19] = useState("");
  const [otherQ20, setOtherQ20] = useState("");
  const [otherQ21, setOtherQ21] = useState("");
  const [otherQ22, setOtherQ22] = useState("");
  const [otherQ23, setOtherQ23] = useState("");
  const [otherQ24, setOtherQ24] = useState("");
  const [otherQ25, setOtherQ25] = useState("");
  const [otherQ26, setOtherQ26] = useState("");
  const [otherQ27, setOtherQ27] = useState("");
  const [otherQ28, setOtherQ28] = useState("");
  const [otherQ29, setOtherQ29] = useState("");
  const [otherQ30, setOtherQ30] = useState("");
  const [otherQ31, setOtherQ31] = useState("");
  const [otherQ32, setOtherQ32] = useState("");
  const [otherQ33, setOtherQ33] = useState("");
  const [otherQ34, setOtherQ34] = useState("");

  const questionsForm = (question) => {
    if (question === "q16" && assessments[15].answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[15].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[15].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q17" && assessments[16].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[16].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[16].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);;
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q18" && assessments[17].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[17].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[17].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q19" && assessments[18].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[18].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[18].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q20" && assessments[19].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[19].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[19].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q21" && assessments[20].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[20].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[20].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q22" && assessments[21].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[21].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[21].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q23" && assessments[22].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[22].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[22].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q24" && assessments[23].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[23].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[23].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q25" && assessments[24].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[24].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[24].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q26" && assessments[25].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[25].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[25].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q27" && assessments[26].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[26].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[26].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q28" && assessments[27].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[27].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[27].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q29" && assessments[28].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[28].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[28].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q30" && assessments[29].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[29].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[29].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q31" && assessments[30].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[30].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[30].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q32" && assessments[31].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[31].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[31].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q33" && assessments[32].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[32].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[32].othersInput = e.target.value;
                console.log("data to update ", ques);
                setAssessment(ques);
                // setOtherQ1(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q34" && assessments[33].answer === "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={assessments[33].othersInput}
              onChange={(e) => {
                console.log("selected >> ", e.target.value);
                let ques = [...assessments];
                assessments[33].othersInput = e.target.value;
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
      {" "}
      <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end text-primary">
        <label htmlFor="">
          {data.q16.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[15].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[15].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q16")}
        <label htmlFor="">
          {data.q17.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[16].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[16].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q17")}
        <label htmlFor="">
          {data.q18.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[17].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[17].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q18")}
        <label htmlFor="">
          {data.q19.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[18].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[18].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q19")}
        <label htmlFor="">
          {data.q20.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[19].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[19].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q20")}
        <label htmlFor="">
          {data.q21.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[20].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[20].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q21")}
        <label htmlFor="">
          {data.q22.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[21].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[21].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q22")}
        <label htmlFor="">
          {data.q23.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[22].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[22].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q23")}
        <label htmlFor="">
          {data.q24.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[23].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[23].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q24")}
        <label htmlFor="">
          {data.q25.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[24].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[24].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q25")}
        <label htmlFor="">
          {data.q26.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[25].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[25].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q26")}
        <label htmlFor="">
          {data.q27.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[26].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[26].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q27")}
        <label htmlFor="">
          {data.q28.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[27].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[27].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q28")}
        <label htmlFor="">
          {data.q29.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[28].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[28].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q29")}
        <label htmlFor="">
          {data.q30.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[29].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[29].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q30")}
        <label htmlFor="">
          {data.q31.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[30].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[30].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q31")}
        <label htmlFor="">
          {data.q32.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[31].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[31].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q32")}
        <label htmlFor="">
          {data.q33.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[32].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[32].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q33")}
        <label htmlFor="">
          {data.q34.question}
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={assessments[33].answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[33].answer = e.target.value;
              console.log("data to update ", ques);
              setAssessment(ques);
            }}
          >
            <option value="">select</option>
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q34")}
        <label htmlFor="">
          General comments
          <span className="text-red-700"> *</span>
          <br />
          <textarea
            className="w-full textarea textarea-primary"
            name=""
            type="text"
            id="  "
            rows="5"
            value={comments}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </label>
      </fieldset>
    </div>
  );
};

export default WhiteProduct2;
