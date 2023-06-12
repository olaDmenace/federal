import React, { useEffect, useState } from "react";
import Avatar from "../images/Avatar.png";
import { BellIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import DashMenu from "./DashMenu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/features/userSlice";
// import { useSelector } from "react-redux";

function Notification() {
  const lastName = localStorage.getItem("lastName")
  // const isAuthenticated = useSelector(state=>state.isAuthenticated)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(isAuthenticated)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout());
      navigate('/');
    }
  }, [isAuthenticated, dispatch, navigate]);



  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="lg:flex justify-between py-3 items-center px-10 sticky top-0 bg-white z-50">
      <p className="text-2xl text-primary font-bold hidden lg:block">Welcome {lastName}</p>
      <div className="flex gap-5 items-center justify-between lg:justify-end">
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
            className="h-8 stroke-1 stroke-primary block lg:hidden"
            onClick={showMenu}
          />
        )}
        {menu && (
          <div className="absolute lg:hidden h-screen w-full bg-black/50 top-0 right-0 z-50">
            <div className="bg-white relative w-2/3 md:w-1/3 h-screen float-right">
              <DashMenu click={showMenu} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;
