import React, { useEffect, useState } from "react";
import FormTitle from "../FormTitle";
import endpoint from "../../utils/endpoints/endpoint";
import * as xlsx from "xlsx";

const EmployeeLists = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  useEffect(() => {
    endpoint
      .get(`/user?PageNumber=${currentPage}&PageSize=${pageSize}&Paginate=true`)
      .then((res) => {
        console.log(res.data.data, "users");
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, pageSize]);

  // CSV Download of Visibility Report
  function downloadDataAsXLSX() {
    console.log(allUsers);

    // Remove "userId" and "roleId" properties from each object in allUsers array
    const modifiedUsers = allUsers.map(({ userId, roleId, ...rest }) => rest);

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
  }

  // function downloadDataAsCSV() {
  //   console.log(allUsers);
  //   const worksheet = xlsx.utils.json_to_sheet(allUsers);
  //   const workbook = xlsx.utils.book_new();
  //   xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  //   const csvData = xlsx.utils.sheet_to_csv(worksheet);

  //   const blob = new Blob([csvData], { type: "text/csv" });
  //   const downloadUrl = URL.createObjectURL(blob);

  //   const link = document.createElement("a");
  //   link.href = downloadUrl;
  //   link.download = "Employee List.xls";
  //   link.click();
  // }

  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    endpoint
      .get("user")
      .then((res) => {
        console.log(res.data.data, "all users");
        setAllUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEmployeeClick = (employee, event) => {
    event.preventDefault();
    setSelectedEmployee(employee);
  };

  function formatDate(arg) {
    const date = new Date(arg);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  return (
    <div className="overflow-x-auto bg-white rounded-lg p-5">
      <div className="md:flex justify-between items-center">
        <FormTitle Title={"Employee Details"} />
        <button className="btn btn-primary" onClick={downloadDataAsXLSX}>
          Download
        </button>
      </div>
      <table className="table-auto w-full  text-primary">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-4 text-left ">S/N</th>
            <th className="px-4 py-4 text-left">Employees Name</th>
            <th className="px-4 py-4 text-left">Role</th>
            <th className="px-4 py-4 text-left">Email</th>
            <th className="px-4 py-4 text-left">Phone Number</th>
            <th className="px-4 py-4 text-left">Start Date</th>
            <th className="px-4 py-4 text-left">Leave Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.userId}
              className="border-b hover:bg-gray-100 "
              // onClick={() => handleEmployeeClick(user)}
            >
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
                {formatDate(user.leaveDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn-group mx-auto pt-5 flex justify-center">
        <button
          class="btn btn-primary "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="btn btn-primary "
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
