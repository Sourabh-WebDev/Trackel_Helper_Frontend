import React, { Fragment } from 'react'
import { Button, Input } from 'reactstrap'

const AddExpensesForm = () => {
    return (
        <Fragment>
            <div >
                <h5>Name</h5>
                <Input placeholder='Name' className='w-100' />
                <Button className='bg-primary mt-3 text-white w-100' >Submit</Button>
            </div>

        </Fragment>
    )
}

export default AddExpensesForm