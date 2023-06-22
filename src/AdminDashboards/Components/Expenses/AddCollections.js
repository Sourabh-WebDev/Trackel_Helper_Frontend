import React, { Fragment } from 'react'

import { Button, Input } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import SelectBox from '../../Elements/SelectBox'

const AddCollections = ({ setActiveAttendance }) => {
    const navigate = useNavigate()

    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];
    return (
        <Fragment>
            {/* <DashHeader /> */}
            <h5 className='pt-4 pb-3 px-4 text-white headingBelowBorder d-flex flex-nowrap' style={{ width: "fit-content" }}>Add Collection  </h5>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `} onClick={() => setActiveAttendance("all")} style={{ minWidth: "15rem", maxWidth: "15rem" }} >
                    Transaction Report
                </div>
            </div>
            <div className=' h-100 d-grid pb-5'>
                <div className='text-blue bg-primary card shadow-lg border-0 MainAttendenceReportForm mt-3 p-4  gap-3'>
                    <div className=' mt-3 d-flex flex-nowrap ReportFormWhole w-100'>
                        <div className='d-flex flex-column justify-content-center gap-1 w-100'>
                            <h6 >Select Service Provider</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100'>
                            <h6 >Select Service</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100'>
                            <h6 >Payment Method</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100'>
                            <h6 >Expense Type</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Amount</h6>
                            <Input placeholder='Amount' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Person Name</h6>
                            <Input type='text' placeholder='Name' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Date</h6>
                            <Input type='date' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Time(IN)</h6>
                            <Input type='time' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Time(Out)</h6>
                            <Input type='time' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Order No.</h6>
                            <Input type='text' placeholder='Order No' className='w-100' />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Remark</h6>
                            <Input type='textarea' className='w-100' />
                        </div>
                    </div>
                    <Button className='hoverThis bg-blue'>Submit</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default AddCollections