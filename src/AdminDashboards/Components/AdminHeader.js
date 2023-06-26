import React, { Fragment } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import "../AdminDashboard.css"

const AdminHeader = () => {
    return (
        <Fragment>
            <div className='AdminDashbaord_Header shadow border-bottom'>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-start'>
                        <div className="helperLogo">
                            <img src="https://mytotalhelper.com/webcss/images/logo.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-end'>
                        <div className="AdminDash_UserInfo d-flex align-items-center justify-content-end  p-2 gap-3">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div>
                                <h6>Ashutosh Anand</h6>
                                <small>Super Admin</small>
                            </div>
                            <FaChevronDown />
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default AdminHeader