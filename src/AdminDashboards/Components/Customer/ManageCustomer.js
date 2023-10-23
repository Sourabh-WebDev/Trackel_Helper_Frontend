import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import AddNewCustomerForm from './Froms/AddNewCustomerForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCustomers } from '../../../Store/Actions/Dashboard/Customer/CustomerActions';
import moment from 'moment';
import axios from 'axios';
import { API_URL } from '../../../config';
import Swal from 'sweetalert2';
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BlockIcon from '@mui/icons-material/Block'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Button } from '@mui/material';


const ManageCustomer = () => {
    const navigate = useNavigate()

    // delete the data
    const GetDeleteByID = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axios.get(API_URL + '/customer/delete/' + id)
                if (response.status === 200) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    dispatch(GetAllCustomers())
                } else {
                    Swal.fire({
                        title: 'failed to delete try again',
                        icon: "error",
                    })
                }

            }
        })

    }

    const [Block, setBlock] = useState(false)
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(state => state.GetAllCustomerReducer)

    const DataWithID = (data) => {
        const NewData = []
        if (data !== undefined) {
            for (let item of data) {
                NewData.push({ ...item, id: data.indexOf(item), date: moment(item.createdAt).format("D / M / Y") })
            }
        } else {
            NewData.push({ id: 0 })
        }
        return NewData
    }

    useEffect(() => {
        dispatch(GetAllCustomers())
    }, [])

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "customerId", headerName: "Member Id", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "mobileNo", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "email", headerName: "Email", minWidth: 250, editable: true },
        { field: "password", headerName: "password", minWidth: 250, editable: true },
        { field: 'age', headerName: "Age" },
        // { field: "todate", headerName: "To Date.", minWidth: 120, editable: true },
        // { field: "validupto", headerName: "Valid Upto", minWidth: 400, editable: true },
        // { field: "aadhaarNumber", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        // { field: "email", headerName: "Email", minWidth: 120, editable: true },
        // { field: "address", headerName: "Address", minWidth: 250, editable: true },
        // { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
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
            minWidth: 220,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                <Button variant='contained' color='primary'><BorderColorIcon /></Button>
                <Button variant="contained" color="success">
                    <VisibilityIcon />
                </Button>
                <Button  onClick={(e) => {
                        GetDeleteByID(params.row._id)
                    }} variant="contained" color="error">
                    <DeleteForeverIcon />
                </Button>
            </div>
            ),
        },
        {
            field: "block",
            headerName: "Block",
            minWidth: 150,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    {Block ?
                        <Button className="text-white bg-warning border-warning" onClick={() => setBlock(false)}>Un-Block</Button>
                        :
                        <Button variant="contained" color="error" onClick={() => setBlock(true)}><BlockIcon /></Button>
                    }
                    <Button variant="contained" color="success"> <RotateLeftIcon /> </Button>
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
    const [addCustomer, setAddCustomer] = useState(false)
    const ToggleAddCustomer = () => setAddCustomer(!addCustomer)
    return (
        <Fragment>
            <ModalComponent modal={addCustomer} toggle={ToggleAddCustomer} data={<AddNewCustomerForm />} modalTitle={"Add New Customer"} size={"xl"} scrollable={true} />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>Customer List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>

                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} onClick={ToggleAddCustomer} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add New Customer
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={DataWithID(data.data)} columns={column} CustomToolbar={CustomToolbar} loading={isLoading} />
            </div>
        </Fragment>
    )
}


export default ManageCustomer