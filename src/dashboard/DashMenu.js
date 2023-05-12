import React, { useEffect, useRef } from "react";
import Dash from "../images/Dash.png";
import Logo from "../images/LogoDark.png";
import {
  ChevronDownIcon,
  ChipIcon,
  ClipboardIcon,
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
  REPORTS_ROUTES,
} from "../data/DashMenuData";

function DashMenu() {
  const [operationOpen, setOperationOpen] = useState(false);
  const [hsOpen, setHsopen] = useState(false);
  const [osOpen, setOsopen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);
  const [repOpen, setRepOpen] = useState(false)

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
    rep: useRef(null)
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefs]);

  return (
    <div>
      <div className="h-screen w-full bg-primary relative grid py-10 z-0">
        <img
          className="mix-blend-overlay h-screen w-full absolute"
          src={Dash}
          alt=""
        />
        <img className="w-1/2 mx-auto" src={Logo} alt="" />
        <div className="space-y-10 pl-12">
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
              className="items-center relative flex text-white gap-7 cursor-pointer"
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
                className="items-center relative flex text-white gap-7 cursor-pointer"
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
                className="items-center relative flex text-white gap-7 cursor-pointer"
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
                        className='hover:font-bold hover:ease-in-out duration-150 block'
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
