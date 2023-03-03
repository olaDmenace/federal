const Lfg2 = ({
  data,

  assessments,
  setAssessment,
  comments,
  setComment,
}) => {
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
                let ques = [...assessments];
                assessments[15].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[16].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[17].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[18].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[19].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[20].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[21].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[22].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[23].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[24].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[25].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[26].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[27].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[28].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[29].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[30].othersInput = e.target.value;

                setAssessment(ques);
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
                let ques = [...assessments];
                assessments[31].othersInput = e.target.value;

                setAssessment(ques);
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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[15].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[16].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[17].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[18].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[19].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[20].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[21].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[22].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[23].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[24].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[25].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[26].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[27].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[28].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[29].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[30].answer = e.target.value;

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
              // let value = e.target.value;
              let ques = [...assessments];
              assessments[31].answer = e.target.value;

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
          General comments
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

export default Lfg2;
