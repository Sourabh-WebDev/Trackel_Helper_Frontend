import { Box } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import { mockDataContacts } from '../../data/mockData';


import { useNavigate } from 'react-router-dom/dist';
import AddNewCustomerForm from './Froms/AddNewCustomerForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';

const ManageEnquiry = () => {
    const navigate = useNavigate()

    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "date", headerName: "Date", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "email", headerName: "Email", minWidth: 250, editable: true },
        { field: "refrence", headerName: "Refrence", minWidth: 250, editable: true },
        {
            field: "referby", headerName: "Refer By", renderCell: (parmas) => (
                <div className='p-1 px-2 bg-blue text-white rounded-2 cursor-p'>Direct Enquiry</div>
            ), minWidth: 150, editable: true
        },
        {
            field: "status", headerName: "Status", renderCell: (parmas) => (
                <div className='p-1 px-2 bg-red text-white rounded-2 cursor-p'>On-Hold</div>
            ), minWidth: 140, editable: true
        },
        // { field: "aadhaarNumber", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        // { field: "email", headerName: "Email", minWidth: 120, editable: true },
        // { field: "address", headerName: "Address", minWidth: 250, editable: true },

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
                        <Button className="text-white bg-warning border-warning" onClick={() => setBlock(false)}>Un-Block Enquiry</Button>
                        :
                        <Button className="text-white bg-red" onClick={() => setBlock(true)}>Block Enquiry </Button>
                    }
                    <Button className='text-white bg-green'> Reset Ratings </Button>
                </div>
            ),
        },
        {
            field: "enquiryAction", headerName: "Enquiry Action", renderCell: (params) => (
                <select
                    className="p-2 border bg-light"
                    style={{ borderRadius: "5px", outline: "none", cursor: "pointer" }}
                >
                    <option value="Cancel">Action</option>
                    <option value="Converted">Converted</option>
                    <option value="Canel">Cancel</option>
                    <option value="Continue">Continue</option>
                </select>
            ), minWidth: 180, editable: true
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
    const [addCustomer, setAddCustomer] = useState(false)
    const ToggleAddCustomer = () => setAddCustomer(!addCustomer)
    return (
        <Fragment>
            <ModalComponent modal={addCustomer} toggle={ToggleAddCustomer} data={<AddNewCustomerForm />} modalTitle={"Add New Customer"} size={"xl"} scrollable={true} />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>Enquiry List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>

                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex align-items-center justify-content-center text-white`} onClick={ToggleAddCustomer} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add New Enquiry
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageEnquiry