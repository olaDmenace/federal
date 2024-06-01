import React from "react";
import Left from "./MemebershipLeft";
import Logo from "../images/LogoLight.png";
import { Outlet } from "react-router-dom";

function Membership() {
  return (
    <div className="lg:flex">
      <div className="hidden lg:block basis-1/2">
        <Left />
      </div>
      <div className="grid h-screen w-full basis-1/2 py-28 gap-14 lg:gap-0 content-center text-center text-primary scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-red-700">
        <img className="mx-auto h-14 lg:h-36" src={Logo} alt="" />
        <Outlet />
      </div>
    </div>
  );
}

export default Membership;
