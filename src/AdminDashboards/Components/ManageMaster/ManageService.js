import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { mockDataContacts } from '../../data/mockData';
import { useSelector, useDispatch } from "react-redux";
import * as ALlIcon from "react-icons/fa"
import MasterAddService from './Form/MasterAddService';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';
import GetAllServicesReducer from '../../../Store/Reducers/Dashboard/GetAllServicesReducer';
import { GetAllServices } from '../../../Store/Actions/Dashboard/servicesAction';
import DeleterTheServiceReducer from '../../../Store/Reducers/Dashboard/DeleteServiceReducer';
import { DeleteService } from '../../../Store/Actions/Dashboard/servicesAction';
import Swal from 'sweetalert2';
import moment from 'moment/moment';
import { API_URL } from '../../../config';

const ManageService = () => {

    const [Block, setBlock] = useState(false)
    const dispatch = useDispatch()

    const [deleteSuccess, setDeleteSuccess] = useState(false); // New state variable


    const { isSuccess, data } = useSelector(pre => pre.GetAllServicesReducer)
    // service reducere
    const DeletResult = useSelector(pre => pre.DeleterTheServiceReducer)

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
    const IconWrapper = ({ icon }) => {
        const IconComponent = ALlIcon[icon];
        return IconComponent ? <IconComponent /> : null;
    };

    const handleDeleteServices = (id) => {

        const dbID = data.data[id]._id
        Swal.fire({
            title: `Are you sure? `,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(DeleteService(dbID))
                    .then(() => {
                        setDeleteSuccess(true);
                        Swal.fire("Deleted!", "Your Data Deleted", "success");
                    })
                    .catch((error) => {
                        console.error("Delete error:", error);
                        Swal.fire(
                            "Error",
                            "An error occurred while deleting the file.",
                            "error"
                        );
                    });
            }
        })

    }

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50 },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "date", headerName: "Date", minWidth: 160 },
        { field: "serviceName", headerName: "Service Name", minWidth: 400, editable: true },
        {
            field: "icon", headerName: "Icon", minWidth: 120, renderCell: (params) => {
                return <IconWrapper icon={params.value} />;
            }
        },
        {
            field: "image", headerName: "Image", minWidth: 120, renderCell: (params) => (
                <img src={API_URL + "/uploads/" + params.value} alt="Image" style={{ width: 100, height: 100 }} />
            )
        },
        // { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        // { field: "email", headerName: "Email", minWidth: 120, editable: true },
        // { field: "address", headerName: "Address", minWidth: 250, editable: true },
        // { field: "username", headerName: "User Name", minWidth: 250, editable: true },
        // { field: "password", headerName: "password", minWidth: 250, editable: true },
        // { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
        {
            field: "adminStatus",
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
                    <Button onClick={() => handleDeleteServices(params.id)} className="text-white bg-red">Delete</Button>
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


    useEffect(() => {
        dispatch(GetAllServices())
    }, [])

    // useEffect(() => {
    //     if (DeletResult.isSuccess) {
    //         dispatch(GetAllServices())
    //     }
    // }, [DeletResult.isSuccess])

    useEffect(() => {
        dispatch(GetAllServices());
        setDeleteSuccess(false); // Reset the delete success state
    }, [deleteSuccess]); // Trigger useEffect when deleteSuccess changes
    return (
        <Fragment>

            <ModalComponent modal={masterAddService} toggle={ToggleMasterAddService} data={<MasterAddService ToggleMasterAddService={ToggleMasterAddService} />} modalTitle={"Add Service"} />
            {/* <DashHeader /> */}
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>All Services List </h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis Fw_500 d-flex text-white align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={ToggleMasterAddService}>
                    Add New Services
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={DataWithID(data.data)} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageService