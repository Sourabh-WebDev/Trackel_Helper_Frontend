import { Box } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'reactstrap';

import { mockDataContacts } from '../../data/mockData';
import AddServiceProvider from './Forms/AdminAddServiceProvider';
import { useNavigate } from 'react-router-dom/dist';
import AdminDataTable from '../../Elements/AdminDataTable';
import ModalComponent from '../../Elements/ModalComponent';
import AdminAddServiceProvider from './Forms/AdminAddServiceProvider';
import { useDispatch, useSelector } from 'react-redux';
import { WaitLoader } from '../../Elements/WaitLoader';
import GetAllServiceProviderReducer from '../../../Store/Reducers/Dashboard/Authentication/AllServiceProviderReducer';
import { GetAllServiceProvider } from '../../../Store/Actions/Dashboard/Authentication/ServiceProviderActions';
import moment from 'moment';

const ManageServiceProvider = () => {

    const navigate = useNavigate()

    const [Block, setBlock] = useState(false)
    const dispatch = useDispatch()

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
    const ImageResult = useSelector(pre => pre.ImageUploadReducer);

    const { data } = useSelector(pre => pre.GetAllServiceProviderReducer)


    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "referenceName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "serviceProviderType", headerName: "Provider Type", minWidth: 120, editable: true },
        { field: "services", headerName: "Service Name", minWidth: 400, editable: true },
        { field: "aadharNo", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        { field: "mobileNo", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "email", headerName: "Email", minWidth: 120, editable: true },
        { field: "parmanentAddress", headerName: "Address", minWidth: 250, editable: true },
        { field: "username", headerName: "User Name", minWidth: 250, editable: true },
        { field: "password", headerName: "password", minWidth: 250, editable: true },
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

    useEffect(() => {
        dispatch(GetAllServiceProvider())
    }, [])
    // Add service provider controller 
    const [AddService, setAddServicer] = useState(false)
    const ToggleAddServiceMan = () => setAddServicer(!AddService)
    return (
        <Fragment>
            {console.log(data)}
            <ModalComponent data={<AdminAddServiceProvider />} modal={AddService} toggle={ToggleAddServiceMan} size={"xl"} scrollable={true} modalTitle={"Add Service Provider"} />
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>Service Provider List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>

                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} onClick={ToggleAddServiceMan} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add Service Provider
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={DataWithID(data)} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageServiceProvider