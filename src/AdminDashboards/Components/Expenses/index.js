import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import ManageHeadExpenses from './ManageHeadExpenses'
import AddExpense from './AddExpense'
import AddCollections from './AddCollections'
import TodaysReport from './TodaysReport'
import AllTransactionReport from './AllTransactionReport'

const AdminExpenses = () => {
    const [attendanceActive, setActiveAttendance] = useState("head")
    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        <span className={` ${attendanceActive === "head" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("head") }}>Add/Manage Expense Head</span>
                        <span className={` ${attendanceActive === "expense" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("expense") }}>Add Expense</span>
                        <span className={` ${attendanceActive === "collection" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("collection") }}>Add Collection</span>
                        <span className={` ${attendanceActive === "report" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("report") }}>Today's Report</span>
                        <span className={` ${attendanceActive === "all" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("all") }}>All Transaction Report</span>
                    </div>
                    <TabContent activeTab={attendanceActive} >
                        <TabPane tabId="head">
                            <ManageHeadExpenses setActiveAttendance={setActiveAttendance} />
                        </TabPane>
                        <TabPane tabId="expense">
                            <AddExpense setActiveAttendance={setActiveAttendance} />
                        </TabPane>
                        <TabPane tabId="collection">
                            <AddCollections setActiveAttendance={setActiveAttendance} />
                        </TabPane>
                        <TabPane tabId="report">
                            <TodaysReport setActiveAttendance={setActiveAttendance} />
                        </TabPane>
                        <TabPane tabId="all">
                            <AllTransactionReport setActiveAttendance={setActiveAttendance} />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminExpenses;