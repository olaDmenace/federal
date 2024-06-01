import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoints/endpoint";
import PageTitle from "../../utils/PageTitle";
import FormTitle from "../FormTitle";
import gist from "../../utils/gistfile1.json";
import PopUp from "../../utils/PopUp";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { useLocation } from "react-router-dom";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import CloudinaryUpload from "../../utils/CloudinaryUpload";

const Employee = () => {
  PageTitle("FIRS Employee Form");

  const location = useLocation();
  // console.log(location.state);
  const employeeDetails = location?.state;
  const initialState = location?.state
    ? {
        firstName: employeeDetails?.employee?.firstName,
        lastName: employeeDetails?.employee?.lastName,
        otherNames: employeeDetails?.employee?.otherNames,
        email: employeeDetails?.employee?.email,
        photoUrl: null,
        status: 0,
        contactInfo: {
          mobile: employeeDetails?.employee?.phoneNumber,
          home: "string",
          address: "string",
          addressLineTwo: "string",
          city: "string",
          state: "string",
          country: "string",
        },
        startDate: "2023-10-02T12:00:40.662Z",
        endDate: "2023-10-02T12:00:40.662Z",
        dateOfBirth: "2023-10-02T12:00:40.662Z",
        employmentNumber: employeeDetails?.employee?.employmentNumber,
        roleId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        employeeType: employeeDetails?.employee?.roleTypw,
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      }
    : {
        firstName: "",
        lastName: "",
        otherNames: "",
        email: "",
        photoUrl: "",
        status: 0,
        contactInfo: {
          mobile: "",
          home: "",
          address: "",
          addressLineTwo: "",
          city: "",
          state: "",
          country: "",
        },
        startDate: "",
        endDate: null,
        dateOfBirth: "",
        employmentNumber: "",
        roleId: "",
        employeeType: 0,
      };

  const [data, setData] = useState(initialState);
  const [role, setRole] = useState([]);

  useEffect(() => {
    endpoint
      .get("/role")
      .then((res) => {
        console.log(res.data.data, "role");
        setRole(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const url = "/human-resource/employee";
  console.log(data, "the data");

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState({
    icon: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(data.contactInfo.country);
    setIsLoading(true);
    endpoint
      .post(url, data)
      .then((res) => {
        setShow(true);
        // console.log(res.response.status)
        // setIsLoading(!isLoading)
        setReply({
          icon: <ThumbUpIcon className="mx-auto h-24 text-primary" />,
          message: res.data.message,
        });
        // if (res.response.status === 200) {
        // }
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
        setReply({
          icon: <XCircleIcon className="mx-auto h-24 text-red-500" />,
          message: err.response.data.message,
        });
        // setIsLoading(!isLoading)
      });
  };
  function closePop(e) {
    setShow(false);
    setIsLoading(!isLoading);
  }

  const findState = gist.countries.find(
    (t) => t.country === data.contactInfo.country
  );

  return (
    <div className="p-5 rounded-lg bg-white">
      <FormTitle Title={"Employee Details"} />
      {show && (
        <PopUp>
          {reply.icon}
          <p className="mx-auto text-center text-primary bg-transparent">
            {reply.message}
          </p>
          <button className="btn btn-primary" onClick={(e) => closePop()}>
            Confirm
          </button>
        </PopUp>
      )}
      <hr className="pb-5" />
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid text-primary gap-5"
      >
        <h4 className="text-xl text-primary font-medium">Customer Details</h4>
        <fieldset className="grid md:grid-cols-2 gap-5">
          <label htmlFor="firstname">
            First Name<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              placeholder=""
              type="text"
              name=""
              id="firstname"
            />
          </label>
          <label htmlFor="middleName">
            Middle Name
            <input
              className="w-full input input-primary"
              value={data.otherNames}
              onChange={(e) => setData({ ...data, otherNames: e.target.value })}
              placeholder=""
              type="text"
              name=""
              id="middleName"
            />
          </label>
          <label htmlFor="lastName">
            Last Name<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              placeholder=""
              type="text"
              name=""
              id="lastName"
            />
          </label>
          <label htmlFor="email">
            Email<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              name="email"
              id="email"
            />
          </label>
        </fieldset>
        <CloudinaryUpload
          onSuccess={(imageURL) => setData({ ...data, photoUrl: imageURL })}
        />
        <label htmlFor="">
          Classification
          <select
            className="select select-primary w-full"
            min={0}
            type="number"
            onChange={(e) =>
              setData({ ...data, employeeType: parseInt(e.target.value) })
            }
          >
            <option value={0}>Employee</option>
            <option value={1}>Contract</option>
            <option value={2}>Vendor</option>
          </select>
        </label>
        <h4 className="text-xl text-primary font-medium">
          Contact Information
        </h4>
        <fieldset className="grid md:grid-cols-2 gap-5">
          <label htmlFor="mobilePhone">
            Mobile Phone Number<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.contactInfo.mobile}
              onChange={(e) =>
                setData({
                  ...data,
                  contactInfo: { ...data.contactInfo, mobile: e.target.value },
                })
              }
              type="tel"
              name=""
              id="mobilePhone"
            />
          </label>
          <label htmlFor="homePhone">
            Home Phone Number
            <input
              className="w-full input input-primary"
              value={data.contactInfo.home}
              onChange={(e) =>
                setData({
                  ...data,
                  contactInfo: { ...data.contactInfo, home: e.target.value },
                })
              }
              type="tel"
              name=""
              id="homePhone"
            />
          </label>
        </fieldset>
        <label htmlFor="address1">
          Address
          <input
            className="w-full input input-primary"
            value={data.contactInfo.address}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: { ...data.contactInfo, address: e.target.value },
              })
            }
            type="text"
            name=""
            id="address1"
          />
        </label>
        <label htmlFor="address2">
          Address Line 2
          <input
            className="w-full input input-primary"
            value={data.contactInfo.addressLineTwo}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  addressLineTwo: e.target.value,
                },
              })
            }
            type="text"
            name=""
            id="address2"
          />
        </label>
        <fieldset className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <label htmlFor="country">
            Country
            <select
              className="select select-primary w-full"
              value={data.contactInfo.country}
              onChange={(e) =>
                setData({
                  ...data,
                  contactInfo: { ...data.contactInfo, country: e.target.value },
                })
              }
              name=""
              id=""
            >
              <option value="">Select Country</option>
              {gist.countries.map((item) => (
                <option key={item.country} value={item.country}>
                  {item.country}
                </option>
              ))}
            </select>
          </label>
          {findState && (
            <div>
              <label htmlFor="state">
                State/Province/Region
                <select
                  className="select select-primary w-full"
                  value={data.contactInfo.state}
                  onChange={(e) =>
                    setData({
                      ...data,
                      contactInfo: {
                        ...data.contactInfo,
                        state: e.target.value,
                      },
                    })
                  }
                  name=""
                  id=""
                >
                  <option value="">Select State</option>
                  {findState.states.map((state) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          <label htmlFor="city">
            City
            <input
              className="w-full input input-primary"
              value={data.contactInfo.city}
              onChange={(e) =>
                setData({
                  ...data,
                  contactInfo: { ...data.contactInfo, city: e.target.value },
                })
              }
              type="text"
              name=""
              id="city"
            />
          </label>
        </fieldset>
        <h4 className="text-xl text-primary font-medium">Personal Details</h4>
        <fieldset className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <label htmlFor="jobTitle">
            Job Title<span className="text-red-700">*</span>
            <select
              className="w-full select select-primary"
              onChange={(e) => setData({ ...data, roleId: e.target.value })}
              type="text"
              name=""
              id="jobTitle"
            >
              <option>Select Job Title</option>
              {role.map((items) => (
                <option value={items.roleId}>{items.roleName}</option>
              ))}
            </select>
          </label>
          <label htmlFor="dob">
            Date of Birth<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({ ...data, dateOfBirth: e.target.value })
              }
              type="date"
              name=""
              id="dob"
            />
          </label>
          <label htmlFor="employeeNumber">
            Employee Number
            <input
              className="w-full input input-primary"
              min={1}
              value={data.employmentNumber}
              onChange={(e) =>
                setData({ ...data, employmentNumber: e.target.value })
              }
              type="text"
              name=""
              id="employeeNumber"
            />
          </label>
        </fieldset>
        <fieldset className="grid md:grid-cols-2 gap-5">
          <label htmlFor="startDate">
            Start Date<span className="text-red-700">*</span>
            <input
              className="w-full input input-primary"
              value={data.startDate}
              onChange={(e) => setData({ ...data, startDate: e.target.value })}
              type="date"
              name=""
              id="startDate"
            />
          </label>
          <label htmlFor="leaveDate">
            Leave Date
            <input
              className="w-full input input-primary"
              value={data.endDate}
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
              type="date"
              name=""
              id="leaveDate"
            />
          </label>
        </fieldset>
        {location.pathname === "/dashboard/Employee" ? (
          <div className="mx-auto">
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <button class="btn btn-primary mx-auto" type="submit">
                Submit
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Employee;
