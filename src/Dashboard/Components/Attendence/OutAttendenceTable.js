import { Box } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { columns } from '../../GridTableCredentials/Colums'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import DashHeader from '../../DashboardComponents/Global/DashHeader';
// import { Card } from 'reactstrap'


const OutAttendenceTable = () => {

    const [selctedAttendence, setSelectedAttendence] = useState("Employee")
    return (
        <Fragment>
            <DashHeader />
            <div className='p-3'>
                <h3 className='headingBelowBorder py-3 text-blue' style={{ maxWidth: "fit-content" }} >Attendence <sup><small>(Out)</small></sup></h3>
                <div className='AttendenceNavBtn w-100 py-2 gap-3'>
                    {["Employee", "Service Provider", "Out Source"].map((item, index) => (
                        <div className={`py-3 px-5 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex align-items-center justify-content-center  ${selctedAttendence === item ? "hoverThis_active" : ""}`} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={() => { setSelectedAttendence(item) }}>
                            {item}
                        </div>
                    ))}
                </div>
                <Box>
                    {/* <Header
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
        /> */}
                    <Box
                        m="0px 0 0 0"
                        height="75vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                // color: colors.greenAccent[300],
                                color: "#e52c2a",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                // backgroundColor: colors.blueAccent[700],
                                backgroundColor: "#112c85",
                                borderBottom: "none",
                                color: "#ffffff",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: "#f2f0f0",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                // backgroundColor: colors.blueAccent[700],
                                backgroundColor: "#112c85",
                                color: "#ffffff",
                            },
                            "& .MuiCheckbox-root": {
                                color: `#1e5245 !important`,
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: `#4d4d4d !important`,
                            },
                            "& .MuiSvgIcon-root": {
                                fill: "#8c8c8c",
                            },
                            "& .MuiTablePagination-root": {
                                color: "#ffffff",
                            },
                        }}
                    >
                        <DataGrid
                            rows={mockDataContacts}
                            columns={columns}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
            </div>
        </Fragment>
    )
}

export default OutAttendenceTable