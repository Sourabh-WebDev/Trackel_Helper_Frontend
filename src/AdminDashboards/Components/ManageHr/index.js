import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import ManageEmployee from './ManageEmployee'
import ManageServiceProvider from './ManageServiceProvider'

const AdminManageHr = () => {
  const [attendanceActive, setActiveAttendance] = useState("employee")
  return (
    <Fragment>
      <AdminHeader />
      <div className='position-relative'>
        <AnimatedBackground />
        <div className='BackgroundTopContents'>
          <AdminNavItems />
          <div className="AttendenceTabs px-3">
            <span className={` ${attendanceActive === "employee" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("employee") }}>Manage Employee</span>
            <span className={` ${attendanceActive === "service-provider" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("service-provider") }}>Manage Service Provider</span>
          </div>
          <TabContent activeTab={attendanceActive} >
            <TabPane tabId="employee">
              <ManageEmployee setActiveAttendance={setActiveAttendance} />
            </TabPane>
            <TabPane tabId="service-provider">
              <ManageServiceProvider setActiveAttendance={setActiveAttendance} />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Fragment>
  )
}
export default AdminManageHr