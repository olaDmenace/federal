import React from "react";
import NotificationTypeCard from "./NotificationTypeCard";

const NotificationsCard = ({
  notification,
  tasks,
  selectedTasks,
  setSelectedTasks,
}) => {
  return (
    <div className="rounded-lg shadow-md p-5  gap-5 md:col-span-4 md:h-screen md:overflow-y-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900 relative bg-white">
      <div>
        <p className="font-semibold my-6 text-lg">
          Task
          <span className="indicator-item badge badge-primary float-right">
            {tasks?.total}
          </span>
        </p>
        <div className="space-y-4">
          <p
            className="cursor-pointer"
            onClick={() => setSelectedTasks("TruckProgramming")}
          >
            Truck Programming
            <span className="indicator-item badge badge-primary float-right">
              {
                tasks?.data?.filter(
                  (task) => task.itemType === "TruckProgramming"
                ).length
              }
            </span>
          </p>
          <p
            className="cursor-pointer"
            onClick={() => setSelectedTasks("TruckInspection")}
          >
            Truck Inspection
            <span className="indicator-item badge badge-primary float-right">
              {
                tasks?.data?.filter(
                  (task) => task.itemType === "TruckInspection"
                ).length
              }
            </span>
          </p>
          <p
            className="cursor-pointer"
            onClick={() => setSelectedTasks("TripExpense")}
          >
            Trip Expense
            <span className="indicator-item badge badge-primary float-right">
              {
                tasks?.data?.filter((task) => task.itemType === "TripExpense")
                  .length
              }
            </span>
          </p>
          <p className="cursor-pointer" onClick={() => setSelectedTasks("JMF")}>
            Journey Management
            <span className="indicator-item badge badge-primary float-right">
              {tasks?.data?.filter((task) => task.itemType === "JMF").length}
            </span>
          </p>
          <p
            className="cursor-pointer"
            onClick={() => setSelectedTasks("WaybillCreation")}
          >
            Waybill Verification
            <span className="indicator-item badge badge-primary float-right">
              {
                tasks?.data?.filter(
                  (task) => task.itemType === "WaybillCreation"
                ).length
              }
            </span>
          </p>
          <p className="cursor-pointer">
            Truck Status
            <span className="indicator-item badge badge-primary float-right">
              {tasks?.data?.filter((task) => task.itemType === "").length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
