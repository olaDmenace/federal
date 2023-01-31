import React from "react";
import Dash from "../images/Dash.png";
import Logo from "../images/LogoDark.png";
import {
  ChevronDownIcon,
  ChipIcon,
  CogIcon,
  CreditCardIcon,
  GlobeIcon,
  IdentificationIcon,
  LoginIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../utils/features/userSlice";
import DashMenuItem from "./DashMenuItem";

function DashMenu() {
  const [showDropDown, setshowDropDown] = useState();

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <div className="h-screen w-full bg-primary relative grid py-10 gap-10">
        <img
          className="mix-blend-overlay h-screen w-full absolute"
          src={Dash}
          alt=""
        />
        <img className="w-1/2 mx-auto" src={Logo} alt="" />
        <div className="space-y-16 pl-12">
          <div className="relative grid gap-5 w-4/5">
            <NavLink
              to={"/welcome"}
              className="items-center flex text-white gap-2"
            >
              <ChipIcon className="h-8 stroke-1" />
              <h4>Dashboard</h4>
            </NavLink>
            <div
              onClick={() =>
                setshowDropDown(
                  showDropDown === "Submenu 1" ? undefined : "Submenu 1"
                )
              }
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<GlobeIcon className="h-8 stroke-1" />}
                Title={"Operations"}
              />
              {showDropDown === "Submenu 1" && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border border-primary">
                  <NavLink
                    to={"/dashboard/TruckProgramming"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Truck Programming
                  </NavLink>
                  <NavLink
                    to={"/dashboard/JourneyManagement"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Journey Management
                  </NavLink>
                  <NavLink
                    to={"/dashboard/TripExpense"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Trip Expense Request
                  </NavLink>
                  <p className="hover:font-bold hover:ease-in-out duration-150">
                    Waybill Management
                  </p>
                  <NavLink
                    to={"/dashboard/ShortageResolution"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Shortage Resolution
                  </NavLink>
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*safetyAndHealth*/}
            <div
              onClick={() =>
                setshowDropDown(
                  showDropDown === "Submenu 2" ? undefined : "Submenu 2"
                )
              }
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<ShieldCheckIcon className="h-8 stroke-1" />}
                Title={"Health & Safety"}
              />
              {showDropDown === "Submenu 2" && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border border-primary">
                  <NavLink
                    to={"/dashboard/Tif"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Pre Trip Inspection Form
                  </NavLink>
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            <NavLink to={"/dashboard/AssetRegister"} className="block">
              <DashMenuItem
                Icon={<UsersIcon className="h-8 stroke-1" />}
                Title={"Operations Support"}
              />
            </NavLink>
            {/* <NavLink to={"/dashboard/AssetRegister"}></NavLink> */}
            {/* <div className='items-center relative flex text-white gap-7 '>
                        <div className='flex gap-2 items-center'>
                            <GlobeIcon className='h-8 stroke-1' />
                            <h4>Operations</h4>
                        {operations&&<div className='absolute bg-white text-primary px-3 py-10 top-1/4 left-full w-60 space-y-3 rounded-r-lg border-r border border-primary'>
                                <p>Truck Programming</p>
                                <p>Journey Management</p>
                                <p>Waybill Management</p>
                                <p>Trip Expense Request</p>
                                <p>Shortage Resolution</p>
                            </div>}
                        </div>
                        <ChevronDownIcon onClick={operationsSubMenu} className='h-6 stroke-1 hover:scale-125 transition duration-500' />
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <ShieldCheckIcon className='h-8 stroke-1' />
                        <h4>Health & Safety</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <CreditCardIcon className='h-8 stroke-1' />
                        <h4>Finances</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <UserGroupIcon className='h-8 stroke-1' />
                        <h4>Human Resources</h4>
                    </div>
                    <div className='items-center flex text-white gap-2'>
                        <CogIcon className='h-8 stroke-1' />
                        <h4>Settings</h4>
                    </div> */}
            <div
              onClick={() =>
                setshowDropDown(
                  showDropDown === "Submenu 3" ? undefined : "Submenu 3"
                )
              }
            >
              <DashMenuItem
                Icon={<IdentificationIcon className="h-8 stroke-1" />}
                Title={"Human Capital"}
              />
            </div>
            {showDropDown === "Submenu 3" && (
              <div className="grid gap-5 absolute bg-white w-72 p-5 rounded-r top-[85%] left-[100%]">
                <NavLink
                  to={"/dashboard/AbsenceForm"}
                  className="text-primary hover:font-bold ease-in-out duration-150"
                >
                  Delivery Officer Absence Form
                </NavLink>
                <NavLink
                  to={"/dashboard/ConsequenceManagement"}
                  className="text-primary hover:font-bold ease-in-out duration-150"
                >
                  Consequence Management
                </NavLink>
                <NavLink
                  to={"/dashboard/Training"}
                  className="text-primary hover:font-bold ease-in-out duration-150"
                >
                  Training Form
                </NavLink>
                <NavLink
                  to={"/dashboard/Employee"}
                  className="text-primary hover:font-bold ease-in-out duration-150"
                >
                  Employee Details
                </NavLink>
              </div>
            )}
          </div>
          <div
            className="items-center relative flex text-white gap-2 cursor-pointer"
            onClick={(e) => handleLogout(e)}
          >
            <LoginIcon className="h-8 stroke-1" />
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashMenu;
