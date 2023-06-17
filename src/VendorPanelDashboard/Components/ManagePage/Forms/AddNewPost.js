import React, { Fragment, useState } from 'react'
import SelectBox from '../../../DashboardComponents/SelectBox'
import { Form, Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';



const AddNewPost = () => {

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

            <div className="p-4 ">
                <div className='AddServiceMan_Main'>
                    <Form>
                        <Row>

                            {/* Personal Info  */}
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="department">To Date.</Label>
                                    {/* <SelectBox options={options} /> */}
                                    <Input type='date' />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="designation">End Date.</Label>
                                    {/* <SelectBox options={options} /> */}
                                    <Input type='date' />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="refname">Type</Label>
                                    <SelectBox options={options} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="mobileno">Mobile No</Label>
                                    <Input
                                        type="tel"
                                        name="mobileno"
                                        id="mobileno"
                                    />
                                </FormGroup>
                            </Col>
                            {/* <Col md={6}>
                                <FormGroup>
                                    <Label for="emai">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </FormGroup>
                            </Col> */}
                            {/* <Col md={6}>
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
                                    <Label for="pannumber">Join Date</Label>
                                    <Input
                                        type="date"
                                        name="joindate"
                                        id="joindate"
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
                            </Col> */}
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
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input
                                        type="text"
                                        name="address"
                                        id="address"
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={12}>
                                <FormGroup>
                                    <Label for="rLocationArea">Discription</Label>
                                    <Input
                                        type="textarea"
                                        name="documentone"
                                        id="documentone"
                                    />
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
            </div>


        </Fragment>
    )
}

export default AddNewPost