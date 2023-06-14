import React, { Fragment, useState } from 'react'
import SelectBox from '../../../DashboardComponents/SelectBox'
import { Form, Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import DashHeader from '../../../DashboardComponents/Global/DashHeader';




const AddServiceProvider = () => {

    // selected services
    const [selected, setSelected] = useState([])

    const ManageSelected = (index) => {
        if (selected.includes(index) === true) {
            setSelected(selected.filter(x => x !== index))
        } else {
            let array = [...selected, index]
            setSelected(array)
        }
    }


    const options = [
        { value: 'Date', label: 'Date' },
        { value: 'Name', label: 'Name' },
        { value: 'Designation', label: 'Designation' },
    ];


    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Perform additional checks/validation if needed
        setImage(file);
    };
    return (
        <Fragment>
            <DashHeader />
            <h3 className='p-3 mt-3 bg-transparent headingBelowBorder text-blue' style={{ maxWidth: "fit-content" }}>Add Service Provider</h3>
            <div className='d-grid place-items-center'>
                <Card className="MainAttendenceReportForm mt-5 p-4 shadow-lg">
                    <div className='AddServiceMan_Main'>
                        <Form>
                            <Row>

                                {/* Personal Info  */}
                                <h6 className='pb-3 fw-bold fs-5'>Personal Info</h6>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            id="username"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="firstname">First Name</Label>
                                        <Input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lastname">Last Name</Label>
                                        <Input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="image">Select Image</Label>
                                        <Input
                                            type="file"
                                            name="image"
                                            id="image"
                                            onChange={handleImageChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="mobileno">Mobile No.</Label>
                                        <Input
                                            type="tel"
                                            name="mobileno"
                                            id="mobileno"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="aadharno">Aadhar No.</Label>
                                        <Input
                                            type="number"
                                            name="aadharno"
                                            id="aadharno"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="pannumber">Pan No.</Label>
                                        <Input
                                            type="number"
                                            name="pannumber"
                                            id="pannumber"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="doj">Date Of Joining</Label>
                                        <Input
                                            type="date"
                                            name="doj"
                                            id="doj"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="paddress">Parmanent Address</Label>
                                        <Input
                                            type="text"
                                            name="paddress"
                                            id="paddress"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label className="d-flex flex-nowrap" for="caddress">Current Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small><Input type="checkbox" /> same as parmarent address</small></Label>
                                        <Input
                                            type="text"
                                            name="caddress"
                                            id="caddress"
                                        />
                                    </FormGroup>
                                </Col>
                                <h6 className='fw-bold fs-5 pb-3'>Reference Details</h6>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="referencename">Reference Name</Label>
                                        <Input
                                            type="text"
                                            name="referencename"
                                            id="referencename"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="radderess">Address</Label>
                                        <Input
                                            type="text"
                                            name="raddress"
                                            id="raddress"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="radderess">Aadhar No.</Label>
                                        <Input
                                            type="text"
                                            name="raadharno"
                                            id="raadharno"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="rmobileno">Mobile No.</Label>
                                        <Input
                                            type="text"
                                            name="rmobileno"
                                            id="rmobileno"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="rcity">Select City.</Label>
                                        <SelectBox options={options} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="rSelectArea">Select Area</Label>
                                        <Input
                                            type="text"
                                            name="rSelectArea"
                                            id="rSelectArea"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="rLocationArea">Location Area</Label>
                                        <Input
                                            type="text"
                                            name="rLocationArea"
                                            id="rLocationArea"
                                        />
                                    </FormGroup>
                                </Col>

                                {/* Sevice Upload Section */}
                                <h6 className='fw-bold fs-5 pb-3'>Services</h6>
                                <div className="AddServieProvder_services">
                                    {[...Array(50)].map((item, index) => (
                                        <span className={`py-2 px-3 border rounded-2  ${selected.includes(index) === true ? "hoverThis_active" : "hoverThis"}`} onClick={() => { ManageSelected(index) }} >
                                            Services
                                        </span>
                                    ))}

                                </div>


                                {/* Document Upload Section  */}

                                <h6 className='fw-bold fs-5 py-3'>Documents</h6>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="rLocationArea">Document 1</Label>
                                        <Input
                                            type="text"
                                            name="documentone"
                                            id="documentone"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="image">Document Image</Label>
                                        <Input
                                            type="file"
                                            name="image"
                                            id="image"
                                            onChange={handleImageChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="documenttwo">Document 2</Label>
                                        <Input
                                            type="text"
                                            name="documenttwo"
                                            id="documenttwo"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="image">Document Image</Label>
                                        <Input
                                            type="file"
                                            name="image"
                                            id="image"
                                            onChange={handleImageChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="documentthree">Document 3</Label>
                                        <Input
                                            type="text"
                                            name="documentthree"
                                            id="documentthree"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="image">Document Image</Label>
                                        <Input
                                            type="file"
                                            name="image"
                                            id="image"
                                            onChange={handleImageChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="documentthree">Service Provider Type</Label>
                                        <SelectBox options={options} />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="aboutserviceprover">About Service Provider</Label>
                                        <Input type="textarea" name="aboutserviceprover" placeholder="About Service provider" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button color="primary" type="submit" className="ml-3">Submit</Button>

                        </Form>
                        <div>
                            <div className="mt-4">
                                {image && (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Selected"
                                        style={{ width: '200px' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </Fragment>
    )
}

export default AddServiceProvider