import React, { Fragment, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AnimatedBackground from '../../Elements/AnimatedBacground'
import AdminNavItems from '../../Elements/AdminNavItems'
import { TabContent, TabPane } from 'reactstrap'
import ManageTestimonials from './ManageTestimonials'
import ManagePost from './ManagePost'
import ManageOffer from './ManageOffer'
import ManageAdvertisement from './ManageAdvertisement'

const AdminManageWebsite = () => {
    const [attendanceActive, setActiveAttendance] = useState("testimonial")
    return (
        <Fragment>
            <AdminHeader />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents'>
                    <AdminNavItems />
                    <div className="AttendenceTabs px-3">
                        <span className={` ${attendanceActive === "testimonial" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("testimonial") }}>Manage Testimonial</span>
                        <span className={` ${attendanceActive === "post" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("post") }}>Manage Post</span>
                        <span className={` ${attendanceActive === "offer" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("offer") }}>Manage Offer</span>
                        <span className={` ${attendanceActive === "advertisement" ? "AttendenceTabs_Active" : ""}`} onClick={() => { setActiveAttendance("advertisement") }}>Manage Advertisement</span>
                    </div>
                    <TabContent activeTab={attendanceActive} >
                        <TabPane tabId="testimonial">
                            <ManageTestimonials />
                        </TabPane>
                        <TabPane tabId="post">
                            <ManagePost />
                        </TabPane>
                        <TabPane tabId="offer">
                            <ManageOffer />
                        </TabPane>
                        <TabPane tabId="advertisement">
                            <ManageAdvertisement />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminManageWebsite