import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import { FaEnvelope, FaFacebook, FaGoogle, FaHome, FaInstagram, FaLinkedinIn, FaPhone, FaPrint, FaTwitter } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import FooterBannner from '../assets/img/FooterBanner.png'
import { BsCheckCircle, BsCircleFill } from "react-icons/bs";
import { IoMdSend, IoSend } from "react-icons/io";

const Footer = () => {
    return (
        <footer style={{ background: '#142572', paddingTop: '5rem' }} className='text-center text-lg-start text-white'>
            <div className="footerform">
                <Row>
                    <Col sm={12} xl='4' style={{ display: 'grid', placeItems: 'center' }}>
                        <div>
                            <img src={FooterBannner} className='img-fluid' alt="footerbanner" />
                        </div>
                    </Col>
                    <Col sm={12} xl='4' style={{ display: 'grid', placeItems: 'center' }}>
                        <div className='text-start pt-3'>
                            <h4 style={{ color: '#142572' }} >Newsletters</h4>
                            <h2 style={{ color: '#8d8d8d' }} >Get Our Every Single Notifications</h2>

                            <div style={{ color: '#8d8d8d' }}>
                                <div><BsCircleFill className='mr-2' fill='#eedc30' /> <span>Regular Updates</span></div>
                                <div><BsCheckCircle className='mr-2' /> <span>Regular Updates</span></div>
                                <form className='mt-2' id="emailForm">
                                    <div class="input-container">
                                        <input className='form-control' type="email" id="emailInput" placeholder="Enter your email address" required />
                                        <input className='' type="submit" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl='4'>
                        <div className="Enquiry container animate__animated animate__backInDown">
                            <b><h2 className='txtColour font-weight-bold p-1' >Enquiry Form</h2> </b>
                            <form className='pb-2 px-2' action="#" method="post">
                                <div className="form-group">
                                    <label for="name">Full Name:</label>
                                    <input type="text" id="name" name="name" placeholder="Enter Full Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Mobile Number :</label>
                                    <input type="email" id="email" name="email" placeholder="Enter Mobile Number" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Services looking for:</label>
                                    <input type="email" id="email" name="email" placeholder="Please enter the service you are looking for." required />
                                </div>
                                <div className="form-group">
                                    <label for="message">Discription (Please specify):</label>
                                    <textarea id="message" name="message" placeholder="Enter Discription" rows="5" required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
            <section style={{ marginTop: '150px' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='mr-4 text-reset'>
                        <FaFacebook />
                    </a>
                    <a href='' className='mr-4 text-reset'>
                        <FaTwitter />
                    </a>
                    <a href='' className='mr-4 text-reset'>
                        <FaGoogle />
                    </a>
                    <a href='' className='mr-4 text-reset'>
                        <FaInstagram />
                    </a>
                </div>
            </section>

            <section className=''>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                {/* <FontAwesomeIcon icon={faGem} className="me-3" /> */}
                                About Helper
                            </h6>
                            <p className='text-left'>
                                Linking businesses to customers, Providing all suitable opportunities to the service providers and entrepreneurs to expand their businesses, To cater to the daily needs of working couples who follow busy schedules by providing them.
                            </p>
                        </Col>

                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                            <p>
                                <a href='/serviceName' className='text-reset'>
                                    Electrician
                                </a>
                            </p>
                            <p>
                                <a href='/serviceName' className='text-reset'>
                                    Plumber
                                </a>
                            </p>
                            <p>
                                <a href='/serviceName' className='text-reset'>
                                    Car Washing
                                </a>
                            </p>
                            <p>
                                <a href='/serviceName' className='text-reset'>
                                    Travels & Driver
                                </a>
                            </p>
                            <p>
                                <a href='/serviceName' className='text-reset'>
                                    Security Gaurd
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='/About-Us' className='text-reset'>
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a href='/Contact-Us' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='/Our-All-Services' className='text-reset'>
                                    Services
                                </a>
                            </p>
                            <p>
                                <a href='/Term-&-Condition' className='text-reset'>
                                    Terms & Conditions
                                </a>
                            </p>
                            <p>
                                <a href='/Privacy-&-Policy' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                        </Col>

                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <FaHome className="mr-2" />
                                A/1412, Sector- I Ashiyana LDA Colony Near
                                Pakripool Lucknow – 226012, UP, India
                            </p>
                            <p className='text-nowrap'>
                                <FaEnvelope className="mr-2" />
                                helperforyourservices@gmail.com
                            </p>
                            <p className='text-nowrap'>
                                <FaPhone className="mr-2" /> 0522-4300589, 0522-4330641
                            </p>
                            {/* <p>
                                <FaPrint className="me-3" /> + 01 234 567 89
                            </p> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2019 - {new Date().getFullYear()} All rights reserved | Helper Services
            </div>
        </footer>
    )
}

export default Footer