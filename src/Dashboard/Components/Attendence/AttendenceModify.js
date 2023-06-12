import React, { Fragment } from 'react'
import DashHeader from '../../DashboardComponents/Global/DashHeader'
import { Button, Input } from 'reactstrap';
import SelectBox from '../../DashboardComponents/SelectBox';

const AttendenceModify = () => {
    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];
    return (
        <Fragment>
            <DashHeader />
            <div className=' h-100 d-grid'>
                <h3 className='p-3 mt-3 bg-transparent headingBelowBorder text-blue' style={{ maxWidth: "fit-content" }}>Attendence Modify</h3>
                <div className='text-blue bg-primary card shadow-lg border-0 MainAttendenceReportForm mt-5 p-4 d-flex flex-column align-items-end justify-content-center w-75 gap-3'>
                    <div className=' mt-3 d-flex flex-nowrap ReportFormWhole w-100'>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100'>
                            <h6 >Type</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column  justify-content-center gap-1 w-100'>
                            <h6 >Name</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100' >
                            <h6 >Attendence</h6>
                            <SelectBox options={options} />
                        </div>
                        <div className='d-flex flex-column   justify-content-center gap-1 w-100'>
                            <h6 >Date</h6>
                            <Input type='date' id="todate" />
                        </div>
                    </div>
                    <Button className='hoverThis bg-blue'>Submit</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default AttendenceModify