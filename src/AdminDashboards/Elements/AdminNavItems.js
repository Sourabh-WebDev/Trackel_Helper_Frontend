import React from 'react'
import { NavItems } from '../DummyData'
import { useNavigate } from 'react-router-dom'

const AdminNavItems = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3 className='pl-4 pt-4 pb-2 text-white  headingBelowBorder fw-bold' style={{ maxWidth: "fit-content" }}>Welcome To Helper Dashboard</h3>
            <div className="AllMenuCards">
                {NavItems.map((item, index) => (
                    <div onClick={() => navigate(item.title !== "Dashboard" ? `/admin/${item.title.toLocaleLowerCase().split(" ").join("-")}` : "/admin")} className='d-flex cursor-p bg-white  text-blue hoverShadow hoverPrimary flex-column align-items-center justify-content-center gap-2 border rounded-3'>
                        {item.icon}
                        <h6 className='text-center'>{item.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminNavItems