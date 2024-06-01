import { SearchIcon } from "@heroicons/react/outline";
import { FilterIcon } from "@heroicons/react/solid";
import React from "react";
import TruckStatus from "./TruckStatus";
import Map from "../../images/Map.png";

function TruckVisibiltyReport() {
  const trucks = [
    {
      id: "1",
      name: "AXL 001",
      location: {
        name: "Ibafo Deposit",
        kms: 21305,
      },
      date: "2023-04-07T12:30:00Z",
      operationalStatus: "Running",
      datStatus: "Active",
    },
    {
      id: "2",
      name: "AXL 002",
      location: {
        name: "Ota Deposit",
        kms: 32040,
      },
      date: "2023-04-07T14:00:00Z",
      operationalStatus: "Stopped",
      datStatus: "Inactive",
    },
    {
      id: "3",
      name: "AXL 003",
      location: {
        name: "Lekki Deposit",
        kms: 10450,
      },
      date: "2023-04-07T09:45:00Z",
      operationalStatus: "Running",
      datStatus: "Active",
    },
  ];
  return (
    <div className="md:flex gap-5 py-8">
      <div className="space-y-3 basis-1/2 bg-white p-5 rounded-lg">
        <h2 className="text-3xl text-primary font-semibold">
          Truck Visibilty Report
        </h2>
        <div className="relative flex items-center gap-3">
          <input
            className="input input-primary flex-grow w-auto rounded-full"
            placeholder="Search"
            type="search"
            name=""
            id=""
          />
          <SearchIcon className="h-6 absolute text-primary top-3 right-14" />
          <FilterIcon className="h-8 text-primary" />
        </div>
        <div className="max-h-96 scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-red-700 px-3 space-y-3 py-5">
          <div className="flex justify-around border-b">
            <p className="border-b text-center">All</p>
            <p className="text-center">Available</p>
            <p className="text-center">Unavailable</p>
          </div>

          {trucks.map((truck, index) => (
            <TruckStatus key={index} truck={truck} />
          ))}
        </div>
        <button className="btn btn-primary float-right">Donwload Report</button>
      </div>
      <div className="basis-1/2">
        <img className="h-full" src={Map} alt="" />
      </div>
    </div>
  );
}

export default TruckVisibiltyReport;
