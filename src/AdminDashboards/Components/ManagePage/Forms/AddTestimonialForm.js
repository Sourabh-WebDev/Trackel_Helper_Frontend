import React, { Fragment } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'


const AddTestimonialForm = () => {

    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];
    return (
        <Fragment>
            <div>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input name='name' placeholder='Name' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="mobno">Mobile No.</Label>
                            <Input name='mobno' placeholder='Mobile No' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type='email' name='email' placeholder='Email' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="occupation">Occupation</Label>
                            <Input type='text' name='occupation' placeholder='Occupation' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="image">Document Image</Label>
                            <Input
                                type="file"
                                name="image"
                                id="image"
                            // onChange={handleImageChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type='textarea' name='address' placeholder='Address' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="about">About The Testimonial</Label>
                            <Input type='textarea' name='address' placeholder='Type....' />
                        </FormGroup>
                    </Col>
                    <Button className='bg-primary text-blue'> Submit</Button>
                </Row>

            </div>
        </Fragment>
    )
}

export default AddTestimonialForm