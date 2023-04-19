import React from "react";
import { useParams } from "react-router-dom";
import TruckContext from "./truckContext";
import { useContext } from "react";
import { LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";
import Fuel from "../../images/Pump.png";

const TruckDetails = ({ truck }) => {
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
      functionalStatus: "DOWNTIME",
    },
  ];
  return (
    <>
      <table className=" flex table-auto w-full   text-primary border border-primary gap-10 rounded-md p-2  space-between">
        <div>
          {trucks.map((truck) => (
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-6 stroke-1 stroke-primary" />
                  <h3 className="font-semibold">{truck.name}</h3>
                </div>
              </div>
              <div className="flex gap-5 items-center ">
                <div className="flex items-center gap-2">
                  <LocationMarkerIcon className="h-6 stroke-1 stroke-primary" />
                  <h6 className="font-medium">{truck.location.name}</h6>
                </div>
              </div>
              <div className="flex gap-4 items-center pt-4  ">
                <div className="flex items-center gap-2 ">
                  <img src={Fuel} alt="" />
                  <p>{truck.location.kms} KMs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <thead className="w-full">
            <tr className="w-full">
              <th className="px-8  text-left ">Time/Date</th>
              <th className="px-8  text-left ">Operational Status</th>
              <th className="px-8 text-left ">DAT Status</th>
              <th className="px-8  text-left ">Functional Status</th>
            </tr>
          </thead>

          <tbody className="w-full">
            {trucks.map((truck) => (
              <tr>
                <td className="px-8  text-left ">{truck.date}</td>
                <td className="px-8  text-left ">{truck.operationalStatus}</td>
                <td className="px-8  text-left ">{truck.datStatus}</td>
                <td className="px-8  text-left ">
                  <button className="btn btn-primary order-1">
                    {truck.functionalStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </>
  );
};

export default TruckDetails;
