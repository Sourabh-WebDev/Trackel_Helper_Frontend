import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import { TabContent, TabPane } from 'reactstrap'
import InAttendenceTable from './InAttendenceTable'
import OutAttendenceTable from './OutAttendenceTable'
import AttendenceReport from './AttendenceReport'
import AttendenceModify from './AttendenceModify'
import AdminNavItems from '../../Elements/AdminNavItems'
import AnimatedBackground from '../../Elements/AnimatedBacground'

const AdminAttendance = () => {
    const [attendanceActive, setActiveAttendance] = useState("in")
    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        <span className={` ${attendanceActive === "in" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("in") }}>In Attendence</span>
                        <span className={` ${attendanceActive === "out" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("out") }}>Out Attendence</span>
                        <span className={` ${attendanceActive === "report" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("report") }}>Attendance Report</span>
                        <span className={` ${attendanceActive === "modify" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("modify") }}>Attendance Modify</span>
                    </div>
                    <TabContent activeTab={attendanceActive} >
                        <TabPane tabId="in">
                            <InAttendenceTable />
                        </TabPane>
                        <TabPane tabId="out">
                            <OutAttendenceTable />
                        </TabPane>
                        <TabPane tabId="report">
                            <AttendenceReport />
                        </TabPane>
                        <TabPane tabId="modify">
                            <AttendenceModify />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminAttendance