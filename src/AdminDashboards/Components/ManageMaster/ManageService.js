
import { Box } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import { mockDataContacts } from '../../data/mockData';

import MasterAddService from './Form/MasterAddService';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';

const ManageService = () => {

    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "date", headerName: "Date", minWidth: 120, editable: true },
        { field: "servicename", headerName: "Service Name", minWidth: 400, editable: true },
        { field: "Icon", headerName: "Icon", minWidth: 120, editable: true },
        { field: "Image", headerName: "Image", minWidth: 120, editable: true },
        // { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        // { field: "email", headerName: "Email", minWidth: 120, editable: true },
        // { field: "address", headerName: "Address", minWidth: 250, editable: true },
        // { field: "username", headerName: "User Name", minWidth: 250, editable: true },
        // { field: "password", headerName: "password", minWidth: 250, editable: true },
        // { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
        {
            field: "status",
            minWidth: 150,
            headerName: "Admin Approved",
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
            minWidth: 250,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    {Block ?
                        <Button className="text-white bg-warning border-warning" onClick={() => setBlock(false)}>Un-Block</Button>
                        :
                        <Button className="text-white bg-red" onClick={() => setBlock(true)}>Block Service</Button>
                    }
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
    };

    const [masterAddService, setMasterAddServices] = useState(false)
    const ToggleMasterAddService = () => setMasterAddServices(!masterAddService)


    return (
        <Fragment>
            <ModalComponent modal={masterAddService} toggle={ToggleMasterAddService} data={<MasterAddService />} modalTitle={"Add Service"} />
            {/* <DashHeader /> */}
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>All Services List </h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex text-white align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={ToggleMasterAddService}>
                    Add New Services
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageService