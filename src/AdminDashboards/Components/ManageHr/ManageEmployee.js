 import React, { Fragment, useState } from 'react'

import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { mockDataContacts } from '../../data/mockData'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useNavigate } from 'react-router-dom/dist'
import AdminDataTable from '../../Elements/AdminDataTable'
import ModalComponent from '../../Elements/ModalComponent'
import AdminAddEmployeeForm from './Forms/AdminAddEmployeeForm'
import AdminEditEmploye from './Forms/AdminEditEmploye'

const ManageEmployee = () => {

    const navigate = useNavigate()

    const [Block, setBlock] = useState(false)
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const ModalForEdit = () => {

      
        return(

            <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}> Edit Empy Form</ModalHeader>
            <ModalBody>
                <AdminEditEmploye closeModal={toggle}/>
            </ModalBody>
          </Modal>
        )
    }


    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "designation", headerName: "Designation", minWidth: 120, editable: true },
        { field: "registrarId", headerName: "Emp Id", minWidth: 120, editable: true },
        { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "name", headerName: "Name", minWidth: 120, editable: true },
        { field: "mobileNumber", headerName: "Mobile No.", minWidth: 120, editable: true },
        { field: "aadhaarNumber", headerName: "Aadhaar No.", minWidth: 120, editable: true },
        { field: "address", headerName: "Address", minWidth: 250, editable: true },
        { field: "zipCode", headerName: "Password", minWidth: 120, editable: true },
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
                    <Button onClick={toggle} className="text-white bg-blue">Edit</Button>
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
            {/* employee add form Modal  */}
            <ModalComponent data={<AdminAddEmployeeForm />} modalTitle={"Add Employee Form"} modal={addEmployee} toggle={ToggleAddEmployee} size={"xl"} scrollable={true} />
            <h4 className='p-3 px-4 mt-3 bg-transparent text-white headingBelowBorder' style={{ maxWidth: "fit-content" }}>Employee List</h4>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={ToggleAddEmployee} >
                    Add Employee
                </div>

            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
            <ModalForEdit/>
        </Fragment>
    )
}

export default ManageEmployee