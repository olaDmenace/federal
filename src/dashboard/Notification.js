import React, { useState } from "react";
import Avatar from "../images/Avatar.png";
import { BellIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import DashMenu from "./DashMenu";
// import { useSelector } from "react-redux";

function Notification() {
  // const lastName = localStorage.getItem(lastName)

  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:flex justify-between py-3 items-center px-10 sticky top-0 bg-white z-50">
      <p className="text-2xl text-primary font-bold hidden lg:block">Welcome</p>
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
        {!menu && (
          <MenuAlt3Icon
            className="h-8 stroke-1 stroke-primary"
            onClick={showMenu}
          />
        )}
        {menu && (
          <div className="absolute h-screen w-full bg-black/50 top-0 right-0 z-50">
            <div className="bg-white relative w-2/3 h-screen float-right">
              <DashMenu click={showMenu} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;
