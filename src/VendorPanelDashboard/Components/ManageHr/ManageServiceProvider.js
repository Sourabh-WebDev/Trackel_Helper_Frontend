import { Box } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import DashHeader from '../../DashboardComponents/Global/DashHeader';
import { mockDataContacts } from '../../data/mockData';
import ModalComponent from '../../DashboardComponents/ModalComponent';
import AddServiceProvider from './Forms/AddServiceProvider';
import { useNavigate } from 'react-router-dom/dist';

const ManageServiceProvider = () => {

    const navigate = useNavigate()

    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "providerType", headerName: "Provider Type", minWidth: 120, editable: true },
        { field: "servicename", headerName: "Service Name", minWidth: 400, editable: true },
        { field: "aadhaarNumber", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "email", headerName: "Email", minWidth: 120, editable: true },
        { field: "address", headerName: "Address", minWidth: 250, editable: true },
        { field: "username", headerName: "User Name", minWidth: 250, editable: true },
        { field: "password", headerName: "password", minWidth: 250, editable: true },
        { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
        {
            field: "status",
            minWidth: 150,
            headerName: "Admin Status",
            renderCell: (params) => (
                <Button className="text-white bg-green">Approved</Button>
            ),
        },
        {
            field: "action",
            headerName: "Action",
            minWidth: 250,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    <Button className="text-white bg-blue">Edit</Button>
                    <Button className="text-white bg-green">View</Button>
                    <Button className="text-white bg-red">Delete</Button>
                </div>
            ),
        },
        {
            field: "block",
            headerName: "Block",
            minWidth: 320,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    {Block ?
                        <Button className="text-white bg-warning border-warning" onClick={() => setBlock(false)}>Un-Block</Button>
                        :
                        <Button className="text-white bg-red" onClick={() => setBlock(true)}>Block </Button>
                    }
                    <Button className='text-white bg-green'> Reset Ratings </Button>
                </div>
            ),
        },
    ];

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
    }
    // Add service provider controller 
    const [AddService, setAddServicer] = useState(false)
    const ToggleAddServiceMan = () => setAddServicer(!AddService)
    return (
        <Fragment>
            <DashHeader />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder' style={{ color: "var(--blue)", maxWidth: "fit-content" }}>Employee List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>

                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex align-items-center justify-content-center `} onClick={() => { navigate("/managehr/manage-service-provider/add-servider-provider") }} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add Service Provider
                </div>
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

export default ManageServiceProvider