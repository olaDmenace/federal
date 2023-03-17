import React, { useEffect, useRef } from "react";
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
import {
  HEALTHSAFETY_ROUTES,
  HUMANCAPITAL_ROUTES,
  OPERATIONS_ROUTES,
  OPSUPPORT_ROUTES,
} from "../data/DashMenuData";

function DashMenu() {
  const [operationOpen, setOperationOpen] = useState(false);
  const [hsOpen, setHsopen] = useState(false);
  const [osOpen, setOsopen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const dropdownRefs = {
    operation: useRef(null),
    hs: useRef(null),
    os: useRef(null),
    hr: useRef(null),
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefs]);

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
              ref={dropdownRefs.operation}
              onClick={() => setOperationOpen(!operationOpen)}
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<GlobeIcon className="h-8 stroke-1" />}
                Title={"Operations"}
              />
              {operationOpen && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border z-20 border-primary">
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
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<ShieldCheckIcon className="h-8 stroke-1" />}
                Title={"Health & Safety"}
              />
              {hsOpen && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 z-10 rounded-r-lg border-r border border-primary">
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
            {/*Operation support*/}
            <div
              ref={dropdownRefs.os}
              onClick={() => setOsopen(!osOpen)}
              className="items-center relative flex text-white gap-7 cursor-pointer"
            >
              <DashMenuItem
                Icon={<UsersIcon className="h-8 stroke-1" />}
                Title={"Operations Support"}
              />
              {osOpen && (
                <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-60 space-y-3 rounded-r-lg border-r border z-20 border-primary">
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
                className="items-center relative flex text-white gap-7 cursor-pointer"
              >
                <DashMenuItem
                  Icon={<IdentificationIcon className="h-8 stroke-1" />}
                  Title={"Human Capital"}
                />
                {hrOpen && (
                  <div className="absolute bg-white text-primary px-3 py-10 -top-1/4 left-3/4 w-full space-y-5 rounded-r-lg border-r z-20 border border-primary">
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
