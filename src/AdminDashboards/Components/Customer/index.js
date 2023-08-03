import React, { Fragment, useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import ManageCustomer from './ManageCustomer'
import CustomerHistory from './CustomerHistory'
import MonthlyMembers from './MonthlyMembers'
import ManageEnquiry from './ManageEnquiry'
import { useUserRoleContext } from '../../../Context/RolesContext'

const AdminCustomerManage = () => {
    const [attendanceActive, setActiveAttendance] = useState("customer")

    const { userRole, setUserRole, UserRoleCalled } = useUserRoleContext();
    // to set the active page 
    const ActiveTabFunction = () => {
        if (userRole.ManageCustomer) {
            setActiveAttendance('customer')
        } else if (userRole.AttendenceReport) {
            setActiveAttendance("report")
        } else if (userRole.AttendenceModify) {
            setActiveAttendance("modify")
        } else {
            setActiveAttendance('in')
        }
    }

    useEffect(() => {
        UserRoleCalled()
    }, [])

    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        {userRole && userRole.ManageCustomer ? <span className={` ${attendanceActive === "customer" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("customer") }}>Manage Customers</span> : null}
                        {userRole && userRole.ManageHistory ? <span className={` ${attendanceActive === "history" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("history") }}>Manage History</span> : null}
                        {userRole && userRole.MonthlyMembers ? <span className={` ${attendanceActive === "members" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("members") }}>Manage Members</span> : null}
                        {userRole && userRole.ManageEnquiry ? < span className={` ${attendanceActive === "enquiry" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("enquiry") }}>Manage Enquiry</span> : null}
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
        </Fragment >
    )
}

export default AdminCustomerManage