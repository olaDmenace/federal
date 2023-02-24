import React, { useState, useEffect } from "react";
import PageTitle from "../../utils/PageTitle";
import FormTitle from "../FormTitle";

import endpoint from "../../utils/endpoints/endpoint";

import LPG from "./FormB/LPG";
import WhiteProduct from "./FormA/WhiteProduct";

const TifForm = () => {
  PageTitle("Axle & Cartage - TifForm");

  const [data, setData] = useState({
    truckProgrammingId: "",
    productType: "",
    deliveryOfficer: "",
    journeyOfficer: "",
    currentTripId: "",
    comments: "",
  });
  const [assessments, setAssessments] = useState({
    questionId: "",
    answer: "",
  });

  const [truckPro, setTruckPro] = useState([]);
  const [truckAssess, setTruckAssess] = useState([]);

  useEffect(() => {
    getTruckNumbers();
    Assessments();
  }, []);
  const getTruckNumbers = () => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data, "response");
        setTruckPro(res.data.data);

        // console.log(res.data.data.product.productType)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Assessments = () => {
    endpoint
      .get("/truck/assessments/740591ff-7cfb-4b8e-bce2-425f1871adab")
      .then((res) => {
        console.log(res.data.data, "assessment success");
        setTruckAssess(res.data.data);
        // console.log(res.data.data.product.productType)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [hide, setHide] = useState(true);

  const handleChange = (e) => {
    console.log(data);
  };

  return (
    <div className="space-y-2">
      <FormTitle Title={"Pre Trip Inspection Form"} />
      <hr className="pb-5" />

      <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
        <label htmlFor="">
          Truck Numbers
          <select
            type="text"
            className="w-full select select-primary"
            name=""
            id=""
            value={data.truckProgrammingId}
            onChange={(e) =>
              setData({
                ...data,
                truckProgrammingId: e.target.value,
              })
            }
          >
            <option value="">Select Truck Numbers</option>
            {truckPro.map((item) => (
              <option
                value={item.truckProgrammingId}
                key={item.truckProgrammingId}
              >
                {item.truck.truckNumber}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="">
          Product Type
          <br />
          <div className="border border-primary h-12 rounded-lg grid items-center px-4">
            {truckPro
              .filter((i) => i.truckProgrammingId === data.truckProgrammingId)
              .map((item) => (
                <p key={item.product.productId}>{item.product.productType}</p>
              ))}
          </div>
        </label>

        <label htmlFor="">
          Odometer Reading
          <input
            className="w-full input input-primary"
            placeholder="1234"
            type="text"
            name=""
            id=""
          />
        </label>
      </fieldset>
      {
        <div>
          {truckPro.filter((i) => i.product.productType === "LFG").length >
          0 ? (
            <LPG
              data={data}
              setData={setData}
              truckPro={truckPro}
              setTruckPro={setTruckPro}
            />
          ) : (
            <WhiteProduct
              data={data}
              setData={setData}
              truckPro={truckPro}
              setTruckPro={setTruckPro}
              truckAssess={truckAssess}
              setTruckAssess={setTruckAssess}
              assessments={assessments}
              setAssessments={setAssessments}
            />
          )}
          {handleChange}
        </div>
      }
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};

export default TifForm;
