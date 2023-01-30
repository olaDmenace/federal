import React from "react";

const LPG2 = (whiteData, setWhiteData) => {
  return (
    <div>
      {" "}
      <fieldset className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 items-end text-primary">
        <label htmlFor="">
          16. Battery secured and terminals properly tightened? Also state the
          voltage on each Battery in the comment section (Use the meter
          provided)
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          17. Calibration chart valid?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          18. Emergency shut-off switch functional?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select </option>
          </select>
        </label>
        <label htmlFor="">
          19. Door handle have handlebars and door staircase?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          20. Fifth wheel/turn table kingpin locked?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          21. Is the tank free of rust, corrosion and damage?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          22. Are the dashboard control panels in good condition?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          23. Battery master switch available and functional?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          24. Spark arrestor available?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          25. Emergency notification number available ?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          26. Headlamp, indicator lights and brake light functional?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          27. Adjustable seat & head restrain functional?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          28. Is the emergency shutdown button functional?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          29. Mudguards, handrails and API setting available and functioning?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          30. Are the reflective stickers in good condition?
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          31. First Aid Kit available
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          32. Warning Triangles available
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          33. Jack And Handle available
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          34. Wheel Spanner available
          <br />
          <select
            className="w-full select select-primary"
            name=""
            id=""
            value={whiteData.answer}
            onChange={(e) =>
              setWhiteData({ ...whiteData, answer: +e.target.value })
            }
          >
            <option value=""> Select</option>
          </select>
        </label>
        <label htmlFor="">
          General comments
          <br />
          <textarea
            className="w-full textarea textarea-primary"
            name=""
            id="  "
            value={whiteData.comments}
            onChange={(e) =>
              setWhiteData({ ...whiteData, comments: +e.target.value })
            }
            rows="5"
          ></textarea>
        </label>
      </fieldset>
    </div>
  );
};

export default LPG2;
