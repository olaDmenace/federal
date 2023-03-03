import React from "react";
import Dash from "../images/Dash.png";
import Logo from "../images/LogoDark.png";
import {
  ChevronDownIcon,
  ChipIcon,
  GlobeIcon,
  IdentificationIcon,
  LoginIcon,
  ShieldCheckIcon,
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
      <div className="h-screen w-full bg-primary relative grid py-10 gap-10 z-0">
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
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border z-20 border-primary">
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
                  <NavLink
                    to={"/dashboard/Waybills"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Waybill Management
                  </NavLink>
                  <NavLink
                    to={"/dashboard/ShortageResolution"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Shortage Resolution
                  </NavLink>
                  <NavLink
                    to={"/dashboard/TruckAssignment"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Truck Assignment
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
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 z-10 rounded-r-lg border-r border border-primary">
                  <NavLink
                    to={"/dashboard/tifForm"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Pre Trip Inspection Form
                  </NavLink>
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*Operation support*/}
            <div
              onClick={() =>
                setshowDropDown(
                  showDropDown === "Submenu 3" ? undefined : "Submenu 3"
                )
              }
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<UsersIcon className="h-8 stroke-1" />}
                Title={"Operations Support"}
              />
              {showDropDown === "Submenu 3" && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border z-20 border-primary">
                  <NavLink
                    to={"/dashboard/maintenanceExpenses"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Maintenance Expenses
                  </NavLink>
                  <NavLink
                    to={"/dashboard/inventoryRequest"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Inventory Request
                  </NavLink>
                  <NavLink
                    to={"/dashboard/maintenanceBooking"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Maintenance Booking
                  </NavLink>
                  <NavLink
                    to={"/dashboard/maintenanceInspection"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Maintenance Inspection
                  </NavLink>
                  <NavLink
                    to={"/dashboard/partsAndInventory"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Part and Inventory
                  </NavLink>
                  <NavLink
                    to={"/dashboard/utilities"}
                    className="hover:font-bold hover:ease-in-out duration-150 block"
                  >
                    Utilities
                  </NavLink>
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
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
            {/*Human Capital*/}
            <section id="humancapital">
              <div
                onClick={() =>
                  setshowDropDown(
                    showDropDown === "Submenu 4" ? undefined : "Submenu 4"
                  )
                }
                className="items-center relative flex text-white gap-7 cursor-pointer"
              >
                <DashMenuItem
                  Icon={<IdentificationIcon className="h-8 stroke-1" />}
                  Title={"Human Capital"}
                />
                {showDropDown === "Submenu 4" && (
                  <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-full space-y-5 rounded-r-lg border-r z-20 border border-primary">
                    <NavLink
                      to={"/dashboard/AbsenceForm"}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      Delivery Officer Absence Form
                    </NavLink>
                    <NavLink
                      to={"/dashboard/ConsequenceManagement"}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      Consequence Management
                    </NavLink>
                    <NavLink
                      to={"/dashboard/Training"}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      Training Form
                    </NavLink>
                    <NavLink
                      to={"/dashboard/Employee"}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      Employee Details
                    </NavLink>
                  </div>
                )}
                <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
              </div>
            </section>
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
