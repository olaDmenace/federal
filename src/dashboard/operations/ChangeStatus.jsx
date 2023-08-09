import React, { useEffect, useState } from "react";
import FormTitle from "../FormTitle";
import PageTitle from "../../utils/PageTitle";
import endpoint from "../../utils/endpoints/endpoint";
import PopUp from "../../utils/PopUp";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { XCircleIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";

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
    { id: 0, status: "Assigned" },
    { id: 1, status: "Enroute Depot" },
    { id: 2, status: "At the Loading Depot" },
    { id: 3, status: "Truck Loaded" },
    { id: 4, status: "Enroute Bridging Depot" },
    { id: 5, status: "Enroute Customer Location" },
    { id: 6, status: "At the Depot" },
    { id: 7, status: "Truck Flashed" },
    { id: 8, status: "At The Cutomer 1 Location" },
    { id: 9, status: "At The Cutomer 2 Location" },
    { id: 10, status: "At The Cutomer 3 Location" },
    { id: 11, status: "Good Delivered to Customer 1" },
    { id: 12, status: "Good Delivered to Customer 2" },
    { id: 13, status: "Good Delivered to Customer 3" },
    { id: 14, status: "Inbound" },
    { id: 15, status: "End Journey" },
    { id: 16, status: "Available for Loading" },
  ];

  const [formData, setFormData] = useState({
    programmingId: "",
    status: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  function closePop(e) {
    setShow(false);
    setIsLoading(!isLoading);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    endpoint
      .put("/truck/programme", formData)
      .then((res) => {
        setShow(!show);
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
        console.log(res);
      })
      .catch((err) => {
        setShow(!show);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: err.response.data.message,
        });
        console.log(err);
      });
  };

  return (
    <div className="space-y-2 bg-white p-5 rounded-lg">
      <div>
        <FormTitle Title={"Change Status"} />
        <hr />
        {show && (
          <PopUp>
            {reply.icon}
            <p className="mx-auto text-center text-primary bg-transparent">
              {reply.message}
            </p>
            <button className="btn btn-primary" onClick={(e) => closePop()}>
              Confirm
            </button>
          </PopUp>
        )}
      </div>
      <form className="grid text-primary gap-5 w-full" onSubmit={handleSubmit}>
        <div className="grid gap-3 md:grid-cols-2 items-end">
          <label htmlFor="tripId">
            Trip ID
            <select
              className="select select-primary w-full"
              value={formData.programmingId}
              onChange={(e) =>
                setFormData({ ...formData, programmingId: e.target.value })
              }
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
            <div className="border border-primary h-12 grid items-center px-4 rounded-lg">
              {prog
                .filter((i) => i.truckProgrammingId === formData.programmingId)
                .map((truck) => (
                  <p>{truck.truck.truckNumber}</p>
                ))}
            </div>
          </label>
        </div>
        <label htmlFor="">
          Truck Loading Status
          <select
            name="truckLoading"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: +e.target.value })
            }
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
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <button
            class="btn btn-primary mx-auto"
            type="submit"
            onClick={handleSubmit}
          >
            Change Status
          </button>
        )}
      </form>
    </div>
  );
};

export default ChangeStatus;
