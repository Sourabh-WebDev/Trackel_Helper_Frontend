import React, { Fragment, useEffect, useState } from 'react'

import { Form, Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import SelectBox from '../../../Elements/SelectBox';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import GetAllServicesReducer from '../../../../Store/Reducers/Dashboard/GetAllServicesReducer';
import { GetAllServices } from '../../../../Store/Actions/Dashboard/servicesAction';
import { ImageUploadAction } from '../../../../Store/Actions/ImageUploadAction';
// import ImageUploadReducer from '../../../../Store/Reducers/ImageUploadReducers';
import { GetServiceProviderSignupAction } from '../../../../Store/Actions/Dashboard/Authentication/SignupActions';
// import { WaitLoader } from '../../../Elements/WaitLoader';
// import { useStateManager } from 'react-select';



const AdminAddServiceProvider = () => {

    const dispatch = useDispatch()
    // get All service
    const { isSuccess, data } = useSelector(pre => pre.GetAllServicesReducer)
    const ImageResult = useSelector(pre => pre.ImageUploadReducer);



    // Image Uploaded Record 
    const [uploadedImage, setUploadedImage] = useState({})


    useEffect(() => {
        dispatch(GetAllServices())
    }, [])

    const [selectedCity, setSelectedCity] = useState(null)
    const [selectedServiceType, setSeletedServiceType] = useState(null)


    const AddServiceProviderFormData = {
        username: "",
        role: "",
        firstName: "",
        lastName: "",
        image: uploadedImage.image ? uploadedImage.image : "",
        mobileNo: "",
        aadharNo: "",
        panNo: "",
        email: "",
        dateofjoining: "",
        password: "",
        parmanentAddress: "",
        currentAddress: "",
        // reference details 
        referenceName: "",
        referenceAddress: "",
        referenceAadharNo: "",
        referenceMobileNo: "",
        referenceCity: "",
        referenceArea: "",
        referenceLocationArea: "",
        // service list
        services: "",
        // Document information
        documentOne: "",
        documentOneImg: uploadedImage.documentOneImg ? uploadedImage.documentOneImg : "",
        documentTwo: "",
        documentTwoImg: uploadedImage.documentTwoImg ? uploadedImage.documentTwoImg : "",
        documentThree: "",
        documentThreeImg: uploadedImage.documentThreeImg ? uploadedImage.documentThreeImg : "",
        // service provider info
        serviceProviderType: selectedServiceType ? selectedServiceType : "",
        about: ""
    }



    // service Provider Signup Function 
    const ServiceProviderSubmit = (formdata, { resetForm }) => {
        // Assuming the first name field is called "firstname" and the last name field is called "lastname"
        const { firstName, lastName, ...otherData } = formdata;

        const name = `${firstName} ${lastName}`;
        const updatedFormData = { ...otherData, name };

        dispatch(GetServiceProviderSignupAction(updatedFormData)).then(() => {
            resetForm();
        }).catch((error) => {
            console.log(error);
        });
    };




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

    const ServiceProviderType = [
        { value: 'staff', label: 'Staff' },
        { value: 'outsource', label: 'Out Source' },
    ];


    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Perform additional checks/validation if needed
        setImage(file);
    };

    useEffect(() => {
        const NewArry = { ...ImageResult.isField }
        setUploadedImage({ ...uploadedImage, ...NewArry })
    }, [ImageResult.isField]);

    

    return (
        <Fragment>
            
            {/* <h3 className='p-3 mt-3 bg-transparent headingBelowBorder text-blue' style={{ maxWidth: "fit-content" }}>Add Service Provider</h3> */}
            <div className='d-grid place-items-center'>
                <Card className=" border-0 p-4">

                    <div className='AddServiceMan_Main'>
                        <Formik initialValues={AddServiceProviderFormData} onSubmit={ServiceProviderSubmit} >
                            {({ values, handleChange, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
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
                                                    onChange={handleChange}
                                                    value={values.username}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="firstname">First Name</Label>
                                                <Input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    onChange={handleChange}
                                                    value={values.firstName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="lastName">Last Name</Label>
                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    onChange={handleChange}
                                                    value={values.lastName}
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
                                                    onChange={(e) => dispatch(ImageUploadAction(e))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="mobileno">Mobile No.</Label>
                                                <Input
                                                    type="tel"
                                                    name="mobileNo"
                                                    id="mobileNo"
                                                    onChange={handleChange}
                                                    value={values.mobileNo}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="aadharno">Aadhar No.</Label>
                                                <Input
                                                    type="number"
                                                    name="aadharNo"
                                                    id="aadharNo"
                                                    onChange={handleChange}
                                                    value={values.aadharNo}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="pannumber">Pan No.</Label>
                                                <Input
                                                    type="number"
                                                    name="panNo"
                                                    id="panNo"
                                                    onChange={handleChange}
                                                    value={values.panNo}
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
                                                    onChange={handleChange}
                                                    value={values.email}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="doj">Date Of Joining</Label>
                                                <Input
                                                    type="date"
                                                    name="dateofjoining"
                                                    onChange={handleChange}
                                                    value={values.dateofjoining}
                                                    id="dateofjoining"
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
                                                    onChange={handleChange}
                                                    value={values.password}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Label for="paddress">Parmanent Address</Label>
                                                <Input
                                                    type="text"
                                                    name="parmanentAddress"
                                                    onChange={handleChange}
                                                    value={values.parmanentAddress}
                                                    id="parmanentAddress"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Label className="d-flex flex-nowrap" for="caddress">Current Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small><Input type="checkbox" /> same as parmarent address</small></Label>
                                                <Input
                                                    type="text"
                                                    name="currentAddress"
                                                    id="currentAddress"
                                                    value={values.currentAddress}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <h6 className='fw-bold fs-5 pb-3'>Reference Details</h6>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="referencename">Reference Name</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceName"
                                                    id="referenceName"
                                                    onChange={handleChange}
                                                    value={values.referenceName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="radderess">Address</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceAddress"
                                                    id="referenceAddress"
                                                    onChange={handleChange}
                                                    value={values.referenceAddress}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="radderess">Aadhar No.</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceAadharNo"
                                                    onChange={handleChange}
                                                    value={values.referenceAadharNo}
                                                    id="referenceAadharNo"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="referenceMobileNo">Mobile No.</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceMobileNo"
                                                    id="referenceMobileNo"
                                                    onChange={handleChange}
                                                    value={values.referenceMobileNo}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="rcity">Select City.</Label>
                                                <Input type='text'
                                                    placeholder='City'
                                                    name="referenceCity"
                                                    id="referenceCity"
                                                    onChange={handleChange}
                                                    value={values.referenceCity}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="referenceArea">Select Area</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceArea"
                                                    id="referenceArea"
                                                    onChange={handleChange}
                                                    value={values.referenceArea}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="rLocationArea">Location Area</Label>
                                                <Input
                                                    type="text"
                                                    name="referenceLocationArea"
                                                    id="referenceLocationArea"
                                                    onChange={handleChange}
                                                    value={values.referenceLocationArea}
                                                />
                                            </FormGroup>
                                        </Col>

                                        {/* Sevice Upload Section */}
                                        <h6 className='fw-bold fs-5 pb-3'>Services</h6>
                                        <div className="AddServieProvder_services">
                                            <div className="AddServieProvder_services">
                                                {data.data && data.data.length > 0 ? (
                                                    data.data.map((item, index) => (
                                                        <span
                                                            className={`py-2 px-3 border rounded-2 cursor-p  ${selected.includes(item.serviceName) === true
                                                                ? "hoverThis_active"
                                                                : "hoverThis"
                                                                }`}
                                                            onClick={() => {
                                                                ManageSelected(item.serviceName);
                                                            }}
                                                        >
                                                            {item.serviceName}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span>No data available.</span>
                                                )}
                                            </div>

                                        </div>


                                        {/* Document Upload Section  */}

                                        <h6 className='fw-bold fs-5 py-3'>Documents</h6>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="documentOne">Document 1</Label>
                                                <Input
                                                    type="text"
                                                    name="documentOne"
                                                    id="documentOne"
                                                    onChange={handleChange}
                                                    value={values.documentOne}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Document Image</Label>
                                                <Input
                                                    type="file"
                                                    name="documentOneImg"
                                                    id="image"
                                                    onChange={(e) => dispatch(ImageUploadAction(e))}

                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="documentTwo">Document 2</Label>
                                                <Input
                                                    type="text"
                                                    onChange={handleChange}
                                                    value={values.documentTwo}
                                                    name="documentTwo"
                                                    id="documentTwo"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Document Image</Label>
                                                <Input
                                                    type="file"
                                                    name="documentTwoImg"
                                                    onChange={(e) => dispatch(ImageUploadAction(e))}
                                                    id="image"

                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="documentThree">Document 3</Label>
                                                <Input
                                                    type="text"
                                                    name="documentThree"
                                                    id="documentThree"
                                                    onChange={handleChange}
                                                    value={values.documentThree}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Document Image</Label>
                                                <Input
                                                    type="file"
                                                    name="documentThreeImg"
                                                    onChange={(e) => dispatch(ImageUploadAction(e))}
                                                    id="image"

                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Label for="serviceprovidertype">Service Provider Type</Label>
                                                <SelectBox options={ServiceProviderType} setSelcted={setSeletedServiceType} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Label for="aboutserviceprover">About Service Provider</Label>
                                                <Input
                                                    type="textarea"
                                                    name="about"
                                                    placeholder="about"
                                                    onChange={handleChange}
                                                    value={values.about}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button color="primary" type="submit" className="ml-3">Submit</Button>

                                </Form>
                            )}
                        </Formik>

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

export default AdminAddServiceProvider