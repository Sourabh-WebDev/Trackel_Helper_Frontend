import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { CustomerRemarkModal, ServeiceRequestModal } from '../../Components/Modal';

const MyProfile = ({ serviceData }) => {

    const [serveRequestModalOpen, setserveRequestModalOpen] = useState(false)
    const [customerRemarkModalOpen, setCustomerRemarkModalOpen] = useState(false)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, headerCenter: true },
        { field: 'serviceName', headerName: 'Service Name', width: 180, headerCenter: true },
        { field: 'bookigDate', headerName: 'Bookig Date', width: 100, headerCenter: true },
        { field: 'bookigTime', headerName: 'Bookig Time', width: 100, headerCenter: true },
        { field: 'serviceDetails', headerName: 'Service Details', width: 200, headerCenter: true },
        { field: 'supervisor', headerName: 'Supervisor', width: 100, headerCenter: true },
        { field: 'serviceProvider', headerName: 'Service Provider', width: 150, headerCenter: true },
        { field: 'billingAmount', headerName: 'Billing Amount', width: 150, headerCenter: true },
        { field: 'paidAmount', headerName: 'Paid Amount', width: 150, headerCenter: true },
        { field: 'balanceAmount', headerName: 'Balance Amount', width: 150, headerCenter: true },
        { field: 'paymentMethod', headerName: 'Payment Method', width: 180, headerCenter: true },
        {
            field: 'customerRemark', headerName: 'Customer Remark', width: 180, headerCenter: true,
            renderCell: (params) => (<Button color='success' onClick={() => setCustomerRemarkModalOpen(!customerRemarkModalOpen)} variant='contained'>Add Remark</Button>)
        },
        { field: 'supervisorRemark', headerName: 'Supervisor Remark', width: 180, headerCenter: true },
        {
            field: 'orderStatus',
            headerCenter: true,
            width: 200,
            headerName: 'Order Status',
            renderCell: (params) => (<Button color='error' variant='contained'>Cancel</Button>)
        }
    ];
    const rows = [
        {
            id: 1,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
        {
            id: 2,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
        {
            id: 3,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
        {
            id: 4,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
        {
            id: 5,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
        {
            id: 6,
            serviceName: 'Plumber',
            bookigDate: '22-02-2003',
            bookingTime: '10:30 PM',
            serviceDetails: 'water tank cleaning',
            supervisor: 'NA',
            serviceProvider: 'Hari Om',
            billingAmount: '900',
            paidAmount: '900',
            balanceAmount: '0',
            paymentMethod: 'Cash',
            customerRemark: 'NA',
            supervisorRemark: 'NA'
        },
    ]


    return (
        <div>
            <CustomerRemarkModal
                customerRemarkModalOpen={customerRemarkModalOpen}
                customerRemarkModalfunction={() => setCustomerRemarkModalOpen(!customerRemarkModalOpen)}
            />
            <Row>
                <Col xs={12} lg={4} xl={4} >
                    <Card className='mt-2'>
                        <CardBody className="text-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '150px' }}
                                fluid />
                            <h6 className="text-muted mb-1">{serviceData.name}</h6>
                            <p className="text-muted mb-2">Bay Area, San Francisco, CA</p>
                            <div className="d-flex justify-content-center">
                                <h5>Memeber Id: <span style={{ color: '#ff0000' }}>HM10884</span></h5>
                            </div>
                            <Button onClick={() => setserveRequestModalOpen(!serveRequestModalOpen)} sx={{ background: '#3d5ce8' }} variant='contained'> Request New Service </Button>
                            <ServeiceRequestModal
                                serveRequestModalOpen={serveRequestModalOpen}
                                serveRequestModalOpenfunction={() => setserveRequestModalOpen(!serveRequestModalOpen)} />
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} lg={8} xl={8} >
                    <Card className="mt-2 py-2">
                        <div className='pl-2 pt-2 pr-2 pb-2'>
                            <Row>
                                <Col sm="3">
                                    <h5>Full Name</h5>
                                </Col>
                                <Col sm="9">
                                    <p className="text-muted">{serviceData.name}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm="3">
                                    <h5>Gender</h5>
                                </Col>
                                <Col sm="9">
                                    <p className="text-muted">Male</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm="3">
                                    <h5>Email</h5>
                                </Col>
                                <Col sm="9">
                                    <p className="text-muted">{serviceData.email}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm="3">
                                    <h5>Mobile</h5>
                                </Col>
                                <Col sm="9">
                                    <p className="text-muted">{serviceData.mobileNo}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm="3">
                                    <h5>Address</h5>
                                </Col>
                                <Col sm="9">
                                    <p className="text-muted">Bay Area, San Francisco, CA</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className='py-2'>
                <Col xs={12}>
                    {/* Map over serviceData and create a table */}
                    <Card>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MyProfile