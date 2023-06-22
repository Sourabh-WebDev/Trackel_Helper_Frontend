import { Box } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';

import { mockDataContacts } from '../../data/mockData';

import AddAdvertisementForm from './Forms/AddAdvertisementForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';


const ManageAdvertisement = () => {
    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "todate", headerName: "To Date", minWidth: 120, editable: true },
        { field: "enddate", headerName: "End Date", minWidth: 400, editable: true },
        { field: "name", headerName: "Company Name", minWidth: 120, editable: true },
        { field: "registrarId", headerName: "GST No.", minWidth: 120, editable: true },
        { field: "payment", headerName: "Payment", minWidth: 120, editable: true },
        // { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        // { field: "email", headerName: "Email", minWidth: 120, editable: true },
        // { field: "address", headerName: "Address", minWidth: 250, editable: true },
        // { field: "username", headerName: "User Name", minWidth: 250, editable: true },
        // { field: "password", headerName: "password", minWidth: 250, editable: true },
        // { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
        // {
        //     field: "status",
        //     minWidth: 150,
        //     headerName: "Admin Approved",
        //     renderCell: (params) => (
        //         <Button className="text-white bg-green">Approved</Button>
        //     ),
        // },
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
                        <Button className="text-white bg-red" onClick={() => setBlock(true)}>Block</Button>
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

    const [addAdvertisement, setAddAdvertisement] = useState(false)
    const ToggleAdvertisementAdd = () => setAddAdvertisement(!addAdvertisement)


    return (
        <Fragment>
            <ModalComponent modal={addAdvertisement} toggle={ToggleAdvertisementAdd} data={<AddAdvertisementForm />} modalTitle={"Add Testimonial"} size={"lg"} />
            {/* <DashHeader /> */}
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>All Advertisement Details</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p text-white hoverThis Fw_500 d-flex align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "20rem" }} onClick={ToggleAdvertisementAdd}>
                    Add New Advertisement
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}
export default ManageAdvertisement