import { Container, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';
import { Col, Input, Row } from 'reactstrap';

const ManagePost = () => {
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        type: '',
        property: ''
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

                                <div className='text-left'>
                                    <Row className="mb-4">
                                        <Col style={{ display: 'grid', placeItems: 'center' }}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1">Upload Post Image</label>
                                                <Input type='file' onChange={handleImageChange} />
                                            </div>
                                        </Col>
                                        <Col style={{ display: 'grid', placeItems: 'center' }}>
                                            <div className="form-outline mb-4">
                                                <img
                                                    src={imageFile || "https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg"}
                                                    alt="avatar"
                                                    className="img-fluid"
                                                    style={{ width: '250px', height: '150px' }}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="stateSelect">Type</label>
                                                <Select id="stateSelect" name="type" className="form-control" value={formData.type} onChange={handleInputChange}>
                                                    <MenuItem value="buy">Buy</MenuItem>
                                                    <MenuItem value="sell">Sell</MenuItem>
                                                    <MenuItem value="rent">Rent</MenuItem>
                                                </Select>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1">Property</label>
                                                <Input type="text" id="form3Example1" name="property" className="form-control" value={formData.property} onChange={handleInputChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Button type="submit" variant='contained' className="mb-4 btn-block"> Add Post</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ManagePost;
