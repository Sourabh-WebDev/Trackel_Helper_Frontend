import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ServicePage from './LandingPage/Pages/ServicePage';
import OurServices from './LandingPage/Pages/OurServices';
import ContactUs from './LandingPage/Pages/ContactUs';
import SuperAdminPannel from "./Dashboard/Index"
import InAttendenceTable from './Dashboard/Components/Attendence/InAttendenceTable';
import OutAttendenceTable from './Dashboard/Components/Attendence/OutAttendenceTable';
import AttendenceModify from './Dashboard/Components/Attendence/AttendenceModify';
import AttendenceReport from './Dashboard/Components/Attendence/AttendenceReport';
import ManageHeadExpenses from './Dashboard/Components/Expenses/ManageHeadExpenses';
import AddExpense from './Dashboard/Components/Expenses/AddExpense';
import AddCollections from './Dashboard/Components/Expenses/AddCollections';
import TodaysReport from './Dashboard/Components/Expenses/TodaysReport';
import AllTransactionReport from './Dashboard/Components/Expenses/AllTransactionReport';
import ManageEmployee from './Dashboard/Components/ManageHr/ManageEmployee';
import ManageServiceProvider from './Dashboard/Components/ManageHr/ManageServiceProvider';
import ManageService from './Dashboard/Components/ManageMaster/ManageService';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/serviceName' element={<ServicePage />} />
        <Route path='/Our-All-Services' element={<OurServices />} />
        <Route path='/Contact-Us' element={<ContactUs />} />



        {/* Dashboard Routes */}

        <Route path='/admin' element={<SuperAdminPannel />} />
        <Route path='/attendence/in-time' element={<InAttendenceTable />} />
        <Route path='/attendence/out-time' element={<OutAttendenceTable />} />
        <Route path='/attendence/report' element={<AttendenceReport />} />
        <Route path='/attendence/modify' element={<AttendenceModify />} />
        <Route path='/expense/add/manage-expense-head' element={<ManageHeadExpenses />} />
        <Route path='/expense/add-expense' element={<AddExpense />} />
        <Route path='/expense/add-collection' element={<AddCollections />} />
        <Route path='/expense/today-report' element={<TodaysReport />} />
        <Route path='/expense/all-transaction-report' element={<AllTransactionReport />} />
        <Route path='/managehr/manage-employee' element={<ManageEmployee />} />
        <Route path='/managehr/manage-service-provider' element={<ManageServiceProvider />} />
        <Route path='/managemaster/manage-services' element={<ManageService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
