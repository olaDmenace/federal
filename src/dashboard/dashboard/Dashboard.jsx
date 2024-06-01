import {
  AdjustmentsIcon,
  BellIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  LinkIcon,
  LocationMarkerIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import Notification from "../Notification";
import DashCard from "./DashCard";
import PageTitle from "../../utils/PageTitle";

const Dashboard = () => {
  PageTitle("Welcome to FIRS");
  return (
    <div className="grid gap-5 my-10">
      <Notification />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-11/12 m-auto">
        <DashCard
          Link={"/dashboard/Notifications"}
          icon={BellIcon}
          title={"My Workspace"}
        />
        <DashCard
          Link={"/dashboard/TruckProgramming"}
          icon={LocationMarkerIcon}
          title={"Operations"}
        />
        <DashCard
          Link={"/dashboard/AssetRegister"}
          icon={LinkIcon}
          title={"Asset Register"}
        />
        <DashCard
          Link={"/dashboard/Employee"}
          icon={IdentificationIcon}
          title={"Human Capital"}
        />
        <DashCard
          Link={"/dashboard/partsAndInventory"}
          icon={ClipboardCheckIcon}
          title={"Parts & Inventory"}
        />
        <DashCard
          Link={"/dashboard/tifForm"}
          icon={ShieldCheckIcon}
          title={"Health & Safety"}
        />
        <DashCard Link={""} icon={CreditCardIcon} title={"Finances"} />
        <DashCard
          Link={"/dashboard/maintenanceInspection"}
          icon={UsersIcon}
          title={"Operations Support"}
        />
        <DashCard
          Link={"/dashboard/maintenanceBooking"}
          icon={AdjustmentsIcon}
          title={"Maintenance Booking"}
        />
        <DashCard
          Link={""}
          icon={ExclamationCircleIcon}
          title={"RTA/Incidents"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
