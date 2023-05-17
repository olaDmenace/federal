import React, { useEffect, useState } from "react";
import { TruckIcon } from "@heroicons/react/outline";
// import Fuel from "../../images/Pump.png";
import endpoint from "../../utils/endpoints/endpoint";
import FormTitle from "../FormTitle";
import { PencilIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { truck } from "../../utils/features/truckSlice";
import { useNavigate } from "react-router-dom";

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

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [editTruck, setEditTruck] = useState()
  const onItemClick = (item) => {
    dispatch(truck())
    navigate('/dashboard/AssetRegister')
  };

  return (
    <div className="bg-white p-5 rounded-lg grid gap-5">
      <div className="md:flex justify-between items-center">
        <FormTitle Title={"Truck Visibility Report"} />
        <button className="btn btn-primary">Download</button>
        {/* <div className="flex gap-5">
          <button className="btn btn-primary">Create</button>
        </div> */}
      </div>
      <div className="table w-full text-primary">
        <div className="table-header-group">
          <div className="table-row bg-primary/10 h-10">
            <div className="table-cell text-left pt-2">Truck</div>
            <div className="table-cell text-left pt-2">Location</div>
            <div className="table-cell text-left pt-2">Functional Status</div>
            <div className="table-cell text-left pt-2">Operational Status</div>
            <div className="table-cell text-left pt-2">DAT Status</div>
            <div className="table-cell text-left pt-2">Date</div>
          </div>
        </div>
        <div className="table-row-group">
          {trucks.map((truck, index) => (
            <div key={truck.truckId} className="table-row">
              <div className="table-cell">{truck.truckNumber}</div>
              <div className="table-cell">{shuffledValues(Location)[index % shuffledValues(Location).length]}</div>
              <div className="table-cell">{shuffledValues(FUNCStatus)[index % shuffledValues(FUNCStatus).length]}</div>
              <div className="table-cell">{truck.operationalStatus}</div>
              <div className="table-cell">{shuffledValues(DATstatus)[index % shuffledValues(DATstatus).length]}</div>
              <div className="table-cell">{formatDate(truck.manufactureDate)}</div>
              <div className="flex gap-5 items-center">
                <div className="table-cell"><PencilIcon className="h-6 border border-primary rounded-sm cursor-pointer" onClick={() => onItemClick()} /></div>
                <div className="table-cell"><TruckIcon className="h-6 border border-primary rounded-sm cursor-pointer" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
