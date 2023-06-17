import React, { Fragment } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import SelectBox from '../../../DashboardComponents/SelectBox';

const AddNewCustomerForm = () => {

    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];
    return (
        <Fragment>
            <div>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input name='name' placeholder='Name' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="gender" >Gender</Label>
                            <SelectBox options={options} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input name='age' placeholder='Enter Customer Age' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="memeber">Member Id</Label>
                            <Input name='memberid' placeholder='Member Id' />
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
                            <Label for="landmark">Land Mark</Label>
                            <Input type='type' name='landmark' placeholder='Landmark' />
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
                            <Label for="location">Location</Label>
                            <Input type='text' name='location' placeholder='Location' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="mobno">Mobile No.</Label>
                            <Input type='text' name='mobno' placeholder='Mobile No.' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="telno">Tel No.</Label>
                            <Input type='text' name='telno' placeholder='Tel No' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="officeno">Office No</Label>
                            <Input type='text' name='officeno' placeholder='Office No' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="alternateno">Alternate No</Label>
                            <Input type='text' name='alternateno' placeholder='Alternate No' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="aadharno">Aadhar No</Label>
                            <Input type='text' name='aadharno' placeholder='Aadhar No' />
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
                            <Label for="designation">Designation</Label>
                            <Input type='text' name='designation' placeholder='Designation Name' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="designation">Own house / Rented</Label>
                            <SelectBox options={options} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Input type="date" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="doa">DOA</Label>
                            <Input type="date" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="image">Image (Image jpg , jpeg , png , only)</Label>
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
                            <Label for="sdob">Spouse Name-1</Label>
                            <Input type='text' name='sdob' placeholder='Spouse Name -1' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sdob">Date of Birth</Label>
                            <Input type='text' name='dob' placeholder='Date of Birth ' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sdob">Spouse Name-2</Label>
                            <Input type='text' name='sdob' placeholder='Spouse Name -2' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sdob">Date of Birth</Label>
                            <Input type='text' name='dob' placeholder='Date of Birth ' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sdob">Spouse Name-3</Label>
                            <Input type='text' name='sdob' placeholder='Spouse Name - 3' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sdob">Date of Birth</Label>
                            <Input type='text' name='dob' placeholder='Date of Birth ' />
                        </FormGroup>
                    </Col>
                    <h6 className='fs-5 fw-bold py-3 px-3'>For Payment Section</h6>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="payment">Payment</Label>
                            <Input type='text' name='payment' placeholder='1000' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="damount">Discount Amount</Label>
                            <Input type='number' name='damount' placeholder='Please Enter Discount Amount' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ramount">Received Amount</Label>
                            <Input type='number' name='ramount' placeholder='Please Enter Received Amount' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="bamount">Blanace Amount</Label>
                            <Input type='number' name='bamount' placeholder='Please Enter Balance Amount' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="pamount">Payment Method</Label>
                            <SelectBox options={options} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="pamount">Free Service - 1</Label>
                            <Input />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="pamount">Free Service - 2</Label>
                            <Input />
                        </FormGroup>
                    </Col>
                    <Button className='bg-primary text-blue'> Submit</Button>
                </Row>

            </div>
        </Fragment>
    )
}

export default AddNewCustomerForm