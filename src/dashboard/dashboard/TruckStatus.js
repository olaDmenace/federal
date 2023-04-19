import { LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import Fuel from "../../images/Pump.png";

function TruckStatus({ truck }) {
  return (
    <Link to="/dashboard/TruckDetails">
      <br />
      <div className="flex flex-col border border-primary p-3 rounded-md cursor-pointer">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-6 stroke-1 stroke-primary" />
            <h3 className="font-semibold">{truck.name}</h3>
          </div>

          <button className="btn btn-primary order-1">Uptime</button>

          <div className="space-y-2 text-center">
            <p className="py-3 ">Operational Status</p>
          </div>
        </div>
        <div className="flex gap-5 items-center ">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="h-6 stroke-1 stroke-primary" />
            <h6 className="font-medium">{truck.location.name}</h6>
          </div>

          <div className="space-y-2 text-center">
            <p className="font-medium text-sm text-primary">
              All systems are operational
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center pt-4  ">
          <div className="flex items-center gap-2 ">
            <img src={Fuel} alt="" />
            <p>{truck.location.kms} KMs</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TruckStatus;
