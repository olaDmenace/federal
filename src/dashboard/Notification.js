import React from "react";
import Avatar from "../images/Avatar.png";
import { BellIcon } from "@heroicons/react/outline";
// import { useSelector } from "react-redux";

function Notification() {
  // const lastName = localStorage.getItem(lastName)
  return (
    <div className="flex justify-between py-3 items-center px-10 sticky top-0 bg-white z-50">
      <p className="text-2xl text-primary font-bold">Welcome</p>
      <div className="flex gap-5 items-center justify-end">
        <div className="indicator">
          <span className="indicator-item indicator-end badge badge-primary">
            9
          </span>
          <BellIcon className="w-12 stroke-1" />
        </div>
        <div className="avatar">
          <div className="w-12 rounded-xl">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
