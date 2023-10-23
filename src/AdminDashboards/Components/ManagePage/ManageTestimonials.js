import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react'
import { mockDataContacts } from '../../data/mockData';
import AddTestimonialForm from './Forms/AddTestimonialForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BlockIcon from '@mui/icons-material/Block'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Button } from '@mui/material';

const ManageTestimonials = () => {
    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "email", headerName: "Email", minWidth: 400, editable: true },
        { field: "mobileno", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "occupation", headerName: "Occupation", minWidth: 120, editable: true },
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
            minWidth: 220,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    <Button variant='contained' color='primary'><BorderColorIcon /></Button>
                    <Button variant="contained" color="success">
                        <VisibilityIcon />
                    </Button>
                    <Button variant="contained" color="error">
                        <DeleteForeverIcon />
                    </Button>
                </div>
            ),
        },
        {
            field: "block",
            headerName: "Block",
            minWidth: 100,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    {Block ?
                        <Button className="text-white bg-warning border-warning" onClick={() => setBlock(false)}>Un-Block</Button>
                        :
                        <Button variant="contained" color="error" onClick={() => setBlock(true)}><BlockIcon /></Button>
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

    const [testimonialAdd, setTestimonialAdd] = useState(false)
    const ToggleTestimonialAdd = () => setTestimonialAdd(!testimonialAdd)


    return (
        <Fragment>
            <ModalComponent modal={testimonialAdd} toggle={ToggleTestimonialAdd} data={<AddTestimonialForm />} modalTitle={"Add Testimonial"} size={"lg"} />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>All Testimonials List </h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex text-white align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={ToggleTestimonialAdd}>
                    Add Testimonial
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}
export default ManageTestimonials