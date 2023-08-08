import React, { Fragment, useEffect, useState } from 'react'

import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { mockDataContacts } from '../../data/mockData'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom/dist'
import AdminDataTable from '../../Elements/AdminDataTable'
import ModalComponent from '../../Elements/ModalComponent'
import AdminAddEmployeeForm from './Forms/AdminAddEmployeeForm'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllEmployeeAction } from '../../../Store/Actions/Dashboard/EmployeeActions/GetAllEmployee'
import moment from 'moment'

const ManageEmployee = () => {

    const navigate = useNavigate()

    const { data } = useSelector(state => state.GetAllEmployeeDataReducer)

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

    useEffect(() => {
        dispatch(GetAllEmployeeAction())
    }, [])

    const [Block, setBlock] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "designationName", headerName: "Designation", minWidth: 120, editable: true },
        { field: "registrarId", headerName: "Emp Id", minWidth: 120, editable: true },
        { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "mobileNo", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "aadharNo", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        { field: "address", headerName: "Address", minWidth: 250, editable: true },
        { field: "password", headerName: "Password", minWidth: 120, editable: true },
        {
            field: "status",
            minWidth: 150,
            headerName: "Status",
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
                        <Button className="text-white bg-red" onClick={() => setBlock(true)}>Block Employee</Button>
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

    // Add Employee form Handler 
    const [addEmployee, setAddEmployee] = useState(false)
    const ToggleAddEmployee = () => setAddEmployee(!addEmployee)
    return (
        <Fragment>
            {console.log(data)}
            {/* employee add form Modal  */}
            <ModalComponent data={<AdminAddEmployeeForm ToggleAddEmployee={ToggleAddEmployee} />} modalTitle={"Add Employee Form"} modal={addEmployee} toggle={ToggleAddEmployee} size={"xl"} scrollable={true} />
            <h4 className='p-3 px-4 mt-3 bg-transparent text-white headingBelowBorder' style={{ maxWidth: "fit-content" }}>Employee List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={ToggleAddEmployee} >
                    Add Employee
                </div>

            </div>
            <div className='p-4'>
                <AdminDataTable rows={DataWithID(data)} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageEmployee