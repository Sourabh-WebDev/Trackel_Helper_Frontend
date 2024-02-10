import React, { Fragment, useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import SelectBox from '../../../Elements/SelectBox';


const AddNewCustomerForm = () => {

    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];

    const paymentMethod = [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline' },
    ];

    const [membership, setMembership] = useState(null);
    const [payment, setPayment] = useState(null);

    const plans = [
        { value: 'plan1', label: '1000 Plan' },
        { value: 'plan2', label: '2000 Plan' },
    ];

    const handleMembershipChange = (selectedMembership) => {
        setMembership(selectedMembership.value);

        if (selectedMembership.value === 'plan1') {
            setPayment('1000');
        } else if (selectedMembership.value === 'plan2') {
            setPayment('2000');
        }
    };

    const [formData, setFormData] = useState({
        mobno: '',
        name: '',
        gender: '',
        age: '',
        address: '',
        landmark: '',
        email: '',
        location: '',
        alternateno: '',
        aadharno: '',
        occupation: '',
        designation: '',
        ownHouse: '',
        dob: '',
        image: null, // Assuming you want to upload an image
        fm: '',
        refredBy: '',
        membership: '',
        payment: null,
        damount: '',
        ramount: '',
        bamount: '',
        pamount: '',
        freeService1: '',
        freeService2: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the formData to your backend or perform any other actions.
        console.log('Form Data Submitted:', formData);
        // Reset the form after submission if needed
        // setFormData({ ... }); // Initialize with default values or an empty object
    };

    return (
        <Fragment>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="mobno">Mobile No.</Label>
                        <Input onChange={handleInputChange} type='text' name='mobno' placeholder='Mobile No.' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input onChange={handleInputChange} name='name' placeholder='Name' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="gender" >Gender</Label>
                        <SelectBox options={options} value={'Male'} setSelcted={'Male'} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input onChange={handleInputChange} name='age' placeholder='Enter Customer Age' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input onChange={handleInputChange} type='textarea' name='address' placeholder='Address' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="landmark">Land Mark</Label>
                        <Input onChange={handleInputChange} type='type' name='landmark' placeholder='Landmark' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={handleInputChange} type='email' name='email' placeholder='Email' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input onChange={handleInputChange} type='text' name='location' placeholder='Location' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="alternateno">Alternate No</Label>
                        <Input onChange={handleInputChange} type='text' name='alternateno' placeholder='Alternate No' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="aadharno">Aadhar No</Label>
                        <Input onChange={handleInputChange} type='text' name='aadharno' placeholder='Aadhar No' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="occupation">Occupation</Label>
                        <Input onChange={handleInputChange} type='text' name='occupation' placeholder='Occupation' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="designation">Designation</Label>
                        <Input onChange={handleInputChange} type='text' name='designation' placeholder='Designation Name' />
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
                        <Input onChange={handleInputChange} type="date" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="image">Image (Image jpg , jpeg , png , only)</Label>
                        <Input onChange={handleInputChange}
                            type="file"
                            name="image"
                            id="image"
                        // onChange={handleImageChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="fm">Family Member</Label>
                        <Input onChange={handleInputChange} type='text' name='fm' placeholder='Family Member' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="refredBy">Refered By</Label>
                        <Input onChange={handleInputChange} type='text' name='refredBy' placeholder='Refered By' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="membership">Type of Membership</Label>
                        <SelectBox
                            options={plans}
                            value={plans.find(opt => opt.value === membership)}
                            setSelcted={handleMembershipChange}
                        />
                    </FormGroup>
                </Col>

                <h6 className='fs-5 fw-bold py-3 px-3'>For Payment Section</h6>
                <Col md={6}>
                    <FormGroup>
                        <Label for="payment">Payment</Label>
                        <Input onChange={handleInputChange} type='text' name='payment' value={payment} readOnly={membership === null ? false : true} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="damount">Discount Amount (In Rupees)</Label>
                        <Input onChange={handleInputChange} type='number' name='damount' placeholder='Please Enter Discount Amount' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="ramount">Received Amount</Label>
                        <Input onChange={handleInputChange} type='number' name='ramount' placeholder='Please Enter Received Amount' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="bamount">Blanace Amount</Label>
                        <Input onChange={handleInputChange} type='number' value={payment-formData.damount-formData.ramount} name='bamount' placeholder='Please Enter Balance Amount' />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pamount">Payment Method</Label>
                        <SelectBox options={paymentMethod} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pamount">Free Service - 1</Label>
                        <Input onChange={handleInputChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pamount">Free Service - 2</Label>
                        <Input onChange={handleInputChange} />
                    </FormGroup>
                </Col>
                <Button onClick={handleSubmit} className='bg-primary h-fit text-blue'> Submit</Button>
            </Row>

        </Fragment>
    )
}

export default AddNewCustomerForm