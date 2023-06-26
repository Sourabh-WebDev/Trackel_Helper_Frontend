import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import ManageCustomer from './ManageCustomer'
import CustomerHistory from './CustomerHistory'
import MonthlyMembers from './MonthlyMembers'
import ManageEnquiry from './ManageEnquiry'

const AdminCustomerManage = () => {
    const [attendanceActive, setActiveAttendance] = useState("customer")
    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        <span className={` ${attendanceActive === "customer" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("customer") }}>Manage Customers</span>
                        <span className={` ${attendanceActive === "history" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("history") }}>Manage History</span>
                        <span className={` ${attendanceActive === "members" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("members") }}>Manage Members</span>
                        <span className={` ${attendanceActive === "enquiry" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("enquiry") }}>Manage Enquiry</span>
                    </div>
                    <TabContent activeTab={attendanceActive} >
                        <TabPane tabId="customer">
                            <ManageCustomer />
                        </TabPane>
                        <TabPane tabId="history">
                            <CustomerHistory />
                        </TabPane>
                        <TabPane tabId="members">
                            <MonthlyMembers />
                        </TabPane>
                        <TabPane tabId="enquiry">
                            <ManageEnquiry />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminCustomerManage