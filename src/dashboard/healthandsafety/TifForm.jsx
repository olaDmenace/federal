import React, { useState, useEffect } from "react";
import PageTitle from "../../utils/PageTitle";
import FormTitle from "../FormTitle";

import endpoint from "../../utils/endpoints/endpoint";

import LPG from "./FormB/LPG";
import WhiteProduct from "./FormA/WhiteProduct";

function TifForm() {
  PageTitle("Axle & Cartage - TifForm");

  const [data, setData] = useState({
    truckProgrammingId: "",
    productType: "",
    assessments: [
      {
        type: 0,
        question: "",
        answer: "",
      },
      {
        type: 1,
        question: "",
        answer: "",
      },
      {
        type: 2,
        question: "",
        answer: "",
      },
      {
        type: 3,
        question: "",
        answer: "",
      },
      {
        type: 4,
        question: "",
        answer: "",
      },
      {
        type: 5,
        question: "",
        answer: "",
      },
      {
        type: 6,
        question: "",
        answer: "",
      },
      {
        type: 7,
        question: "",
        answer: "",
      },
      {
        type: 8,
        question: "",
        answer: "",
      },
      {
        type: 9,
        question: "",
        answer: "",
      },
      {
        type: 10,
        question: "",
        answer: "",
      },
      {
        type: 11,
        question: "",
        answer: "",
      },
      {
        type: 12,
        question: "",
        answer: "",
      },
      {
        type: 13,
        question: "",
        answer: "",
      },
      {
        type: 14,
        question: "",
        answer: "",
      },
      {
        type: 15,
        question: "",
        answer: "",
      },
      {
        type: 16,
        question: "",
        answer: "",
      },
      {
        type: 17,
        question: "",
        answer: "",
      },
      {
        type: 18,
        question: "",
        answer: "",
      },
      {
        type: 19,
        question: "",
        answer: "",
      },
      {
        type: 20,
        question: "",
        answer: "",
      },
      {
        type: 21,
        question: "",
        answer: "",
      },
      {
        type: 22,
        question: "",
        answer: "",
      },
      {
        type: 23,
        question: "",
        answer: "",
      },
      {
        type: 24,
        question: "",
        answer: "",
      },
      {
        type: 25,
        question: "",
        answer: "",
      },
      {
        type: 26,
        question: "",
        answer: "",
      },
      {
        type: 27,
        question: "",
        answer: "",
      },
      {
        type: 28,
        question: "",
        answer: "",
      },
      {
        type: 29,
        question: "",
        answer: "",
      },
      {
        type: 30,
        question: "",
        answer: "",
      },
      {
        type: 31,
        question: "",
        answer: "",
      },
      {
        type: 32,
        question: "",
        answer: "",
      },
      {
        type: 33,
        question: "",
        answer: "",
      },
    ],
    comments: "",
  });

  const [truckPro, setTruckPro] = useState([]);

  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res.data.data);
        setTruckPro(res.data.data);
        // console.log(res.data.data.product.productType)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          {truckPro.filter((i) => i.product.productType === "LFG") ? (
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
            />
          )}
          {handleChange}
        </div>
      }
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}

export default TifForm;
