import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import LPG from "../FormB/LPG";
import LPG2 from "../LPG2";
import endpoint from "../../../utils/endpoints/endpoint";

function Tif2({ truckPro, setTruckPro, data, setData }) {
  PageTitle("Axle & Cartage - Pre Trip Inspection Form");
  const [form, setForm] = useState(0);
  const [inspect, setInspect] = useState([]);

  useEffect(() => {
    endpoint
      .post("/truck/inspect")
      .then((res) => {
        console.log(res.data.data);
        setInspect(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data);
        setTruckPro(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activeForm = () => {
    if (form === 0) {
      return (
        <LPG
          data={data}
          setData={setData}
          truckPro={truckPro}
          setTruckPro={setTruckPro}
        />
      );
    } else if (form === 1) {
      return <LPG2 data={data} setData={setData} />;
    }
  };

  const truck = "/truck/inspect";

  // Handles the submit event
  function handleSubmit(e) {
    console.log(data);
    endpoint
      .post(truck, data)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="space-y-2 grid">
      <hr />
      <ul className="steps steps-horizontal w-full pt-5">
        <li className="step step-primary"></li>
        <li className={`step ${form === 1 ? `step-primary` : `step`}`}></li>
      </ul>
      {/* <div className="flex gap-10 pb-10 overflow-x-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900"> */}

      <div>{activeForm()}</div>

      {/* </div> */}
      <div className="btn-group mx-auto pt-5">
        <button
          disabled={form === 0}
          onClick={() => {
            setForm((currForm) => currForm - 1);
          }}
          className="btn btn-active"
        >
          Prev
        </button>
        <button
          className="btn btn-active"
          onClick={() => {
            form === 1 ? handleSubmit() : setForm((currForm) => currForm + 1);
          }}
        >
          {form === 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Tif2;
