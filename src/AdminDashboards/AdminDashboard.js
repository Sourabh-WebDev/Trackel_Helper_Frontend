import React, { Fragment, useEffect, useState } from 'react'
import "./AdminDashboard.css"

import StackBox from './Elements/StackBox'

import LineCharts from './Charts/LineCharts'
import { GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid'
import { columns } from './GridTableCredentials/Colums'
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
import { Col, Row } from 'reactstrap'
import { useUserRoleContext } from '../Context/RolesContext'
import { FiPlusSquare } from 'react-icons/fi'
import ModalComponent from './Elements/ModalComponent'
import AddOrderForm from './Components/Dashboard/AddOrderForm'


const AdminDashboard = () => {
    const { rows, setRows, Show, setShow } = UseStateManager()

    const { userRole, setUserRole, UserRoleCalled } = useUserRoleContext();


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

        </Fragment>
    )
}

export default AdminDashboard