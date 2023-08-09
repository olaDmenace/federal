import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ToDoCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card rounded-lg shadow-md grid gap-2 p-5"
      // onClick={() => navigate(props.link)}
    >
      <div className="flex gap-2 items-center">
        <span className="badge badge-xs badge-[000]"></span>
        <p>{props.id}</p>
      </div>
      <div className="grid gap-2 pl-5">
        <p className="text-gray-400 text-sm">{props.due}</p>
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-7 rounded-full">
              <img src={props.avatar} alt="" />
            </div>
          </div>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
