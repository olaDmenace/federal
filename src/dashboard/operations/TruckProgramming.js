import FormTitle from "../FormTitle";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoints/endpoint";
import { useDispatch } from "react-redux";
import PageTitle from "../../utils/PageTitle";
import { truck } from "../../utils/features/truckSlice";

function TruckProgramming() {
  PageTitle("Axle & Cartage - Truck Programming");

  const dispatch = useDispatch();

  const [data, setData] = useState({
    truckId: " ",
    isDedicatedDestination: true,
    customers: "",
    loadingLocationId: "",
    returningLocationId: "",
    tripType: 0,
    finalDestination: "",
    destinationState: "",
    productId: "",
  });

  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        console.log(res);
        dispatch(truck(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="space-y-2">
      <FormTitle Title={"Truck Programming"} />
      <hr />
      <form action="" className="grid text-primary gap-5 w-full">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Track Number
            <br />
            <select
              class="select select-primary w-full"
              id=""
              value={data.truckId}
              onChange={(e) => setData({ ...data, truckId: +e.target.value })}
              placeholder="ID-112200"
              type="text"
              name=""
            >
              <option value="">Select Reason</option>
              <option value="0">ID-112200</option>
              <option value="1">ID-112200</option>
              <option value="2">ID-112200</option>
              <option value="3">ID-112200</option>
              <option value="4">ID-112200</option>
              <option value="5">ID-112200</option>
            </select>
          </label>
          <label htmlFor="">
            Track Odometer
            <br />
            <input
              class="input input-primary w-full"
              placeholder="27 Km"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Track Milage to Next PM
            <br />
            <input
              class="input input-primary w-full"
              placeholder="4 mpg"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Next PM Due Date
            <br />
            <input
              class="input input-primary w-full"
              placeholder="27Km"
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Truck Capacity
            <br />
            <input
              class="input input-primary w-full"
              placeholder="35,000 LTRs"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Volume Unit
            <br />
            <input
              class="input input-primary w-full"
              placeholder="MT, KG, LTR"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Brand
            <br />
            <input
              class="input input-primary w-full"
              placeholder="ISUZU"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Product Type
            <br />
            <input
              class="input input-primary w-full"
              placeholder="PMS"
              type="text"
              name=""
              id=""
              value={data.productId}
              onChange={(e) => setData({ ...data, productId: e.target.value })}
            />
          </label>
          <label htmlFor="" className="relative">
            Current Position
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Lorem Depot"
              type="text"
              name=""
              id=""
            />
            <LocationMarkerIcon className="srtoke-1 h-6 absolute top-9 right-4" />
          </label>
          <label htmlFor="">
            Dedicated Destination
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.isDedicatedDestination}
              onChange={(e) =>
                setData({ ...data, isDedicatedDestination: +e.target.value })
              }
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </label>
          <label htmlFor="">
            Programmed Destination
            <br />
            <input
              class="input input-primary w-full"
              placeholder="40, Toyin Street, Ikeja"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Programmed Trip Type
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.tripType}
              onChange={(e) => setData({ ...data, tripType: e.target.value })}
            >
              <option selected disabled>
                Trip Type
              </option>
            </select>
          </label>
          <label htmlFor="">
            Bridging Depot
            <br />
            <select class="select select-primary w-full" name="" id="">
              <option selected disabled>
                354 Oshodi
              </option>
            </select>
          </label>
          <label htmlFor="">
            Restrictions
            <br />
            <select class="select select-primary w-full" name="" id="">
              <option selected disabled>
                Select Restrictions
              </option>
            </select>
          </label>
          <label htmlFor="">
            Truck Loading Configuration
            <br />
            <select class="select select-primary w-full" name="" id="">
              <option selected disabled>
                Select Loading Position
              </option>
            </select>
          </label>
          <label htmlFor="">
            Loading Location
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.loadingLocationId}
              onChange={(e) =>
                setData({ ...data, loadingLocationId: e.target.value })
              }
            >
              <option>34, Muritala Muhammed</option>
            </select>
          </label>
          <label htmlFor="">
            Returning Destination
            <br />
            <select
              class="select select-primary w-full"
              name=""
              id=""
              value={data.returningLocationId}
              onChange={(e) =>
                setData({ ...data, returningLocationId: e.target.value })
              }
            >
              <option value="1" selected disabled>
                Select Returning Destination
              </option>
            </select>
          </label>
        </div>
        <fieldset className="grid md:grid-cols-2 gap-3 w-full">
          <label htmlFor="">
            Journey Officer
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Jane Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Logistics Officer
            <br />
            <input
              class="input input-primary w-full"
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Delivery Officer
            <br />
            <input
              class="input input-primary w-full"
              placeholder="John Smith"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Trip Officer
            <br />
            <input
              class="input input-primary w-full"
              placeholder="ID-120021"
              type="text"
              name=""
              id=""
            />
          </label>
        </fieldset>
        <h2 className="text-xl -mb-4 text-primary font-semibold">
          Trip/Customer Details
        </h2>
        <hr />
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-end">
          <label htmlFor="">
            Customer Type
            <br />
            <input
              class="input input-primary w-full"
              type="text"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Customer Name
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Jane Smith"
              type="text"
              name=""
              id=""
              value={data.customers}
              onChange={(e) => setData({ ...data, customers: e.target.value })}
            />
          </label>
          <label htmlFor="">
            Customer Destination State
            <br />
            <input
              class="input input-primary w-full"
              placeholder="Jane Smith"
              type="text"
              name=""
              id=""
              value={data.destinationState}
              onChange={(e) =>
                setData({ ...data, destinationState: e.target.value })
              }
            />
          </label>
          <label htmlFor="">
            Programmed Number of Customers
            <br />
            <input
              class="input input-primary w-full"
              type="number"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            Programmed Business Area (Final Destination)
            <br />
            <input
              class="input input-primary w-full"
              type="text"
              name=""
              id=""
              value={data.finalDestination}
              onChange={(e) =>
                setData({ ...data, finalDestination: e.target.value })
              }
            />
          </label>
          <label htmlFor="">
            Current Truck Operational Status <br />
            <select class="select select-primary w-full" name="" id="">
              <option selected disabled>
                Select Status
              </option>
            </select>
          </label>
        </fieldset>
        <button
          onClick={handleSubmit}
          class="btn btn-primary mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TruckProgramming;
