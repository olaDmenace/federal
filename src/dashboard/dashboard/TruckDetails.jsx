import React, { useEffect, useState } from "react";
import { TruckIcon } from "@heroicons/react/outline";
import endpoint from "../../utils/endpoints/endpoint";
import FormTitle from "../FormTitle";
import { PencilIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as xlsx from "xlsx";

const TruckDetails = () => {
  const [trucks, setTrucks] = useState([]);
  const [truckLocations, setTruckLocations] = useState({});

  useEffect(() => {
    endpoint
      .get("/truck/programme")
      .then((res) => {
        setTrucks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = {};

      for (const truck of trucks) {
        const { truckId, truck: truckData } = truck;
        const { galooliData } = truckData?.truck || {}; // Ensure galooliData exists

        if (
          galooliData?.location?.latitude &&
          galooliData?.location?.longitude
        ) {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${galooliData.location.latitude}&lon=${galooliData.location.longitude}&appid=${process.env.REACT_APP_GEOLOCATE_KEY}`
            );

            if (response.ok) {
              const data = await response.json();
              locations[truckId] = data;
            }
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        } else {
          // Handle the case when location data is not available
          locations[truckId] = "N/A";
        }
      }

      setTruckLocations(locations);
      console.log(truckLocations);
    };

    fetchLocations();
  }, [trucks]);

  function formatDate(arg) {
    const date = new Date(arg);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
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

  const functionalStatus = (i) => {
    if (i === 0) {
      return "Available";
    } else if (i === 1) {
      return "Assigned to Trip";
    } else if (i === 2) {
      return "Out of Service";
    } else {
      return "Deactivated";
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editTruck, setEditTruck] = useState({});
  const onItemClick = (arg) => {
    setEditTruck(arg);
    navigate("/dashboard/AssetRegister", { state: { truck: arg } });
  };

  const [truckId, setTruckId] = useState();

  const tpf = (arg) => {
    setTruckId(arg);
    console.log(arg);
    navigate("/dashboard/TruckProgramming", { state: { truck: arg } });
  };

  function downloadDataAsCSV() {
    console.log(trucks);
    const worksheet = xlsx.utils.json_to_sheet(trucks);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const csvData = xlsx.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvData], { type: "text/csv" });
    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Truck Visibility Report.csv";
    link.click();
  }

  return (
    <div className="bg-white p-5 rounded-lg grid gap-5">
      <div className="md:flex justify-between items-center">
        <FormTitle Title={"Truck Visibility Report"} />
        <button className="btn btn-primary" onClick={downloadDataAsCSV}>
          Download
        </button>
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
            <span></span>
          </div>
        </div>
        <div className="table-row-group">
          {trucks.map((truck, index) => (
            <div key={truck.truckId} className="table-row">
              <div className="table-cell">{truck.truck.truckNumber}</div>
              <div className="table-cell">
                {truckLocations[truck.truckId]
                  ? `${truckLocations[truck.truckId].name}, ${
                      truckLocations[truck.truckId].state
                    }, ${truckLocations[truck.truckId].country}`
                  : "N/A"}
              </div>
              <div className="table-cell">
                {functionalStatus(truck.truck.functionalStatus)}
              </div>
              <div className="table-cell">{truck.truck.operationalStatus}</div>
              <div className="table-cell">
                {DATstatus[index % DATstatus.length]}
              </div>
              <div className="table-cell">
                {formatDate(truck.lastModifiedAt)}
              </div>
              <div className="flex gap-5 items-center pt-2">
                <div className="table-cell">
                  <PencilIcon
                    className="h-6 border border-primary rounded-sm cursor-pointer"
                    onClick={() => onItemClick(truck)}
                  />
                </div>
                <div className="table-cell">
                  <TruckIcon
                    className="h-6 border border-primary rounded-sm cursor-pointer"
                    onClick={() => tpf(truck)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
