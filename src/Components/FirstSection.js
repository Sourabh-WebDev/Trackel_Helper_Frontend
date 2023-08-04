import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";

const FirstSection = () => {
    // State to track the selected location
    const [selectedLocation, setSelectedLocation] = useState('');

    // Handler function to update the selected location
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
    };

    return (
        <>
            <Row className='m-0'>
                <Col xl='12'>
                    <div className="d-flex justify-content-center align-items-center animate__animated animate__backInLeft" style={{ height: '500px' }}>
                        <div>
                            <h1 className='FirstSectionHeadinng'>Home services, on demand. 👇</h1>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    title={selectedLocation || "Location"} // Show selected location or "Location" if nothing selected
                                    id="input-group-dropdown-1"
                                    className='txtColour'
                                >
                                    {/* Dropdown items */}
                                    <Dropdown.Item onClick={() => handleLocationSelect("Telibagh")}>Telibagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleLocationSelect("Alambagh")}>Alambagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleLocationSelect("SGPGI")}>SGPGI</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleLocationSelect("Charbagh")}>Charbagh</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control style={{ padding: '21px' }} className='txtColour' placeholder='Search for services' aria-label="Text input with dropdown button" />
                                <Button className='bgColour' variant="outline-secondary"><MdSearch color='#142572' size={30} /></Button>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FirstSection;
