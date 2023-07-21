import React, { useEffect, useState } from "react";
import FormTitle from "../FormTitle";
import PageTitle from "../../utils/PageTitle";
import endpoint from "../../utils/endpoints/endpoint";

const ChangeStatus = () => {
  PageTitle("Axle & Cartage - Change Status");

  const [prog, setProg] = useState([]);
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    endpoint
      .get("truck/programme")
      .then((res) => {
        console.log(res.data);
        setProg(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  useEffect(() => {
    endpoint
      .get("/truck")
      .then((res) => {
        console.log(res.data.data);
        setTrucks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const statusList = [
    { id: 1, status: "Assigned" },
    { id: 2, status: "Enroute Depot" },
    { id: 3, status: "At the Loading Depot" },
    { id: 4, status: "Truck Loaded" },
    { id: 5, status: "Enroute Bridging Depot" },
    { id: 6, status: "Enroute Customer Location" },
    { id: 7, status: "At the Depot" },
    { id: 8, status: "Truck Flashed" },
    { id: 9, status: "At The Cutomer 1 Location" },
    { id: 10, status: "At The Cutomer 2 Location" },
    { id: 11, status: "At The Cutomer 3 Location" },
    { id: 12, status: "Good Delivered to Customer 1" },
    { id: 13, status: "Good Delivered to Customer 2" },
    { id: 14, status: "Good Delivered to Customer 3" },
    { id: 15, status: "Inbound" },
    { id: 16, status: "End Journey" },
    { id: 17, status: "Available for Loading" },
  ];

  return (
    <div className="space-y-2 bg-white p-5 rounded-lg">
      <div>
        <FormTitle Title={"Change Status"} />
        <hr />
      </div>
      <form className="grid text-primary gap-5 w-full">
        <div className="grid gap-3 md:grid-cols-2 items-end">
          <label htmlFor="tripId">
            Trip ID
            <select
              className="select select-primary w-full"
              //   value={formData.truckProgrammingId}
              //   onChange={(e) =>
              //     setFormData({ ...formData, truckProgrammingId: e.target.value })
              //   }
              name=""
              id="tripId"
            >
              <option value={""}>Select Trip ID</option>
              {prog.map((item) => (
                <option
                  value={item.truckProgrammingId}
                  key={item.truckProgrammingId}
                >
                  {item.tripReference}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="">
            Truck Number
            <br />
            <select
              className="select select-primary w-full"
              // value={data.truckId}
              // onChange={(e) => setData({ ...data, truckId: e.target.value })}
              type="text"
              name=""
            >
              <option value="">Select Truck</option>
              {trucks.map((item) => (
                <option value={item.truckId} key={item.truckId}>
                  {item.truckNumber}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label htmlFor="">
          Truck Loading Status
          {/* <input className="w-full input input-primary" type="text" name="" id="" /> */}
          <select
            name="truckLoading"
            // value={data.status}
            // onChange={(e) => setData({ ...data, status: +e.target.value })}
            id="truckLoading"
            className="select select-primary w-full"
          >
            <option value="">Select Loading Status</option>
            {statusList.map((item) => (
              <option id={item.id} key={item.id} value={item.id}>
                {item.status}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default ChangeStatus;
