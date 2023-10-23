import React, { Fragment, useEffect, useState } from 'react'
import { Form, Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ImageUploadAction } from '../../../../Store/Actions/ImageUploadAction';
import { GetRegEmployee } from '../../../../Store/Actions/Dashboard/EmployeeActions/EmployeeRegAction';
import { useAuth } from '../../../../Context/userAuthContext';




const AdminAddEmployeeForm = ({ ToggleAddEmployee }) => {

    const { currentUser } = useAuth()
    // selected services
    // Department
    const [department, setDepartment] = useState(null)
    //designation
    const [slectedDesignation, setSelectedDesignation] = useState(null)

    // all images
    const [uploadedImg, setUploadedImg] = useState({})


    // State to keep track of the selected value
    // final submit 
    // const submitData = useSelector(state => state.GetEmployeeRegReducer)

    // final submit 
    const finalFormSubmit = (formdata, { resetForm }) => {
        const newFormData = {
            ...formdata,
            role: slectedDesignation,
            departName: department,
            designationName: slectedDesignation,
            img: uploadedImg.img,
            documentOneImg: uploadedImg.documentOneImg,
            documentTwoImg: uploadedImg.documentTwoImg,
            documentThreeImg: uploadedImg.documentThreeImg
        }
        dispatch(GetRegEmployee(newFormData)).then(() => {
            console.log(newFormData)
            ToggleAddEmployee()
            resetForm()
        })
    }


    // const ManageSelected = (index) => {
    //     if (selected.includes(index) === true) {
    //         setSelected(selected.filter(x => x !== index))
    //     } else {
    //         let array = [...selected, index]
    //         setSelected(array)
    //     }
    // }


    const ImageResult = useSelector(state => state.ImageUploadReducer)
    const dispatch = useDispatch()


    // const options = [
    //     { value: 'Date', label: 'Date' },
    //     { value: 'Name', label: 'Name' },
    //     { value: 'Designation', label: 'Designation' },
    // ];
    // const Dummy = [
    //     { value: '----', label: '----' },
    // ];

    const Departments = [
        { value: 'it', label: 'IT' },
        { value: 'office', label: 'Office' },
    ];

    const designation = [
        { value: 'admin', label: 'Admin' },
        { value: 'backoffice', label: 'Back Office' },
        { value: 'supervisor', label: "Super Visor" }
    ];





    const dataForm = {
        departName: "",
        role: "",
        designationName: "",
        refName: "",
        name: "",
        mobileNo: "",
        email: "",
        aadharNo: "",
        panNo: "",
        joinDate: "",
        password: "",
        img: "",
        address: "",
        aboutEmployee: "",
        documentOne1: "",
        documentOneImg: "",
        documentTwo: "",
        documentTwoImg: "",
        documentThree: "",
        documentThreeImg: "",
    }


    useEffect(() => {
        if (ImageResult.isField) {
            setUploadedImg({ ...uploadedImg, ...ImageResult.isField })
        }
    }, [ImageResult])





    return (
        <Fragment>

            {/* <h3 className='p-3 mt-3 bg-transparent headingBelowBorder text-blue' style={{ maxWidth: "fit-content" }}>Add Employee</h3> */}
            <div className='d-grid place-items-center'>
                <Card className=" p-4 border-0">
                    <div className='AddServiceMan_Main'>
                        <Formik initialValues={dataForm} onSubmit={finalFormSubmit} >
                            {({ values, handleChange, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    {console.log(department, slectedDesignation)}
                                    <Row>
                                        {/* Personal Info  */}
                                        <h6 className='pb-3 fw-bold fs-5'>Personal Info</h6>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="department">Department Name</Label>
                                                <Input type="select" name="select" id="exampleSelect" value={department} onChange={(e) => setDepartment(e.target.value)} >
                                                    {Departments.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="designation">Designation Name</Label>
                                                <Input type="select" name="select" id="exampleSelect" value={slectedDesignation} onChange={(e) => setSelectedDesignation(e.target.value)}>
                                                    {department && department === "office" ? designation.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    )) : null}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="refname">Ref.Name</Label>
                                                <Input
                                                    type="text"
                                                    name="refName"
                                                    id="refName"
                                                    value={values.refName}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="name">Name</Label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    onChange={handleChange}
                                                    value={values.name}
                                                    id="name"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="mobileno">Mobile No</Label>
                                                <Input
                                                    type="tel"
                                                    name="mobileNo"
                                                    onChange={handleChange}
                                                    value={values.mobileNo}
                                                    id="mobileNo"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="emai">Email</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    id="email"
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
                                                    value={values.aadharNo}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="pannumber">Pan No.</Label>
                                                <Input
                                                    type="number"
                                                    name="panNo"
                                                    value={values.panNo}
                                                    onChange={handleChange}
                                                    id="panNo"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="pannumber">Join Date</Label>
                                                <Input
                                                    type="date"
                                                    name="joinDate"
                                                    value={values.joinDate}
                                                    onChange={handleChange}
                                                    id="joinDate"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="password">Password</Label>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    id="password"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Select Image</Label>
                                                <Input
                                                    type="file"
                                                    name="img"
                                                    id="img"
                                                    onChange={(e) => dispatch(ImageUploadAction(e, currentUser._id))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="address">Address</Label>
                                                <Input
                                                    type="text"
                                                    name="address"
                                                    onChange={handleChange}
                                                    value={values.address}
                                                    id="address"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="rLocationArea">Document 1</Label>
                                                <Input
                                                    type="text"
                                                    value={values.documentOne1}
                                                    onChange={handleChange}
                                                    name="documentOne1"
                                                    id="documentOne1"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Document Image</Label>
                                                <Input
                                                    type="file"
                                                    name="documentOneImg"
                                                    id="documentOneImg"
                                                    onChange={(e) => dispatch(ImageUploadAction(e, currentUser._id))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="documenttwo">Document 2</Label>
                                                <Input
                                                    type="text"
                                                    name="documentTwo"
                                                    value={values.documentTwo}
                                                    onChange={handleChange}
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
                                                    id="documentTwoImg"
                                                    onChange={(e) => dispatch(ImageUploadAction(e, currentUser._id))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="documentthree">Document 3</Label>
                                                <Input
                                                    type="text"
                                                    value={values.documentThree}
                                                    onChange={handleChange}
                                                    name="documentThree"
                                                    id="documentThree"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="image">Document Image</Label>
                                                <Input
                                                    type="file"
                                                    name="documentThreeImg"
                                                    id="documentThreeImg"
                                                    onChange={(e) => dispatch(ImageUploadAction(e, currentUser._id))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="about">About Employee</Label>
                                                <Input
                                                    type="textarea"
                                                    value={values.aboutEmployee}
                                                    name="aboutEmployee"
                                                    id="aboutEmployee"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Button color="primary" type="submit" className="ml-3">Submit</Button>

                                </Form>
                            )}
                        </Formik>


                    </div>
                </Card>
            </div>

        </Fragment>
    )
}


export default AdminAddEmployeeForm