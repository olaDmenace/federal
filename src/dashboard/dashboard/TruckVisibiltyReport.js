import { SearchIcon } from "@heroicons/react/outline";
import { FilterIcon } from "@heroicons/react/solid";
import React from "react";
import TruckStatus from "./TruckStatus";
import Map from "../../images/Map.png";

function TruckVisibiltyReport() {
  return (
    <div className="md:flex gap-5 py-8">
      <div className="space-y-3 basis-1/2">
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
        <div className="max-h-96 scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900 px-3 space-y-3 py-5">
          <div className="flex justify-around border-b">
            <p className="border-b text-center">All</p>
            <p className="text-center">Available</p>
            <p className="text-center">Unavailable</p>
          </div>
          <TruckStatus />
          <TruckStatus />
          <TruckStatus />
          <TruckStatus />
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
