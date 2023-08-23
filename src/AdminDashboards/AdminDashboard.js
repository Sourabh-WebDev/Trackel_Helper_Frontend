import React, { Fragment, useEffect, useState } from 'react'
import "./AdminDashboard.css"

import StackBox from './Elements/StackBox'

import LineCharts from './Charts/LineCharts'
import { GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid'
import { GridToolbarContainer } from '@mui/x-data-grid'
import { GridToolbarQuickFilter } from '@mui/x-data-grid'
import { GridToolbarExport } from '@mui/x-data-grid'
import { GridToolbarDensitySelector } from '@mui/x-data-grid'
import { UseStateManager } from '../Context/StateManageContext'
import AnimatedBackground from './Elements/AnimatedBacground'
import AdminNavItems from './Elements/AdminNavItems'
import AdminDataTable from './Elements/AdminDataTable'
import ColoredBtn from './Elements/ColoredBtn'
import { barchartdata } from './DummyData'
import BarCharts from './Charts/BarCharts'
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useUserRoleContext } from '../Context/RolesContext'
import { FiPlusSquare } from 'react-icons/fi'
import ModalComponent from './Elements/ModalComponent'
import AddOrderForm from './Components/Dashboard/AddOrderForm'
import { FormGroup } from 'react-bootstrap'


const AdminDashboard = () => {
    const { rows, setRows, Show, setShow } = UseStateManager()

    const { userRole, setUserRole, UserRoleCalled } = useUserRoleContext();

    const [openAmount, setOpenAmount] = useState(false);

    const toggle = () => setOpenAmount(!openAmount);


    // modal controller
    const toggleAddOrders = () => setShow(!Show)
    const CustomToolbar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarExport />
                <GridToolbarDensitySelector />
                <div onClick={toggleAddOrders} style={{ color: "#ffffff" }} className="cursor-p ">
                    <FiPlusSquare /> Add Order
                </div>
            </GridToolbarContainer>
        );
    };


    const BarKeys = [
        { key: "Income", color: "#81c14b" },
        { key: "Expense", color: "#000000" },
        { key: "Profit", color: "#00FFFF" }
    ]

    const [cellColor, setCellColor] = useState(null)


    const RowDataFilter = (data, cellColor) => {
        let formattedData;
        if (cellColor === null) {
            formattedData = data
        } else {
            formattedData = data.filter(x => x.status === cellColor.type)
        }
        return formattedData
    }

    const getRowClassName = (params) => {
        const status = params.row.status;

        if (status === "Complete") {
            return 'complete-cell';
        } else if (status === "Running") {
            return 'running-cell';
        } else if (status === 'Cancel') {
            return 'cancel-cell';
        } else if (status === 'Hold') {
            return 'hold-cell'
        } else if (status === 'Due') {
            return 'due-cell'
        } else if (status === 'Pending') {
            return 'pending-cell'
        }

        return '';
    };

    const columns = [
        { field: "id", headerName: "ID", flex: 1, minWidth: 100, editable: true },
        { field: "registrarId", headerName: "Customer ID", minWidth: 120, editable: true },
        { field: "orderNumber", headerName: "Order Number", minWidth: 120, editable: true },
        { field: "type", headerName: "Type", minWidth: 80, editable: true },
        { field: "servicetype", headerName: "Service Type", minWidth: 120, editable: true },
        { field: "bookingtime", headerName: "Booking Time", minWidth: 120, editable: true },
        { field: "bookingdate", headerName: "Booking Date", minWidth: 120, editable: true },
        {
            field: "name",
            headerName: "Customer Name",
            flex: 1,
            cellClassName: "name-column--cell",
            minWidth: 150,
            editable: true,
        },

        { field: "service", headerName: "Service Name", minWidth: 120, editable: true },
        { field: "servicedetails", headerName: "Service Details", minWidth: 150, editable: true },
        { field: "supervisor", headerName: "Supervisor", minWidth: 120, editable: true },
        { field: "serviceprovider", headerName: "Service Provider", minWidth: 150, editable: true },
        { field: "vehicleused", headerName: "Vehicle Used", minWidth: 120, editable: true },
        {
            field: "billingamount", headerName: "Billing Amount", minWidth: 150,
            renderCell: (params) => (

                <p

                    onClick={() => setOpenAmount(!openAmount)}
                    style={{
                        borderRadius: "5px",
                        cursor: "pointer",
                        color: "red",

                    }}


                >

                    <Button color="danger">
                        Amount
                    </Button>
                </p>

            ),
        },
        { field: "paidamount", headerName: "Paid Amount", minWidth: 150, editable: true },
        { field: "balanceamount", headerName: "Balance Amount", minWidth: 150, editable: true },
        { field: "paymentmethod", headerName: "Payment Method", minWidth: 150, editable: true },
        {
            field: "backofficeremark",
            headerName: "Back Office Remark",
            minWidth: 180,
            editable: true,
        },
        { field: "adminremark", headerName: "Admin Remark", minWidth: 150, editable: true },
        { field: "providerratings", headerName: "Provider Ratings", minWidth: 150, editable: true },
        {
            field: "superadminremark",
            headerName: "Super Admin Remark",
            minWidth: 180,
            editable: true,
        },
        {
            field: "serviceproviderremark",
            headerName: "Service Provider Remark",
            minWidth: 180,
            editable: true,
        },
        { field: "orderstatus", headerName: "Order Status", minWidth: 150, editable: true },
        { field: "canclereason", headerName: "Cancel Reason", minWidth: 150, editable: true },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            minWidth: 80,
            editable: true,
        },
        { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150, editable: true },
        { field: "email", headerName: "Email", flex: 1, minWidth: 150, editable: true },
        { field: "address", headerName: "Address", flex: 1, minWidth: 150, editable: true },
        { field: "city", headerName: "City", flex: 1, minWidth: 150, editable: true },
        { field: "zipCode", headerName: "Zip Code", flex: 1, minWidth: 150, editable: true },
        {
            field: "action",
            headerName: "Action",
            renderCell: (params) => (
                <select
                    className="p-2 border-0"
                    style={{ borderRadius: "5px", outline: "none", cursor: "pointer" }}
                >
                    <option value="Cancel">Cancel</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Hold">Hold</option>
                    <option value="Complete">Complete</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                </select>
            ),
            minWidth: 150,
            editable: true,
        },
        {
            field: "status",
            headerName: "Status",
            className: "centerTheElement",
            renderCell: (params) => (
                <p
                    className="text-danger p-2 bg-light"
                    style={{
                        borderRadius: "5px",
                        cursor: "pointer",
                        transform: "translate(25%,25%)",
                    }}
                >
                    Check In
                </p>
            ),
            minWidth: 150,
            editable: true,
        },
    ];

    const AmountModal = () => {

        return (
            <Modal isOpen={openAmount} toggle={toggle} >
                <ModalHeader toggle={toggle}>BILLING DEATILS </ModalHeader>
                <ModalBody>
                    <FormGroup>

                        <Label for="exampleSelect">
                            Payment Method
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Cash in Hand
                            </option>
                            <option>
                                Chaque
                            </option>
                            <option>
                                Online
                            </option>

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNumber">
                            Bill Amount
                        </Label>
                        <Input
                            id="exampleNumber"
                            name="number"
                            placeholder=""
                            type="number"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNumber">
                            Paid Amount
                        </Label>
                        <Input
                            id="exampleNumber"
                            name="number"
                            placeholder=""
                            type="number"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNumber">
                            Balance Amount
                        </Label>
                        <Input
                            id="exampleNumber"
                            name="number"
                            placeholder=""
                            type="number"
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>

                    <Button color="primary" onClick={toggle}>
                        Save
                    </Button>{' '}

                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>

                </ModalFooter>
            </Modal>
        )
    }

    return (
        <Fragment>
            <ModalComponent modalTitle={"Add Order"} modal={Show} toggle={toggleAddOrders} data={<AddOrderForm />} />
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents' style={{ overflowX: "hidden" }} >
                    {userRole && userRole.Dashboard ?
                        <AdminNavItems />
                        : null}
                    <h4 className='p-4 fs-5 Fw_600 text-white '>{userRole && userRole.Dashboard ? "Analytics" : "Dashboard"}</h4>

                    <div className='d-flex align-items-center justify-content-between w-100 px-4 pb-4'>
                        <ColoredBtn
                            onClick={() => { setCellColor(null) }}
                            btnName={"All Orders"}
                            bg={"cornflowerblue"}
                            color={"black"}
                        />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Complete", color: 'green' }) }} btnName={"Complete Order"} bg={"green"} color={"black"} />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Running", color: 'yellow' }) }} btnName={"Running Order"} bg={"yellow"} color={"black"} />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Cancel", color: 'gray' }) }} btnName={"Cancel Order"} bg={"gray"} color={"black"} />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Hold", color: '#f08080' }) }} btnName={"Hold Order"} bg={"#f08080"} color={"black"} />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Due", color: '#adadec' }) }} btnName={"Due Order"} bg={"#adadec"} color={"black"} />
                        <ColoredBtn onClick={() => { setCellColor({ type: "Pending", color: '#ffa500' }) }} btnName={"Pending Order"} bg={"#ffa500"} color={"black"} />
                    </div>

                    {userRole && userRole.Dashboard ?
                        <Row>
                            {/* <Col md={7}>
                                <div className='card bg-glass shadow-lg' style={{ height: "50vh", width: "100%" }}>
                                    <BarCharts data={barchartdata} dataValue={BarKeys} />
                                </div>
                            </Col> */}
                            <Col md={12}>
                                <div className='DashboardAnalytics'>
                                    <StackBox title="Total Income" amount={20000} rupee={true} style={{ background: "linear-gradient(to right bottom ,var(--yellow) , var(--yellow))", gridArea: "one" }} />
                                    <StackBox title={"Total Expenses"} amount={20000000} rupee={true} style={{ background: "linear-gradient(to right bottom ,yellow , goldenrod)", gridArea: "two" }} />
                                    <StackBox title={"Total Services"} amount={2482} rupee={false} style={{ background: "linear-gradient(to right bottom ,lightgreen , skyblue", gridArea: "three" }} />
                                    <StackBox title={"Total Employee"} amount={202} rupee={false} style={{ background: "linear-gradient(to right bottom ,cornflowerblue , aqua", gridArea: "four" }} />
                                </div>
                            </Col>
                        </Row>

                        : null}

                    {/* Data Table  */}
                    <div className='p-4'>
                        <AdminDataTable rows={RowDataFilter(rows, cellColor)} getRowClassName={getRowClassName} columns={columns} CustomToolbar={CustomToolbar} cellcolor={cellColor !== null ? cellColor.color : null} />
                    </div>
                </div>
            </div>
            <AmountModal />
        </Fragment>
    )
}

export default AdminDashboard