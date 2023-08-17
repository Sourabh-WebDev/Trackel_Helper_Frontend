import React from 'react'
import { FiPhone, FiClock } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsSkype, BsPinterest } from "react-icons/bs";
import { Col, Row } from 'reactstrap';

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <Row className='m-0'>
                    <Col xs={12} md={6} lg={6} xl={6}>
                        <div className='NavbarChild' >
                            <FiPhone /> <span> 0522-4300589</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} xl={6}>
                        <div className='text-center px-2' >
                            <FiClock /> <span>Mon - Sun 12 Hours / We are 24*7 available</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Navbar