import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Card, CardBody, p, Col, Row } from 'reactstrap'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios'
import { API_URL } from '../../config'
import { BugReportTwoTone } from '@mui/icons-material'
import { Button } from '@mui/material'


const ProfileHistory = () => {

    const { id } = useParams()


    const [serviceData, setServiceData] = useState([]);


    useEffect(() => {
        axios.get(`${API_URL}/customer/getbyid/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.data)
                    setServiceData(response.data.data);
                    // console.log(response.data) // Assuming the fetched data structure has a 'serviceHistory' property
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);


    // console.log(serviceData)

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
            renderCell: (params) => (<Button color='success' variant='contained'>Add Remark</Button>)
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
            <Navbar />
            <Header />
            <div>
                <div style={{ background: '#3d5ce8', borderRadius: '0px 0px 50px 50px', padding: '15px' }}>
                    <Button color='error' variant='text'>My Profile</Button>
                    <Button color='error' variant='text'>Edit Profile</Button>
                    <Button color='error' variant='text'>Manage Post</Button>
                    <Button color='error' variant='text'>Logout</Button>
                </div>
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
                                <p className="text-muted mb-1">{serviceData.name}</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                {/* <div className="d-flex justify-content-center mb-2">
                                    <Button>Follow</Button>
                                    <Button outline className="ms-1">Message</Button>
                                </div> */}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} lg={8} xl={8} >
                        <Card className="mt-2">
                            <CardBody>
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
                            </CardBody>
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

            <div className='profilePadding'>
                <Footer />
            </div>
        </div>
    )
}

export default ProfileHistory