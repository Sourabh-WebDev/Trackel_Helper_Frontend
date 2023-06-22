import { Switch } from '@mui/material'
import React, { Fragment } from 'react'
import { Card, Col, Input, Row } from 'reactstrap'

const AdminRoles = () => {
    return (
        <Fragment>
            <div className='p-3'>
                <Card className='bg-glass p-3 mt-2'>
                    <h5 className='text-light p-3'>Roles & Permission (<span className='text-primary'>Admin</span>)</h5>
                    <Row>
                        <Col md={6}>
                            <Card className='p-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Attendence</h6>
                                    <Switch defaultChecked color="warning" />
                                </div>

                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Expenses</h6>
                                    <Switch defaultChecked color="warning" />
                                </div>

                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Customer</h6>
                                    <Switch defaultChecked color="warning" />
                                </div>

                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='p-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage HR</h6>
                                    <Switch defaultChecked color="warning" />
                                </div>

                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Master</h6>
                                    <Switch defaultChecked color="warning" />
                                </div>

                            </Card>
                            <Card className='p-3 mt-3 shadow-lg d-flex flex-column gap-3'>
                                <div className='permissionWithSwitch d-flex align-items-center justify-content-between'>
                                    <h6 className='Fw_600 text-blue'>Manage Website</h6>
                                    <Switch defaultChecked color="warning" />
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