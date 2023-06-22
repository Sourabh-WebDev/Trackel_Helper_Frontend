import React, { Fragment, useState } from 'react'
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'

import { mockDataContacts } from '../../data/mockData'

import AdminDataTable from '../../Elements/AdminDataTable'

const CustomerHistory = () => {

    // active and not active memeber 
    const [activeMember, setActiveMember] = useState(false)

    const column = [
        { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
        // { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
        { field: "registerId", headerName: "Member Id", flex: 1, minWidth: 120, editable: true },
        { field: "name", headerName: "Name", flex: 1, minWidth: 400, editable: true },
        { field: "mobilenumber", headerName: "Mobile Number", flex: 1, minWidth: 400, editable: true },
    ];
    const CustomToolBar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarFilterButton />
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <h6 className={`p-1 text-light cursor-p rounded-2 ${!activeMember ? "Nav_hover_active" : "Nav_hover"} `} onClick={() => setActiveMember(false)}>Active Customer</h6>
                <h6 className={`p-1 text-light cursor-p rounded-2 ${activeMember ? "Nav_hover_active" : "Nav_hover"} `} onClick={() => setActiveMember(true)}>Non Active Customer</h6>
            </GridToolbarContainer>
        )
    }
    return (
        <Fragment>
            <h4 className='p-3 px-4 mt-3 bg-transparent headingBelowBorder text-white' style={{ maxWidth: "fit-content" }}>Customer List</h4>
            <div className='p-4'>
                <AdminDataTable rows={mockDataContacts} columns={column} CustomToolbar={CustomToolBar} />
            </div>
        </Fragment>
    )
}

export default CustomerHistory