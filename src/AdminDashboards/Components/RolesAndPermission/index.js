import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import AdminRoles from './AdminRoles'
import SupervisorRoles from './SupervisorRoles'
import OfficeRoles from './OfficeRoles'

const AdminRolesAndPermission = () => {
    const [attendanceActive, setActiveAttendance] = useState("customer")
    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        <span className={` ${attendanceActive === "admin" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("admin") }}>Admin</span>
                        <span className={` ${attendanceActive === "supervisor" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("supervisor") }}>Supervisor</span>
                        <span className={` ${attendanceActive === "office" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("office") }}>Back Office</span>
                        {/* <span className={` ${attendanceActive === "enquiry" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("enquiry") }}></span> */}
                    </div>
                    <TabContent activeTab={attendanceActive} >
                        <TabPane tabId="admin">
                            <AdminRoles />
                        </TabPane>
                        <TabPane tabId="supervisor">
                            <SupervisorRoles />
                        </TabPane>
                        <TabPane tabId="office">
                            <OfficeRoles />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminRolesAndPermission