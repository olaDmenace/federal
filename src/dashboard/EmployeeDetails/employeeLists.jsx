import React, { useEffect, useState } from "react";
import FormTitle from "../FormTitle";
import endpoint from "../../utils/endpoints/endpoint";
import * as xlsx from "xlsx";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const EmployeeLists = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  // Define the downloadDataAsXLSX function
  const downloadDataAsXLSX = () => {
    console.log(filteredUsers);

    // Remove "userId" and "roleId" properties from each object in filteredUsers array
    const modifiedUsers = filteredUsers.map(
      ({ userId, roleId, ...rest }) => rest
    );

    const worksheet = xlsx.utils.json_to_sheet(modifiedUsers);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    // Generate XLSX data
    const excelData = xlsx.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    const blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Employee List.xlsx";
    link.click();
  };

  useEffect(() => {
    endpoint
      .get(`/user?PageNumber=${currentPage}&PageSize=${pageSize}&Paginate=true`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, pageSize]);

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEmployeeClick = (arg) => {
    navigate("/dashboard/Employee", { state: { employee: arg } });
  };

  const formatDate = (arg) => {
    const date = new Date(arg);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  // Filter users based on the search query
  const filteredUsers = users.filter((user) => {
    const searchString = searchQuery.toLowerCase();
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

    return (
      user.email.toLowerCase().includes(searchString) ||
      user.phoneNumber?.includes(searchQuery) || // Check for phone number
      user.employeeNumber?.includes(searchQuery) || // Check for employee number
      fullName.includes(searchString) // Check for first name and last name
    );
  });

  return (
    <div className="overflow-x-auto bg-white rounded-lg p-5">
      <div className="grid md:grid-flow-col items-center">
        <FormTitle Title={"Employee Details"} />
        <label htmlFor="search" className="inline-flex items-center gap-5">
          <p className="text-primary font-medium">Search</p>
          <input
            className="input input-primary w-full focus:bg-transparent"
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by email, employee number, or phone number"
          />
        </label>

        <button
          className="btn btn-primary mx-auto"
          onClick={downloadDataAsXLSX}
        >
          Download
        </button>
      </div>
      {/* Render filteredUsers instead of users */}
      <table className="table-auto w-full  text-primary">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-4 text-left ">S/N</th>
            <th className="px-4 py-4 text-left">Employees Name</th>
            <th className="px-4 py-4 text-left">Role</th>
            <th className="px-4 py-4 text-left">Email</th>
            <th className="px-4 py-4 text-left">Phone Number</th>
            <th className="px-4 py-4 text-left">Start Date</th>
            <th className="px-4 py-4 text-left">Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.userId} className="border-b hover:bg-gray-100 ">
              <td className="px-4  py-4 text-left">
                {(currentPage - 1) * pageSize + index + 1}
              </td>
              <td className="px-4 py-4 text-left">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-4 py-4 text-left">{user.roleName}</td>
              <td className="px-4 py-4 text-left">{user.email}</td>
              <td className="px-4 py-4 text-left">
                {user.phoneNumber ? user.phoneNumber : "N/A"}
              </td>
              <td className="px-4 py-4 text-left">
                {formatDate(user.startDate)}
              </td>
              <td className="px-4 py-4 text-left">
                {user.employeeNumber ? user.employeeNumber : "N/A"}
              </td>
              <PencilAltIcon
                className="stroke-1 text-primary h-10 w-10 mt-6 lg:h-10 lg:w-10 lg:pt-5"
                onClick={() => handleEmployeeClick(user)}
              />
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className="btn-group mx-auto pt-5 flex justify-center">
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={users.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeLists;
