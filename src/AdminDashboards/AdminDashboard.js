import React, { Fragment } from 'react'
import "./AdminDashboard.css"

import StackBox from './Elements/StackBox'

import LineCharts from './Charts/LineCharts'
import { GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid'
import { columns } from '../Dashboard/GridTableCredentials/Colums'
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


const AdminDashboard = () => {
    const { rows, setRows, Show, setShow } = UseStateManager()
    const CustomToolbar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarExport />
                <GridToolbarDensitySelector />
            </GridToolbarContainer>
        );
    };

    const BarKeys = [
        { key: "Income", color: "#81c14b" },
        { key: "Expense", color: "#000000" },
        { key: "Profit", color: "#00FFFF" }
    ]
    return (
        <Fragment>
            <div className='position-relative'>
                <AnimatedBackground />
                <div className='BackgroundTopContents' style={{ overflowX: "hidden" }} >
                    <AdminNavItems />
                    {/* Stacks  */}
                    <h4 className='p-4 fs-5 Fw_600 text-white '>Analytics</h4>

                    <div className='d-flex align-items-center justify-content-between w-100 px-4 pb-4'>
                        <ColoredBtn
                            btnName={"All Orders"}
                            bg={"cornflowerblue"}
                            color={"black"}
                        />
                        <ColoredBtn btnName={"Complete Order"} bg={"green"} color={"black"} />
                        <ColoredBtn btnName={"Running Order"} bg={"yellow"} color={"black"} />
                        <ColoredBtn btnName={"Cancel Order"} bg={"gray"} color={"black"} />
                        <ColoredBtn btnName={"Hold Order"} bg={"#f08080"} color={"black"} />
                        <ColoredBtn btnName={"Due Order"} bg={"#adadec"} color={"black"} />
                        <ColoredBtn btnName={"Pending Order"} bg={"#ffa500"} color={"black"} />
                    </div>

                    <Row>
                        <Col md={7}>
                            <div className='card bg-glass shadow-lg' style={{ height: "50vh", width: "100%" }}>
                                {/* <LineCharts style={{}} /> */}
                                <BarCharts data={barchartdata} dataValue={BarKeys} />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className='DashboardAnalytics'>
                                <StackBox title="Total Income" amount={20000} rupee={true} style={{ background: "linear-gradient(to right bottom ,var(--yellow) , var(--yellow))", gridArea: "one" }} />
                                <StackBox title={"Total Expenses"} amount={20000000} rupee={true} style={{ background: "linear-gradient(to right bottom ,yellow , goldenrod)", gridArea: "two" }} />
                                <StackBox title={"Total Services"} amount={2482} rupee={false} style={{ background: "linear-gradient(to right bottom ,lightgreen , skyblue", gridArea: "three" }} />
                                <StackBox title={"Total Employee"} amount={202} rupee={false} style={{ background: "linear-gradient(to right bottom ,cornflowerblue , aqua", gridArea: "four" }} />
                            </div>
                        </Col>
                    </Row>


                    {/* Graphs */}
                    <div className='p-4'>

                    </div>

                    {/* Data Table  */}
                    <div className='p-4'>
                        <AdminDataTable rows={rows} columns={columns} CustomToolbar={CustomToolbar} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default AdminDashboard