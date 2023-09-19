import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import Swal from 'sweetalert2'
import { GetAddHeadExp, GetAllHeadExp } from '../../../../Store/Actions/Dashboard/expenseActions'

const AddExpensesForm = ({ ToggleExpenses }) => {
    const [expName, setExpName] = useState('')
    const dispatch = useDispatch()



    const OnSubmit = () => {
        if (expName === '') return Swal.fire({ text: 'please fill the Head Expense name first' })

        const formdata = {
            expName: ''
        }
        formdata.expName = expName

        dispatch(GetAddHeadExp(formdata)).then(() => {
            setExpName("")
            dispatch(GetAllHeadExp())
            ToggleExpenses()
        })
    }

    return (
        <Fragment>
            <div >
                <h5>Name</h5>
                <Input placeholder='Name' className='w-100' onChange={(e) => { setExpName(e.target.value) }} />
                <Button className='bg-primary mt-3 text-white w-100' onClick={OnSubmit} >Submit</Button>
            </div>

        </Fragment>
    )
}

export default AddExpensesForm