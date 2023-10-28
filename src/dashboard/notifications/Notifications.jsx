import React, { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import Avatar from "../../images/Avatar.png";
import { FolderOpenIcon } from "@heroicons/react/outline";
import NotificationsCard from "./NotificationsCard";
import endpoint from "../../utils/endpoints/endpoint";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const [notification, setNotification] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState("");
  const [programme, setProgramme] = useState();
  const navigate = useNavigate();

  const getNotiifcation = useCallback(() => {
    endpoint
      .get("/notifications")
      .then((res) => {
        setNotification(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getTasks = useCallback(() => {
    endpoint
      .get("/work-items")
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const truckProgramming = (programmeId, type, ) => {
    if (type === "TruckProgramming") {
      endpoint.get(`truck/programme/${programmeId}`).then((res) => {
        setProgramme(res.data.data.truck);
        navigate("/dashboard/TruckProgramming", {
          state: { truck: res.data.data.truck },
        });
      });
    }
    if (type === "JMF") {
      endpoint.get(`truck/journey-management/${programmeId}`).then((res) => {
        navigate("/dashboard/JourneyManagement", {
          state: { truck: res.data.data },
        });
      });
    }
    if (type === "TruckInspection") {
      navigate("/dashboard/tifForm", {
        state: { truckProgrammingId: programmeId },
      });
    }
  };

  useEffect(() => {
    getNotiifcation();
    getTasks();
  }, [getNotiifcation, getTasks]);

  const newTasks = tasks?.data?.filter((task) => {
    if (!selectedTasks) {
      return task;
    } else {
      return task.itemType === selectedTasks;
    }
  });

  const taskInProgress = newTasks?.filter((item) => item.isDone === false);
  const taskDone = newTasks?.filter((item) => item.isDone === true);
  console.log(newTasks);

  return (
    <div>
      <div className="grid gap-8 lg:gap-4 lg:grid-cols-12">
        <div className="grid gap-8 lg:gap-4 md:grid-cols-10 order-last lg:order-first lg:col-span-12">
          <NotificationsCard
            notification={notification}
            tasks={tasks}
            selectedTasks={selectedTasks}
            setSelectedTasks={setSelectedTasks}
          />
          <div className="rounded-lg shadow-md p-5 grid gap-5 md:col-span-6 md:h-screen md:overflow-y-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900 relative bg-white">
            {/* <div>
              <p className="font-semibold text-lg">
                Tasks
                <span className="indicator-item badge badge-secondary float-right">
                  {newTasks?.length}
                </span>
              </p>
              <div className="grid cursor-pointer gap-5 lg:grid-cols-2">
                {newTasks?.map((task) => (
                  <ToDoCard
                    key={task.itemId}
                    id={task.title}
                    avatar={Avatar}
                    name={"John Doe"}
                    // link={`/dashboard/${route[task?.itemType]}`}
                  />
                ))}
              </div>
            </div> */}
            <div>
              <p className="font-semibold text-lg">
                In-Progress
                <span className="indicator-item badge badge-secondary float-right">
                  {taskInProgress?.length}
                </span>
              </p>
              <div className="grid cursor-pointer gap-5 lg:grid-cols-2">
                {taskInProgress?.map((task) => (
                  <div
                    className="cursor-pointer hover:bg-[#d1fae5]"
                    key={task.itemId}
                    onClick={() =>
                      truckProgramming(task.itemId, task.itemType,)
                    }
                  >
                    <ToDoCard
                      id={task.title}
                      avatar={Avatar}
                      name={"Olayinka Doe"}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg">
                Done
                <span className="indicator-item badge badge-primary float-right">
                  {taskDone?.length}
                </span>
              </p>
              <div className="grid gap-5 lg:grid-cols-2">
                {taskDone?.map((task) => (
                  <ToDoCard
                    key={task.itemId}
                    id={task.title}
                    avatar={Avatar}
                    name={"Olayinka Doe"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:col-span-4 lg:h-screen overflow-y-scroll scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-900 relative gap-8 pb-10">
          <div className="rounded-lg shadow-md py-10 grid gap-5 md:col-span-1 bg-white">
            <div className="justify-items-center grid gap-2">
              <img src={Avatar} className="rounded-full w-20" alt="" />
              <p className="font-semibold text-xl">Emmanuel Adegbola</p>
              <p className="text-sm">My Account</p>
            </div>
            <hr />
            <button className="btn btn-primary mx-auto rounded-full flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Recent Chats
            </button>
          </div>
          <div className="rounded-lg shadow-md py-10 grid gap-5 bg-white">
            <div className="justify-items-center grid gap-2">
              <img src={Avatar} className="rounded-full w-20" alt="" />
              <p className="font-semibold text-xl">Emmanuel Adegbola</p>
              <p className="text-sm">My Files</p>
            </div>
            <hr />
            <div className="px-6 grid gap-5">
              <div className="flex justify-between items-center">
                <p className="font-semibold text">Share Files</p>
                <p className="text-primary text-sm">See All</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <FolderOpenIcon className="stroke-1 h-10 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Reference.zip</p>
                    <p className="text-gray-400 text-xs">May 20, 2023</p>
                  </div>
                </div>
                <p>1.8MB</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Notifications;
