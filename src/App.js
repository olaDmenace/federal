import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Membership/Login/Login";
import Register from "./Membership/Register/Register";
import Verify from "./Membership/Register/VerifyMail";
import ResetPassword from "./Membership/UserRecovery/ResetPassword";
import CreatePassword from "./Membership/UserRecovery/CreateNewPassword";
import Membership from "./Membership/Membership";
import Dashboard from "./dashboard/Dashboard";
import TruckVisibilityReport from "./dashboard/dashboard/TruckVisibiltyReport";
import TruckProgramming from "./dashboard/operations/TruckProgramming";
import Journeymanagement from "./dashboard/operations/JourneyManagement/Journeymanagement";
import AssetRegister from "./dashboard/operations/assetRegister/AssetRegister";
import ShortageResolution from "./dashboard/operations/shortageResolution/ShortageResolution";
import TripExpense from "./dashboard/operations/tripExpense/TripExpense";
import AbsenceForm from "./dashboard/hr/AbsenceForm";
import ConsequenceManagement from "./dashboard/hr/ConsequenceManagement";
import TrainingForm from "./dashboard/hr/TrainingForm";
import UserDashboard from "./dashboard/dashboard/Dashboard.jsx";
import TifForm from "./dashboard/healthandsafety/TifForm";
import MaintenanceExpenses from "./dashboard/operation support/maintenanceExpenses/MaintenanceExpenses";
import InventoryRequest from "./dashboard/operation support/inventoryRequest/InventoryRequest";
import MaintenanceBooking from "./dashboard/operation support/maintenanceBooking/maintenanceBooking";
import MaintenanceInspection from "./dashboard/operation support/maintenanceInspection/maintenanceInspection";
import PartsAndInventory from "./dashboard/operation support/partandInventory/PartsAndInventory";
import Utilities from "./dashboard/operation support/Utilities/Utilities";
import WaybillsManagement from "./dashboard/operations/waybills/WaybillsManagement";
import TruckAssignment from "./dashboard/operations/truckAssignment/TruckAssignment";
import Employee from "./dashboard/hr/Employee";
import EmployeeLists from "./dashboard/EmployeeDetails/employeeLists";
import Notifications from "./dashboard/notifications/Notifications";
import ProductDetails from "./dashboard/operations/shortageResolution/ProductDetails";
import TruckDetails from "./dashboard/dashboard/TruckDetails";
import TruckResolution from "./dashboard/operations/shortageResolution/TruckResolution";
import ChangeStatus from "./dashboard/operations/ChangeStatus";


/* ***IMPORTANT NOTICE***
    This project is a React JS project buitl with Daisy UI Tailwind CSS UI component.
    Below is a list of routes and links on the app. 
*/

function App() {
  // const user = useSelector(state=>state.isAuthenticated);
  // console.log(user)

  return (
    <div className="App">
      {/* <Reg /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Membership />}>
            <Route path="" index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify" element={<Verify />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="CreatePassword" element={<CreatePassword />} />
          </Route>
          <Route path="/welcome" element={<UserDashboard />} />
          <Route path="/dashboard"   element={<Dashboard />}>
            <Route path='' element={<TruckDetails />} />
            {/* <Route path="" element={<TruckVisibilityReport />} /> */}
            <Route path="TruckProgramming" element={<TruckProgramming />} />
            <Route path="JourneyManagement" element={<Journeymanagement />} />
            <Route path="AssetRegister" element={<AssetRegister />} />
            <Route path="TruckAssignment" element={<TruckAssignment />} />
            <Route path="ShortageResolution" element={<ShortageResolution />} />
            <Route path="ChangeStatus" element={<ChangeStatus />} />
            <Route path="TripExpense" element={<TripExpense />} />
            <Route path={"AbsenceForm"} element={<AbsenceForm />} />
            <Route
              path={"ConsequenceManagement"}
              element={<ConsequenceManagement />}
            />
            <Route path={"Training"} element={<TrainingForm />} />
            <Route path="Employee" element={<Employee />} />
            <Route path="tifForm" element={<TifForm />} />
            <Route
              path="maintenanceExpenses"
              element={<MaintenanceExpenses />}
            />
            <Route path="inventoryRequest" element={<InventoryRequest />} />
            <Route path="maintenanceBooking" element={<MaintenanceBooking />} />
            <Route
              path="maintenanceInspection"
              element={<MaintenanceInspection />}
            />
            <Route path="partsAndInventory" element={<PartsAndInventory />} />
            <Route path="utilities" element={<Utilities />} />
            <Route path="waybills" element={<WaybillsManagement />} />

            <Route path={"EmployeeList"} element={<EmployeeLists />} />
            <Route path="Notifications" element={<Notifications />} />
            <Route path={"productDetails/:id"} element={<ProductDetails />} />
            {/* <Route
              path={"TruckVisibilityReport"}
              element={<TruckVisibilityReport />}
            /> */}
            <Route path={"TruckResolution/:id"} element={<TruckResolution />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
