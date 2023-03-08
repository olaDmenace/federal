import React, { useState, useEffect } from "react";
import PageTitle from "../../../utils/PageTitle";
import FormTitle from "../../FormTitle";
import endpoint from "../../../utils/endpoints/endpoint";
import { ThumbUpIcon } from "@heroicons/react/solid";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/outline";
import PopUp from "../../../utils/PopUp";

function TruckAssignment() {
  PageTitle("Axle & Cartage - Truck Assigment");

  const [trucks, setTrucks] = useState([]);
  const [truckId, setTruckId] = useState("");
  const [deliveryOfficerId, setDeliveryOfficerId] = useState("");
  const [journeyOfficerId, setjourneyOfficerId] = useState("");
  const [logisticsCoordinatorId, setlogisticsCoordinatorId] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  console.log(journeyOfficerId, "journey");
  console.log(deliveryOfficerId, "delivery");
  console.log(logisticsCoordinatorId, "logistics");
  // console.log(truckId, "truck");
  // console.log(endDate, "enddate");
  // console.log(startDate, "startdate");
  const [delivery, setDelivery] = useState([]);
  const [journey, setJourney] = useState([]);
  const [logistics, setLogistics] = useState([]);
  useEffect(() => {
    // SearchTerm = delivery & UserType=1 & PageNumber=1 & PageSize=1
    endpoint
      .get("/user?UserType=1")
      .then((res) => {
        console.log(res.data.data);
        setDelivery(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    endpoint
      .get("user?UserType=2")
      .then((res) => {
        console.log(res.data.data);
        setJourney(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    endpoint
      .get("user?UserType=3")
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setLogistics(res.data.data);
      })
      .catch((err) => {
        console.log(err);
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

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      deliveryOfficerId,
      logisticsCoordinatorId,
      journeyOfficerId,
      truckId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    };
    console.log(data, "data loged");
    setDeliveryOfficerId("");
    setlogisticsCoordinatorId("");
    setjourneyOfficerId("");
    setTruckId("");
    setstartDate("");
    setendDate("");
    endpoint
      .post("/truck/assign", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setShow(true);
          setReply({
            icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
            message: res.data.message,
          });
        } else {
          setReply({
            icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
            message: res.data.message,
          });
        }
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dateChangeHandlerStart = (event) => {
    setstartDate(event.target.value);
  };
  const dateChangeHandlerEnd = (event) => {
    setendDate(event.target.value);
  };

  // const onclick = () => {
  //   const selectedTruck = trucks.find((item) => item.truckId === truckId);
  //   if (selectedTruck) {
  //     setDeliveryOfficerId(selectedTruck.deliveryOfficerId);
  //     setjourneyOfficerId(selectedTruck.journeyOfficerId);
  //     setlogisticsCoordinatorId(selectedTruck.logisticsCoordinatorId);
  //   }
  // };
  const closePop = () => {
    setIsLoading(!isLoading);
    setShow(false);
  };
  const location = useLocation();
  return (
    <div>
      <FormTitle Title={"Truck Assignment"} />
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
      <hr />
      <form
        action=""
        onSubmit={handleSubmit}
        // onClick={onclick}
        className="grid gap-5 text-primary my-5"
      >
        <fieldset className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 items-end">
          <label htmlFor="">
            Truck Number
            <br />
            <select
              className="select select-primary w-full"
              value={truckId}
              onChange={(e) => setTruckId(e.target.value)}
              type="text"
              name=""
            >
              <option value="">Select Reason</option>
              {trucks.map((item) => (
                <option value={item.truckId} key={item.truckId}>
                  {item.truckNumber}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="">
            Journey Officer
            <select
              value={journeyOfficerId}
              onChange={(e) => setjourneyOfficerId(e.target.value)}
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option value="">Select Journey Officer</option>
              {journey.map((item) => (
                <option key={item.userId} value={item.userId}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="">
            Logistics Coordinator
            <select
              value={logisticsCoordinatorId}
              onChange={(e) => setlogisticsCoordinatorId(e.target.value)}
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option value="">Select Journey Officer</option>
              {logistics.map((item) => (
                <option key={item.userId} value={item.userId}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="">
            Delivery Officer
            <select
              value={deliveryOfficerId}
              onChange={(e) => setDeliveryOfficerId(e.target.value)}
              className="select select-primary w-full"
              name=""
              id=""
            >
              <option value="">Select Delivery Officer </option>
              {delivery.map((item) => (
                <option key={item.userId} value={item.userId}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="">
            Start Date/Time
            <input
              className="w-full input input-primary"
              value={startDate}
              onChange={dateChangeHandlerStart}
              type="date"
              name=""
              id=""
            />
          </label>
          <label htmlFor="">
            End Date/Time
            <input
              className="w-full input input-primary"
              value={endDate}
              onChange={dateChangeHandlerEnd}
              type="date"
              name=""
              id=""
            />
          </label>
        </fieldset>
        {location.pathname === "/dashboard/TruckAssignment" ? (
          <div className="mx-auto">
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <button class="btn btn-primary mx-auto" type="submit">
                Submit
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default TruckAssignment;
