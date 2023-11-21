import React, { useEffect, useRef } from "react";
import Dash from "../images/Dash.png";
import Logo from "../images/LogoDark.png";
import {
  BellIcon,
  ChevronDownIcon,
  ChipIcon,
  ClipboardIcon,
  GlobeIcon,
  IdentificationIcon,
  LoginIcon,
  ShieldCheckIcon,
  UsersIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../utils/features/userSlice";
import DashMenuItem from "./DashMenuItem";
import {
  HEALTHSAFETY_ROUTES,
  HUMANCAPITAL_ROUTES,
  OPERATIONS_ROUTES,
  OPSUPPORT_ROUTES,
  REPORTS_ROUTES,
} from "../data/DashMenuData";

function DashMenu(props) {
  const [operationOpen, setOperationOpen] = useState(false);
  const [hsOpen, setHsopen] = useState(false);
  const [osOpen, setOsopen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);
  const [repOpen, setRepOpen] = useState(false);
  const [feOpen, setFeOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  const dropdownRefs = {
    operation: useRef(null),
    hs: useRef(null),
    os: useRef(null),
    hr: useRef(null),
    rep: useRef(null),
    fe: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRefs.operation.current &&
        !dropdownRefs.operation.current.contains(e.target)
      ) {
        setOperationOpen(false);
      }
      if (
        dropdownRefs.hs.current &&
        !dropdownRefs.hs.current.contains(e.target)
      ) {
        setHsopen(false);
      }
      if (
        dropdownRefs.os.current &&
        !dropdownRefs.os.current.contains(e.target)
      ) {
        setOsopen(false);
      }
      if (
        dropdownRefs.hr.current &&
        !dropdownRefs.hr.current.contains(e.target)
      ) {
        setHrOpen(false);
      }
      if (
        dropdownRefs.rep.current &&
        !dropdownRefs.rep.current.contains(e.target)
      ) {
        setRepOpen(false);
      }
      if (
        dropdownRefs.fe.current &&
        !dropdownRefs.fe.current.contains(e.target)
      ) {
        setRepOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefs]);

  return (
    <div className="">
      <div className="h-screen w-full bg-primary relative grid py-10 z-0">
        <img
          className="mix-blend-overlay h-screen w-full absolute"
          src={Dash}
          alt=""
        />
        <XCircleIcon
          className="h-10 stroke-1 stroke-white absolute z-30 top-4 right-10 block cursor-pointer lg:hidden"
          onClick={props.click}
        />
        <img className="w-1/2 mx-auto" src={Logo} alt="" />
        <div className="space-y-10 px-3.5">
          <div className="relative grid gap-5 mx-auto">
            <NavLink
              to={"/welcome"}
              className="items-center flex text-white gap-2"
            >
              <ChipIcon className="h-8 stroke-1" />
              <h4>Dashboard</h4>
            </NavLink>
            <NavLink
              to={"/dashboard/notifications"}
              className="items-center flex text-white gap-2"
            >
              <BellIcon className="h-8 stroke-1" />
              <h4>My Workspace</h4>
            </NavLink>
            <div
              ref={dropdownRefs.operation}
              onClick={() => setOperationOpen(!operationOpen)}
              className="items-center relative flex text-white cursor-pointer justify-between"
            >
              <DashMenuItem
                Icon={<GlobeIcon className="h-8 stroke-1" />}
                Title={"Operations"}
              />
              {operationOpen && (
                <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-60 z-10 space-y-2  px-3 py-5 ">
                  {OPERATIONS_ROUTES.map((operation, index) => (
                    <NavLink
                      key={index}
                      to={operation.route}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      {operation.label}
                    </NavLink>
                  ))}
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*safetyAndHealth*/}
            <div
              ref={dropdownRefs.hs}
              onClick={() => setHsopen(!hsOpen)}
              className="items-center relative flex text-white cursor-pointer justify-between"
            >
              <DashMenuItem
                Icon={<ShieldCheckIcon className="h-8 stroke-1" />}
                Title={"Health & Safety"}
              />
              {hsOpen && (
                <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-60 z-10 space-y-2  px-3 py-5 ">
                  {HEALTHSAFETY_ROUTES.map((health, index) => (
                    <NavLink
                      key={index}
                      to={health.route}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      {health.label}
                    </NavLink>
                  ))}
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*Fuel Expense*/}
            <div
              ref={dropdownRefs.fe}
              onClick={() => setFeOpen(!feOpen)}
              className="items-center relative flex text-white cursor-pointer justify-between"
            >
              <DashMenuItem
                // Icon={<ShieldCheckIcon className="h-8 stroke-1" />}
                Icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 stroke-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                }
                Title={"Fuel Expense"}
              />
              {/* {feOpen && (
                <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-60 z-10 space-y-2  px-3 py-5 ">
                  {HEALTHSAFETY_ROUTES.map((health, index) => (
                    <NavLink
                      key={index}
                      to={health.route}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      {health.label}
                    </NavLink>
                  ))}
                </div>
              )} */}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*Operation support*/}
            <div
              ref={dropdownRefs.os}
              onClick={() => setOsopen(!osOpen)}
              className="items-center relative flex text-white cursor-pointer justify-between"
            >
              <DashMenuItem
                Icon={<UsersIcon className="h-8 stroke-1" />}
                Title={"Operations Support"}
              />
              {osOpen && (
                <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-60 z-10 space-y-2  px-3 py-5 ">
                  {OPSUPPORT_ROUTES.map((op, index) => (
                    <NavLink
                      key={index}
                      to={op.route}
                      className="hover:font-bold hover:ease-in-out duration-150 block"
                    >
                      {op.label}
                    </NavLink>
                  ))}
                </div>
              )}
              <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
            </div>
            {/*Human Capital*/}
            <section id="humancapital">
              <div
                ref={dropdownRefs.hr}
                onClick={() => setHrOpen(!hrOpen)}
                className="items-center relative flex text-white cursor-pointer justify-between"
              >
                <DashMenuItem
                  Icon={<IdentificationIcon className="h-8 stroke-1" />}
                  Title={"Human Capital"}
                />
                {hrOpen && (
                  <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-full z-10 space-y-2  px-3 py-5 ">
                    {HUMANCAPITAL_ROUTES.map((hc, index) => (
                      <NavLink
                        key={index}
                        to={hc.route}
                        className="hover:font-bold hover:ease-in-out duration-150 block"
                      >
                        {hc.label}
                      </NavLink>
                    ))}
                  </div>
                )}
                <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
              </div>
            </section>
            {/* Reports */}
            <section id="reports">
              <div
                ref={dropdownRefs.rep}
                onClick={() => setRepOpen(!repOpen)}
                className="items-center relative flex text-white cursor-pointer justify-between"
              >
                <DashMenuItem
                  Icon={<ClipboardIcon className="h-8 stroke-1" />}
                  Title={"Reports"}
                />
                {repOpen && (
                  <div className="absolute bg-white text-primary top-10 flex-col rounded-lg p-2 w-full z-10 space-y-2  px-3 py-5 ">
                    {REPORTS_ROUTES.map((rep, index) => (
                      <NavLink
                        key={index}
                        to={rep.route}
                        className="hover:font-bold hover:ease-in-out duration-150 block"
                      >
                        {rep.label}
                      </NavLink>
                    ))}
                  </div>
                )}
                <ChevronDownIcon className="h-6 stroke-1 hover:scale-125 transition duration-500" />
              </div>
            </section>
          </div>
          <div
            className="items-center relative flex text-white gap-2 cursor-pointer w-4/5"
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
