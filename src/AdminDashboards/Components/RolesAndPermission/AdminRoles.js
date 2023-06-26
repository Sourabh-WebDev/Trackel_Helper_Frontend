import { Switch } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

const AdminRoles = () => {
    const [subAttendance, setSubAttendance] = useState(false)
    const [subExpense, setSubExpense] = useState(false)
    const [subCustomer, setSubCustomer] = useState(false)
    const [subHr, setSubHr] = useState(false)
    const [subServices, setSubServices] = useState(false)
    const [subWebsite, setSubWebsite] = useState(false)
    return (
        <Fragment>
            <div className='p-3'>
                <Card className='bg-glass p-3 mt-2'>
                    <h5 className='text-light p-3'>Roles & Permission (<span className='text-primary'>Admin</span>)</h5>
                    <Row>
                        <Col md={6}>
                            <Card className='p-3 shadow-lg d-flex flex-column gap-3'>
                                {/* main role */}
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Attendence</h6>
                                    <Switch onChange={() => setSubAttendance(!subAttendance)} color="warning" />
                                </div>
                                {/* sub roles  */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subAttendance ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- In Attendence</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Out Attendence</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Attendence Report</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Attendence Modify</h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                {/* main role */}
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Expenses</h6>
                                    <Switch onChange={() => setSubExpense(!subExpense)} color="warning" />
                                </div>
                                {/* Sub Role  */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subExpense ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Add & Manage Head Expenses </h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Add Expenses</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Add Collection</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Today's Report</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- All Transaction Report </h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                {/* Main role */}
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Customer</h6>
                                    <Switch onChange={() => setSubCustomer(!subCustomer)} color="warning" />
                                </div>
                                {/* Sub Roles */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subCustomer ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Customer </h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage History</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Monthly Memebers</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Enquiry</h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='p-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage HR</h6>
                                    <Switch onChange={() => { setSubHr(!subHr) }} color="warning" />
                                </div>
                                {/* Sub Roles */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subHr ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Employee </h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Service Provider</h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Master</h6>
                                    <Switch onChange={() => setSubServices(!subServices)} color="warning" />
                                </div>
                                {/* Sub Role  */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subServices ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Sevices </h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Website</h6>
                                    <Switch onChange={() => setSubWebsite(!subWebsite)} color="warning" />
                                </div>
                                {/* Sub Role  */}
                                <div className={`SubRolesAndContents flex-column gap-3 ${subWebsite ? "d-flex" : "d-none"}`}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Testimonial </h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Offer</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Post</h6>
                                        <Switch color="warning" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6>- Manage Advertisement</h6>
                                        <Switch color="warning" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Fragment>
    )
}

export default AdminRoles