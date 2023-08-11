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
        <p className="font-semibold mb-6 text-lg">
          Notification{" "}
          <span className="indicator-item badge badge-primary float-right">
            {notification?.total}
          </span>
        </p>
        <div className="flex flex-col space-y-4">
          {notification?.data?.map((nots) => (
            <NotificationTypeCard
              key={nots.notificationId}
              title={nots.title}
              state={!nots.isRead}
              time={nots.deliveredAt}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold my-6 text-lg">
          Task
          <span className="indicator-item badge badge-primary float-right">
            {tasks?.total}
          </span>
        </p>
        <div className="space-y-4">
          <p className="cursor-pointer" onClick={() => setSelectedTasks("TPF")}>
            Truck Programming
            <span className="indicator-item badge badge-primary float-right">
              {tasks?.data?.filter((task) => task.itemType === "TPF").length}
            </span>
          </p>
          <p className="cursor-pointer" onClick={() => setSelectedTasks("JMF")}>
            Journey Management
            <span className="indicator-item badge badge-primary float-right">
              {tasks?.data?.filter((task) => task.itemType === "JMF").length}
            </span>
          </p>
          <p className="cursor-pointer">
            Trip expense request
            <span className="indicator-item badge badge-primary float-right">
            {tasks?.data?.filter((task) => task.itemType === "").length}
            </span>
          </p>
          <p className="cursor-pointer">
            Waybill Management
            <span className="indicator-item badge badge-primary float-right">
            {tasks?.data?.filter((task) => task.itemType === "").length}
            </span>
          </p>
          <p className="cursor-pointer">
            Shortage Resolution
            <span className="indicator-item badge badge-primary float-right">
            {tasks?.data?.filter((task) => task.itemType === "").length}
            </span>
          </p>
          <p className="cursor-pointer">
            Truck Assignment
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
