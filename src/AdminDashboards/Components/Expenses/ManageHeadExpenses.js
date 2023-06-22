import React, { Fragment, useState } from 'react'
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import { Button } from 'reactstrap';
import { Box } from '@mui/material';
import AddExpensesForm from './Forms/AddExpensesForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';

const ManageHeadExpenses = () => {
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

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        { field: "name", flex: 1, headerName: "Name", minWidth: 120, editable: true },
        {
            field: "action ", flex: 1, headerName: "Action", minWidth: 120, renderCell: (params) => (
                <div className='d-flex align-items-center gap-2 justify-content-start'>
                    <Button className='text-white bg-blue' >Edit</Button>
                    <Button className='text-white bg-red' >Delete</Button>
                </div>
            )
        },
    ]



    // add Expense head MOdal Controller 
    const [addExpenses, setAddExpenses] = useState(false)
    const ToggleExpenses = () => setAddExpenses(!addExpenses)
    return (
        <Fragment>
            <ModalComponent modal={addExpenses} toggle={ToggleExpenses} data={<AddExpensesForm />} modalTitle={"Add Expenses Head"} />
            {/* <DashHeader /> */}
            <h5 className='pt-4 pb-3 px-4 text-white headingBelowBorder d-flex flex-nowrap ' style={{ width: "fit-content" }}>Expense Head List </h5>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} onClick={() => ToggleExpenses()} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add Expense Head
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default ManageHeadExpenses