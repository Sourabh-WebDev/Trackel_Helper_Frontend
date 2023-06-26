import React from 'react'
import { FiPhone, FiClock } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsSkype, BsPinterest } from "react-icons/bs";
import { Col, Row } from 'reactstrap';

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <Row className='m-0'>
                    <Col sm={12} xl={6}>
                        <div className='NavbarChild' >
                            <div className='px-2'>
                                <FiPhone /> <span> 0522-4300589</span>
                            </div>
                            |
                            <div className='px-2'>
                                <FiClock /> <span>Mon - Sun 12Hours / We are 24*7 available</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={6}>
                        <div className='NavbarChild' >
                            <div className='px-2'>
                                <span>Helper Social</span>
                            </div>
                            |
                            <div className='px-2 NavbarChild'>
                                <BsFacebook className='ml-2' />
                                <BsTwitter className='ml-2' />
                                <BsSkype className='ml-2' />
                                <BsPinterest className='ml-2' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Navbar