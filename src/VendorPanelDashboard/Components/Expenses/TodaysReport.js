import React, { Fragment, useState } from 'react'
import DashHeader from '../../DashboardComponents/Global/DashHeader'
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { Box } from '@mui/material';
import { mockDataContacts } from '../../data/mockData';

const TodaysReport = () => {

    const [selctedAttendence, setSelectedAttendence] = useState("All")
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

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "registrarId", flex: 1, headerName: "Order No", minWidth: 120, editable: true },
        { field: "name", flex: 1, headerName: "Customer Name", minWidth: 120, editable: true },
        { field: "remark", flex: 1, headerName: "Remark", minWidth: 120, editable: true },
        { field: "collection", flex: 1, headerName: "Collection", minWidth: 120, editable: true },
        { field: "expenses", flex: 1, headerName: "Expenses", minWidth: 120, editable: true },
        { field: "balance", flex: 1, headerName: "Balance", minWidth: 120, editable: true },

    ]
    return (
        <Fragment>
            <DashHeader />
            <h5 className='pt-4 pb-3 px-4 text-blue headingBelowBorder d-flex flex-nowrap' style={{ width: "fit-content" }}>Transaction Report </h5>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                {["All", "Expenses", "Collectable"].map((item, index) => (
                    <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex align-items-center justify-content-center  ${selctedAttendence === item ? "hoverThis_active" : ""}`} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={() => { setSelectedAttendence(item) }}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='p-4'>
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
                            backgroundColor: "#ffffff",
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
                    <DataGrid rows={mockDataContacts} columns={column} components={{ Toolbar: CustomToolbar }} />
                </Box>
            </div>
        </Fragment>
    )
}

export default TodaysReport