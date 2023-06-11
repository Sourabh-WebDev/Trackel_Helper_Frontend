import React from 'react';
import { Col, Row } from 'reactstrap';
import FirstectionImg from '../assets/img/FirstectionImg.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FirstSection = () => {
    return (
        <>
            <Row className='m-0'>
                {/* Left Column */}
                <Col xl='6'>
                    <div className="d-flex justify-content-center align-items-center animate__animated animate__backInLeft" style={{ height: '500px' }}>
                        <div>
                            <h1 className='FirstSectionHeadinng'>Home services, on demand. 👇</h1>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    title="Select your Location ▿"
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
                            </InputGroup>
                        </div>
                    </div>
                </Col>
                {/* Right Column */}
                <Col xl='6' className='text-center'>
                    {/* <img className='FirstSectionImgStyle img-fluid' src={FirstectionImg} alt="ADIMG" /> */}
                    <div class="Enquiry container animate__animated animate__backInDown">
                        <h2>Enquiry Form</h2>
                        <form className='p-2' action="#" method="post">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Mob No. :</label>
                                <input type="email" id="email" name="email" placeholder="Your Mobile No." required />
                            </div>
                            <div class="form-group">
                                <label for="email">Services looking for:</label>
                                <input type="email" id="email" name="email" placeholder="Services looking for" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FirstSection;
