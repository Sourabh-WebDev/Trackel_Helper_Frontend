import React, { Fragment, useState } from 'react'
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { Box } from '@mui/material';
import { mockDataContacts } from '../../data/mockData';
import AdminDataTable from '../../Elements/AdminDataTable';

const TodaysReport = () => {

    const [selctedAttendence, setSelectedAttendence] = useState("All")
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
        { field: "registrarId", flex: 1, headerName: "Order No", minWidth: 120, editable: true },
        { field: "name", flex: 1, headerName: "Customer Name", minWidth: 120, editable: true },
        { field: "remark", flex: 1, headerName: "Remark", minWidth: 120, editable: true },
        { field: "collection", flex: 1, headerName: "Collection", minWidth: 120, editable: true },
        { field: "expenses", flex: 1, headerName: "Expenses", minWidth: 120, editable: true },
        { field: "balance", flex: 1, headerName: "Balance", minWidth: 120, editable: true },

    ]
    return (
        <Fragment>
            {/* <DashHeader /> */}
            <h5 className='pt-4 pb-3 px-4 text-white headingBelowBorder d-flex flex-nowrap' style={{ width: "fit-content" }}>Transaction Report </h5>
            <div className='AttendenceNavBtn w-100 py-2 px-4 gap-3'>
                {["All", "Expenses", "Collectable"].map((item, index) => (
                    <div className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center  ${selctedAttendence === item ? "hoverThis_active" : ""}`} style={{ minWidth: "15rem", maxWidth: "15rem" }} onClick={() => { setSelectedAttendence(item) }}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolbar} />
            </div>
        </Fragment>
    )
}

export default TodaysReport