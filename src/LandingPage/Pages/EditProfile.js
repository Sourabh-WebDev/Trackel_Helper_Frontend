import { Container, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';
import { Col, Input, Row } from 'reactstrap';

const EditProfile = () => {
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        mobileNo: '',
        emailAddress: '',
        locality: '',
        city: '',
        state: '',
        pinCode: '',
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Container maxWidth='md' sx={{ paddingY: 2 }}>
            <Row>
                <Col xs={12}>
                    <div className="card">
                        <div className="card-body text-center">
                            <form onSubmit={handleSubmit}>
                                <img
                                    src={imageFile || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: '150px', height: '150px' }}

                                />
                                <div className='text-left'>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1">Name</label>
                                                <Input type="text" id="form3Example1" name="name" className="form-control" value={formData.firstName} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example2">Age</label>
                                                <Input type="text" id="form3Example2" name="age" className="form-control" value={formData.lastName} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1">Upload Profile</label>
                                                <Input type='file' onChange={handleImageChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="stateSelect">Gender</label>
                                                <Select id="stateSelect" name="gender" className="form-control" value={formData.gender} onChange={handleInputChange}>
                                                    <MenuItem value="gender1">Male</MenuItem>
                                                    <MenuItem value="gender2">Female</MenuItem>
                                                </Select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3">Mobile No.</label>
                                                <Input type="text" id="form3Example3" name="mobileNo" className="form-control" value={formData.mobileNo} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4">Email address</label>
                                                <Input type="email" id="form3Example4" name="emailAddress" className="form-control" value={formData.emailAddress} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example5">Locality</label>
                                                <Input type="text" id="form3Example5" name="locality" className="form-control" value={formData.locality} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example6">City</label>
                                                <Input type="text" id="form3Example6" name="city" className="form-control" value={formData.city} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="stateSelect">State</label>
                                                <Select id="stateSelect" name="state" className="form-control" value={formData.state} onChange={handleInputChange}>
                                                    <MenuItem value="state1">Lucknow</MenuItem>
                                                    <MenuItem value="state2">Kanpur</MenuItem>
                                                    <MenuItem value="state3">Allahbad</MenuItem>
                                                </Select>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example8">Pin Code</label>
                                                <Input type="text" id="form3Example8" name="pinCode" className="form-control" value={formData.pinCode} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Button type="submit" variant='contained' className="mb-4 btn-block"> Save Changes</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default EditProfile;
