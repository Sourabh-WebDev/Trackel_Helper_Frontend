import React, { Fragment, useEffect, useState } from 'react'
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import { Button } from 'reactstrap';
import AddExpensesForm from './Forms/AddExpensesForm';
import ModalComponent from '../../Elements/ModalComponent';
import AdminDataTable from '../../Elements/AdminDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllHeadExp, GetDeleteHeadExp } from '../../../Store/Actions/Dashboard/expenseActions';
import moment from 'moment';
import Swal from 'sweetalert2';

const ManageHeadExpenses = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const allHeadExpenses = useSelector(state => state.GetAllHeadExpReducer)

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

    const DeleteById = (id) => {
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
                setLoading(true)
                dispatch(GetDeleteHeadExp(id)).then(() => {
                    dispatch(GetAllHeadExp())
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setLoading(false)
                })
            }
        })

    }


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
        { field: "expName", flex: 1, headerName: "Name", minWidth: 120, editable: true },
        {
            field: "action ", flex: 1, headerName: "Action", minWidth: 120, renderCell: (params) => (
                <div className='d-flex align-items-center gap-2 justify-content-start'>
                    <Button className='text-white bg-blue' >Edit</Button>
                    <Button className='text-white bg-red' onClick={() => { DeleteById(params.row._id) }} >Delete</Button>
                </div>
            )
        },
    ]




    // add Expense head MOdal Controller 
    const [addExpenses, setAddExpenses] = useState(false)
    const ToggleExpenses = () => setAddExpenses(!addExpenses)



    // get all expenses 
    useEffect(() => {
        dispatch(GetAllHeadExp())
    }, [])
    return (
        <Fragment>
            <ModalComponent modal={addExpenses} toggle={ToggleExpenses} data={<AddExpensesForm ToggleExpenses={ToggleExpenses} />} modalTitle={"Add Expenses Head"} />
            {/* <DashHeader /> */}
            <h5 className='pt-4 pb-3 px-4 text-white headingBelowBorder d-flex flex-nowrap ' style={{ width: "fit-content" }}>Expense Head List </h5>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} onClick={() => ToggleExpenses()} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Add Expense Head
                </div>
            </div>
            <div className='p-4'>
                <AdminDataTable rows={DataWithID(allHeadExpenses.data)} columns={column} CustomToolbar={CustomToolbar} loading={loading} />
            </div>
        </Fragment>
    )
}

export default ManageHeadExpenses