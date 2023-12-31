import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const AdminDataTable = ({ rows, columns, CustomToolbar, cellcolor, ...args }) => {

    return (
        <Box
            m="0px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                    background: cellcolor
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
                    color: `#ffffff !important`,
                },
                "& .MuiSvgIcon-root": {
                    fill: "#ffffff",
                },
                "& .MuiTablePagination-root": {
                    color: "#ffffff",
                },
                "& .MuiInputBase-input-MuiInput-input": {
                    color: '#ffffff !important'
                }
            }}
        >

            <DataGrid
                {...args}
                rows={rows}
                columns={columns}
                components={{ Toolbar: CustomToolbar }}
            />
        </Box>
    )
}

export default AdminDataTable