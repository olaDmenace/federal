import React from "react";
import { Outlet } from "react-router-dom";
import DashMenu from "./DashMenu";
import Notification from "./Notification";

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-12 h-screen scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-red-700 relative">
      <div className="hidden lg:block sticky top-0 h-screen col-span-2 to">
        <div>
          <DashMenu />
        </div>
      </div>
      <div className="lg:col-span-10 pb-8 space-y-3 bg-primary/5 w-full scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-red-700 relative">
        <Notification />
        <div className="w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
