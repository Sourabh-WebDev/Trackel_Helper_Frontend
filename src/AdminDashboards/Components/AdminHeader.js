import React, { Fragment, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, PopoverBody, PopoverHeader, Row, UncontrolledPopover } from 'reactstrap'
import "../AdminDashboard.css"
import { useAuth } from '../../Context/userAuthContext'
import { CgUser } from 'react-icons/cg'
import { FiLogOut, FiUser } from 'react-icons/fi'
import Swal from 'sweetalert2'

const AdminHeader = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const LogOutFuction = () => {
        sessionStorage.clear()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logout Successfully',
            showConfirmButton: false,
            timer: 1500
        })
        setCurrentUser(null)

    }

    const { currentUser, setCurrentUser } = useAuth();
    return (
        <Fragment>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img src="https://mytotalhelper.com/webcss/images/logo.jpg" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Dropdown className='ml-auto' isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle className='dropdownMenu-btn-header' >
                            <div id="drop-menu" className="AdminDash_UserInfo d-flex align-items-center justify-content-end   gap-3">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div>
                                    <h6>{currentUser && currentUser.name ? currentUser.name : "yourName "}</h6>
                                    <small>{currentUser && currentUser.role ? currentUser.role : ""}</small>
                                </div>
                                <FaChevronDown />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className='dropDownMenu-header'>
                            <DropdownItem className='cursor-p hover-secondary w-100 h-100'><FiUser /> &nbsp;&nbsp; Profile</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => { LogOutFuction() }} className='cursor-p hover-secondary w-100 h-100'> <FiLogOut /> &nbsp;&nbsp; Log Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>


            {/* <div className='AdminDashbaord_Header shadow border-bottom'>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-start'>
                        <div className="helperLogo">
                            <img src="https://mytotalhelper.com/webcss/images/logo.jpg" alt="" />
                        </div>
                    </Col>

                    <Col md={6} className='d-flex justify-content-end'>

                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle className='dropdownMenu-btn-header' >
                                <div id="drop-menu" className="AdminDash_UserInfo d-flex align-items-center justify-content-end   gap-3">
                                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    <div>
                                        <h6>{currentUser && currentUser.name ? currentUser.name : "yourName "}</h6>
                                        <small>{currentUser && currentUser.role ? currentUser.role : ""}</small>
                                    </div>
                                    <FaChevronDown />
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className='dropDownMenu-header'>
                                <DropdownItem className='cursor-p hover-secondary w-100 h-100'><FiUser /> &nbsp;&nbsp; Profile</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => { LogOutFuction() }} className='cursor-p hover-secondary w-100 h-100'> <FiLogOut /> &nbsp;&nbsp; Log Out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </div> */}

        </Fragment>
    )
}

export default AdminHeader