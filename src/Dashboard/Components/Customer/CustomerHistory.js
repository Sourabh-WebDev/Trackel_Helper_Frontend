import React, { Fragment, useState } from 'react'
import DashHeader from '../../DashboardComponents/Global/DashHeader'
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'

import { mockDataContacts } from '../../data/mockData'
import { Box } from '@mui/material'
import { Button } from 'reactstrap'

const CustomerHistory = () => {

    // active and not active memeber 
    const [activeMember, setActiveMember] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "registerId", headerName: "Member Id", flex: 1, minWidth: 120, editable: true },
        { field: "name", headerName: "Name", flex: 1, minWidth: 400, editable: true },
        { field: "mobilenumber", headerName: "Mobile Number", flex: 1, minWidth: 400, editable: true },
    ];
    const CustomToolBar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarFilterButton />
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <h6 className={`p-1 rounded-2 ${!activeMember ? "Nav_hover_active" : "Nav_hover"} `} onClick={() => setActiveMember(false)}>Active Customer</h6>
                <h6 className={`p-1 rounded-2 ${activeMember ? "Nav_hover_active" : "Nav_hover"} `} onClick={() => setActiveMember(true)}>Non Active Customer</h6>
            </GridToolbarContainer>
        )
    }
    return (
        <Fragment>
            <DashHeader />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder' style={{ color: "var(--blue)", maxWidth: "fit-content" }}>Customer List</h4>
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
                    <DataGrid rows={mockDataContacts} columns={column} components={{ Toolbar: CustomToolBar }} />
                </Box>
            </div>
        </Fragment>
    )
}

export default CustomerHistory