import React from 'react';
import { Col, Row } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";

const FirstSection = () => {


    return (
        <>
            <Row className='m-0 okok'>
                {/* Left Column */}
                <Col xl='12'>
                    <div className="d-flex justify-content-center align-items-center animate__animated animate__backInLeft" style={{ height: '500px' }}>
                        <div>
                            <h1 className='FirstSectionHeadinng'>Home services, on demand. 👇</h1>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    title="Location"
                                    id="input-group-dropdown-1"
                                    className='txtColour'
                                >
                                    {/* Dropdown items */}
                                    <Dropdown.Item >Telibagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Alambagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >SGPGI</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Charbagh</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control style={{ padding: '21px' }} className='txtColour' placeholder='Search for services' aria-label="Text input with dropdown button" />
                                <Button className='bgColour' variant="outline-secondary"><MdSearch color='#142572' size={30} /></Button>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
                {/* Right Column */}
                {/* <Col xl='6' className='text-center'>
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
                    <img src={HelperBanner} className='img-fluid' alt="" />
                </Col> */}
            </Row>
        </>
    );
};

export default FirstSection;
