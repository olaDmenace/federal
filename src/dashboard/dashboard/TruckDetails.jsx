import React, { useEffect, useState } from "react";
import { LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";
import Fuel from "../../images/Pump.png";
import endpoint from "../../utils/endpoints/endpoint";
import FormTitle from "../FormTitle";

const TruckDetails = () => {
  const [trucks, setTrucks] = useState([]);

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

  function formatDate(arg) {
    const date = new Date(arg);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original array
    const shuffledArray = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

  const DATstatus = [
    "Awaiting Loading",
    "Stock Out",
    "Accidented",
    "Trip Allowance Delay",
    "Preventive Maintenance",
    "Corrective Maintenance",
    "Waybill Delay",
    "Outbound",
  ];

  const OPStatus = [
    "Assigned to Trip",
    "At the loading depot",
    "Booked for maintenance",
    "Truck Loaded",
    "Maintenance Completed",
    "Truck Loaded",
    "Enroute Bridging Depot"
  ]

  const FUNCStatus = [
    "Uptime",
    "Downtime"
  ]

  const Location = [
    "Osun",
    "Kaduna",
    "Kano",
    "Abuja",
    "Lagos",
    "Benin"
  ]
  const shuffledValues = (arg) => shuffleArray(arg); // Shuffle the DATstatus array

  return (
    <div className="bg-white p-5 rounded-lg grid gap-5">
      <div className="md:flex justify-between items-center">
        <FormTitle Title={"Truck Visibility Report"} />
        <div className="flex gap-5">
          <button className="btn btn-primary">Download</button>
          <button className="btn btn-primary">Create</button>
        </div>
      </div>
      <table className="table-auto w-full text-primary gap-10">
        <thead>
          <tr className="">
            <th>Truck</th>
            <th>Location</th>
            <th>Functional Status</th>
            <th>Operational Status</th>
            <th>DAT Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck, index) => (
            <tr key={truck.truckId} className="">
              <td>{truck.truckNumber}</td>
              <td>{shuffledValues(Location)[index % shuffledValues(Location).length]}</td>
              <td>{shuffledValues(FUNCStatus)[index % shuffledValues(FUNCStatus).length]}</td>
              <td>{shuffledValues(OPStatus)[index % shuffledValues(OPStatus).length]}</td>
              <td>{shuffledValues(DATstatus)[index % shuffledValues(DATstatus).length]}</td>
              <td>{formatDate(truck.manufactureDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckDetails;
