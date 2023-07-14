import React, { useEffect, useState } from "react";
import FormTitle from "../FormTitle";
import endpoint from "../../utils/endpoints/endpoint";
import * as xlsx from "xlsx";

// const EmployeeDetails = ({ employee }) => {
//   return (
//     <div className="bg-white border p-4">
//       <h2 className="text-xl font-bold mb-2">
//         {employee.firstName} {employee.lastName}
//       </h2>
//       <p>
//         <strong>Role: </strong>
//         {employee.roleName}
//       </p>
//       <p>
//         <strong>Email: </strong>
//         {employee.email}
//       </p>
//       <p>
//         <strong>Phone Number: </strong>
//         {employee.phoneNumber}
//       </p>
//       <p>
//         <strong>Address: </strong>
//         {employee.address}
//       </p>
//       <p>
//         <strong>Date of Birth: </strong>
//         {employee.dateOfBirth}
//       </p>
//       <p>
//         <strong>Gender: </strong>
//         {employee.gender}
//       </p>
//       <p>
//         <strong>roleId: </strong>
//         {employee.roleId}
//       </p>
//     </div>
//   );
// };

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
  function downloadDataAsCSV() {
    console.log(users);
    const worksheet = xlsx.utils.json_to_sheet(users);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const csvData = xlsx.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvData], { type: "text/csv" });
    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Employee List.csv";
    link.click();
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEmployeeClick = (employee, event) => {
    event.preventDefault();
    setSelectedEmployee(employee);
  };
  return (
    <div className="overflow-x-auto bg-white rounded-lg p-5">
      <div className="md:flex justify-between items-center">
        <FormTitle Title={"Employee Details"} />
        <button className="btn btn-primary" onClick={downloadDataAsCSV}>
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
      {/* {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />} */}
    </div>
  );
};

export default EmployeeLists;
