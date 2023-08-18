import { Container, Select, MenuItem, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Input, Row } from 'reactstrap';
import { useAuth } from '../../Context/userAuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { GetUpdateTheCustomer } from '../../Store/Actions/Dashboard/Customer/CustomerActions';
import Swal from 'sweetalert2';

const EditProfile = ({ serviceData }) => {
    const { currentUser, setCurrentUser } = useAuth()

    const updateResult = useSelector(state => state.GetCustomerUpdateReducer);
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        mobileNo: '',
        email: '',
        address: '',
        pinCode: '',
        landmark: ''
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if (serviceData) {
            setFormData(prevFormData => ({
                ...prevFormData,
                ...serviceData
            }));
        }
    }, [serviceData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(GetUpdateTheCustomer(currentUser._id, formData)).then((result) => {
            if (updateResult?.data.data) {
                Swal.fire({
                    title: 'Profile updated',
                    icon: "success"
                })
            }
        }).catch((err) => {
            console.log(err)
        });
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
                                                <Input type="text" id="form3Example1" name="name" className="form-control" value={formData.name} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example2">Age</label>
                                                <Input type="text" id="form3Example2" name="age" className="form-control" value={formData.age} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1">Upload Profile</label>
                                                <Input type='file' name='image' onChange={handleImageChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="stateSelect">Gender</label>
                                                <Select id="stateSelect" name="gender" className="form-control" value={formData.gender} onChange={handleInputChange}>
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
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
                                                <Input type="email" id="form3Example4" name="email" className="form-control" value={formData.email} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example5">Address</label>
                                                <Input type="text" id="form3Example5" name="address" className="form-control" value={formData.address} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example6">Landmark</label>
                                                <Input type="text" id="form3Example6" name="landmark" className="form-control" value={formData.landmark} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example6">Pin Code</label>
                                                <Input type="text" id="form3Example6" name="pinCode" className="form-control" value={formData.pinCode} onChange={handleInputChange} />
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
