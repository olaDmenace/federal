import React, { useState } from "react";

const WhiteProduct2 = ({ data, setData }) => {
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
    if (question === "q16" && data.q16.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ16}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q16.answer = e.target.value;
                setData(ques);
                setOtherQ16(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q17" && data.q17.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ17}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q17.answer = e.target.value;
                setData(ques);
                setOtherQ17(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q18" && data.q18.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ18}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q18.answer = e.target.value;
                setData(ques);
                setOtherQ18(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q19" && data.q19.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ19}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q19.answer = e.target.value;
                setData(ques);
                setOtherQ19(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q20" && data.q20.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ20}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q20.answer = e.target.value;
                setData(ques);
                setOtherQ20(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q21" && data.q21.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ21}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q21.answer = e.target.value;
                setData(ques);
                setOtherQ21(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q22" && data.q22.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ22}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q22.answer = e.target.value;
                setData(ques);
                setOtherQ22(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q23" && data.q23.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ23}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q23.answer = e.target.value;
                setData(ques);
                setOtherQ23(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q24" && data.q24.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ24}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q24.answer = e.target.value;
                setData(ques);
                setOtherQ24(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q25" && data.q25.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ25}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q25.answer = e.target.value;
                setData(ques);
                setOtherQ25(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q26" && data.q26.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ26}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q26.answer = e.target.value;
                setData(ques);
                setOtherQ26(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q27" && data.q27.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ27}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q27.answer = e.target.value;
                setData(ques);
                setOtherQ27(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q28" && data.q28.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ28}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q28.answer = e.target.value;
                // setData(ques);
                setOtherQ28(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q29" && data.q29.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ29}
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q29.answer = e.target.value;
                // setData(ques);
                setOtherQ29(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q30" && data.q30.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ30}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q30.answer = e.target.value;
                setData(ques);
                setOtherQ30(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q31" && data.q31.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ31}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q31.answer = e.target.value;
                setData(ques);
                setOtherQ31(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q32" && data.q32.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ32}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q32.answer = e.target.value;
                setData(ques);
                setOtherQ32(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q33" && data.q33.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ33}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q33.answer = e.target.value;
                setData(ques);
                setOtherQ33(value);
              }}
            />
          </label>
        </>
      );
    }
    if (question === "q34" && data.q34.answer == "others") {
      return (
        <>
          <label>
            {" "}
            Specify Others
            <input
              className="w-full input input-primary"
              placeholder="Others"
              value={otherQ34}
              type="text"
              onChange={(e) => {
                let value = e.target.value;
                let ques = { ...data };
                ques.q34.answer = e.target.value;
                setData(ques);
                setOtherQ34(value);
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
            value={data.q16.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q16.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q17.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q17.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q18.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q18.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q19.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q19.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q20.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q20.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q21.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q21.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q22.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q22.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q23.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q23.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q24.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q24.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q25.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q25.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q26.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q26.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q27.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q27.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q28.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q28.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q29.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q29.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q30.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q30.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q31.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q31.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q32.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q32.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q33.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q33.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
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
            value={data.q34.answer}
            onChange={(e) => {
              console.log("selected >> ", e.target.value);
              // let value = e.target.value;
              let ques = { ...data };
              ques.q34.answer = e.target.value;
              console.log("data to update ", ques);
              setData(ques);
              console.log("data to update ", data);
            }}
          >
            {" "}
            <option value="yes"> Yes</option>
            <option value="no"> No</option>
            <option value="others"> Others</option>
          </select>
        </label>
        {questionsForm("q34")}
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
    </div>
  );
};

export default WhiteProduct2;
