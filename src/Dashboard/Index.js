import React, { Fragment } from 'react'
import DashHeader from './DashboardComponents/Global/DashHeader'
import Dashboard from './Components/Dashboard'
import { UseStateManager } from '../Context/StateManageContext'
import { TabContent, TabPane } from 'reactstrap'
import InAttendenceTable from './Components/Attendence/InAttendenceTable'
import OutAttendenceTable from './Components/Attendence/OutAttendenceTable'
import AttendenceReport from './Components/Attendence/AttendenceReport'
import AttendenceModify from './Components/Attendence/AttendenceModify'

const SuperAdminPannel = () => {
    // ActivePage from context  
    const { activeTab, setActiveTab } = UseStateManager()
    return (
        <Fragment>
            <DashHeader />
            <Dashboard />
            {/* <TabContent activeTab={activeTab}>
                <TabPane tabId="Dashboard">
                    <Dashboard />
                </TabPane>
                <TabPane tabId="In Time">
                    <InAttendenceTable />
                </TabPane>
                <TabPane tabId="Out Time">
                    <OutAttendenceTable />
                </TabPane>
                <TabPane tabId="Report">
                    <AttendenceReport />
                </TabPane>
                <TabPane tabId="Modify">
                    <AttendenceModify />
                </TabPane>
            </TabContent> */}
        </Fragment>
    )
}

export default SuperAdminPannel