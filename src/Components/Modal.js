import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Row,
  Col,
  Input,
  CardBody,
  CardHeader,
  Card,
  Label,
  FormGroup,
} from "reactstrap";
import { UseStateManager } from "../Context/StateManageContext";
import Logo from "../assets/svg/we_logo.png";
import { Formik } from "formik";
import {
  GetCustomerLogIn,
  GetLogIn,
} from "../Store/Actions/LandingPage/AuthAction";
import GetLogInReducers from "../Store/Reducers/LandingPage/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { MenuItem, Select } from "@mui/material";
import { GetAllServices } from "../Store/Actions/Dashboard/servicesAction";
import { ClockLoader } from "react-spinners";
import { useAuth } from "../Context/userAuthContext";

export const LoginModal = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOpt] = useState("");
  // const [otpId, setOptId] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const users = {
    Admin: "Admin",
    vendor: "vendor",
    Office: "Office",
    Customer: "Customer",
  };
  const { LoginOpen, setLoginOpen } = UseStateManager();

  const [loginPerson, setLoginPerson] = useState(users.Customer);

  const LoginResult = useSelector((pre) => pre.GetLogInReducers);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const { sendOtp, otpid, setOtpId } = useAuth();

  const loginForm = {
    email: "",
    password: "",
  };

  const handleOtpSend = async (otp) => {
    setLoader(true);
    await sendOtp(otp);
    setTimeRemaining(60);
    setLoader(false);
  };

  const handleSubmit = async (number, otp, otpid) => {
    setLoader(true);
    await dispatch(GetCustomerLogIn(number, otp, otpid)).then(() => {
      setLoader(false);
    });
  };

  useEffect(() => {
    let timer;

    // Start the timer when the component mounts
    timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          setIsTimerComplete(true);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Update the time remaining every 1 second (1000 milliseconds)

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  const HandleResendBtn = async (number) => {
    await handleOtpSend(number);
    setTimeRemaining(60);
  };

  return (
    <Modal
      className="modal-dialog-centered "
      isOpen={LoginOpen}
      toggle={() => setLoginOpen(!LoginOpen)}
    >
      <ModalHeader
        className="modal_header"
        toggle={() => setLoginOpen(!LoginOpen)}
      >
        {" "}
        Login
      </ModalHeader>
      <ModalBody className="LoginBgMain relative">
        {otpid && <h6 className="absolute top-2 right-2">{timeRemaining}</h6>}
        <div className="w-100 d-flex loginmain">
          <div className="text-center rounded">
            <img src={Logo} alt="MainLogo" />
            <div className="text-center">
              <h4 className="text-blue fw-bold">Welcome To Helper</h4>
              <p className="py-2 text-secondary">
                Please Enter your details to Login
              </p>
            </div>

            <form>
              <FormGroup className="d-flex flex-column  align-items-start ">
                <Label for="mobileNo">Enter Mobile Number :</Label>
                <Input
                  type="tel"
                  name="mobileNo"
                  id="mobileNo"
                  value={mobileNo}
                  disabled={otpid !== null}
                  placeholder="992XXXXXXX"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </FormGroup>
              {otpid ? (
                <FormGroup className="d-flex align-items-center gap-2 ">
                  <Label for="mobileNo text-nowrap w-25">Enter Otp :</Label>
                  <Input
                    type="text"
                    name="mobileNo"
                    id="mobileNo"
                    maxLength={4}
                    value={otp}
                    placeholder="XXXX"
                    className="w-25"
                    onChange={(e) => setOpt(e.target.value)}
                  />
                </FormGroup>
              ) : null}
              <Button type="button" className="ml-3 bg-blue w-25">
                Cancel
              </Button>
              {otpid ? (
                <>
                  <Button
                    type="button"
                    className="ml-3 bg-blue w-25"
                    onClick={() => handleSubmit(mobileNo, otp, otpid)}
                  >
                    Login
                    <ClockLoader
                      size={16}
                      className="ml-2 "
                      color="#fff"
                      loading={loader}
                    />
                  </Button>
                  <Button
                    type="button"
                    disabled={timeRemaining >= 5}
                    className="ml-3 bg-blue w-25"
                    onClick={() => HandleResendBtn(mobileNo)}
                  >
                    Resend
                    <ClockLoader
                      size={16}
                      className="ml-2 "
                      color="#fff"
                      loading={loader}
                    />
                  </Button>
                </>
              ) : (
                <Button
                  type="button"
                  className="ml-3 bg-blue w-25"
                  onClick={() => handleOtpSend(mobileNo)}
                >
                  Verify
                  <ClockLoader
                    size={16}
                    className="ml-2 "
                    color="#fff"
                    loading={loader}
                  />
                </Button>
              )}
            </form>

            {/* <Formik
              initialValues={loginForm}
              onSubmit={(values, { resetForm }) => {
                dispatch(GetLogIn(values, loginPerson));
                resetForm();
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form className="p-2" onSubmit={handleSubmit} method="post">
                  <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Enter your password."
                      required
                    />
                  </div>
                  <div className="form-group text-right">
                    <Button type="submit">Log In </Button>
                  </div>
                </form>
              )}
            </Formik> */}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export const SingupModal = () => {
  const { SingUp, setSingUp } = UseStateManager();
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={SingUp}
      toggle={() => setSingUp(!SingUp)}
    >
      <ModalHeader toggle={() => setSingUp(!SingUp)}> Sign Up</ModalHeader>
      <ModalBody>
        <div className="text-center bgColour rounded">
          <img src={Logo} alt="MainLogo" />
          <div className="text-center">
            <h4>Welcome To Helper</h4>
            <p className="py-2">Please Enter your details to Sign Up</p>
            <Button style={{ background: "#142572" }} active={true} outline>
              Customer
            </Button>
            <Button outline className="ml-2">
              Vendor
            </Button>
          </div>
          <form className="p-2" action="#" method="post">
            <div className="form-group">
              <label for="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Password :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your password."
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Confirm Password :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Confirm your password."
                required
              />
            </div>
            <div className="form-group text-right">
              <input
                onClick={() => setSingUp(!SingUp)}
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export const ServeiceRequestModal = ({
  serveRequestModalOpen,
  serveRequestModalOpenfunction,
}) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceType: "",
    serviceTime: "",
    serviceDate: "",
    name: "",
    mobileNo: "",
    address: "",
    landMark: "",
    location: "",
    problemDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.GetAllServicesReducer);

  useEffect(() => {
    dispatch(GetAllServices());
  }, []);

  const handleSubmit = () => {
    console.log(formData); // You can replace this with yserviceNameour desired form submission logic
    serveRequestModalOpenfunction(); // Close the modal after submission
  };

  return (
    <Modal
      className="modal-dialog-centered modal-lg"
      isOpen={serveRequestModalOpen}
      toggle={serveRequestModalOpenfunction}
    >
      <ModalHeader toggle={serveRequestModalOpenfunction}>
        Service Request Form
      </ModalHeader>
      <ModalBody>
        <div>
          <Row>
            <Col xs={12} lg={7}>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="stateSelect">
                        Service Name *
                      </label>
                      <Select
                        style={{ maxHeight: "159px" }}
                        id="stateSelect"
                        name="serviceName"
                        className="form-control"
                        value={formData.serviceName}
                        onChange={handleInputChange}
                      >
                        {data.data &&
                          data.data.map((item, index) => (
                            <MenuItem key={index} value={item.serviceName}>
                              {item.serviceName}
                            </MenuItem>
                          ))}
                      </Select>
                    </div>
                  </Col>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="stateSelect">
                        Type *
                      </label>
                      <Select
                        id="stateSelect"
                        name="serviceType"
                        className="form-control"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                      >
                        <MenuItem value="booking">Booking</MenuItem>
                        <MenuItem value="urgent">Urgent</MenuItem>
                        <MenuItem value="regular">Regular</MenuItem>
                      </Select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceName">
                        Service Time *
                      </label>
                      <Input
                        type="time"
                        name="serviceTime"
                        className="form-control"
                        value={formData.serviceTime}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceType">
                        Service Date *
                      </label>
                      <Input
                        type="date"
                        name="serviceDate"
                        className="form-control"
                        value={formData.serviceDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceName">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceType">
                        Mobile No. *
                      </label>
                      <Input
                        type="number"
                        name="mobileNo"
                        className="form-control"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceType">
                        Address *
                      </label>
                      <Input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceName">
                        Landmark *
                      </label>
                      <Input
                        type="text"
                        name="landMark"
                        className="form-control"
                        value={formData.landMark}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col xs={12} lg={6} xl={6}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceType">
                        Location *
                      </label>
                      <Input
                        type="text"
                        name="location"
                        className="form-control"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="serviceName">
                        Problem Description *
                      </label>
                      <Input
                        type="textarea"
                        name="problemDescription"
                        className="form-control"
                        value={formData.problemDescription}
                        onChange={handleInputChange}
                        rows="4"
                        cols="50"
                      />
                    </div>
                  </Col>
                </Row>
                <Button
                  color="primary"
                  className="btn-block"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </form>
            </Col>
            <Col xs={12} lg={5}>
              <Card>
                <div className="p-2 bg-warning">
                  <p>
                    <b>Terms and Conditions</b>
                  </p>
                </div>
                <CardBody>
                  <ul>
                    <li>Every Free Services for one & half hour.</li>
                    <li>After that it will paid by Member.</li>
                    <li>Material Cost paid by Member.</li>
                    <li>
                      Associated service provider will responsibile for three
                      quality.
                    </li>
                    <li>
                      Additional Charges will be paid by member as per the norms
                      of the quality.
                    </li>
                    <li>
                      Beside Emergency Services other will be available form
                      8:00 am to 6:00 pm.
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </ModalBody>
    </Modal>
  );
};

export const CustomerRemarkModal = ({
  customerRemarkModalOpen,
  customerRemarkModalfunction,
}) => {
  const [formData, setFormData] = useState({
    serviceRemark: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData); // You can replace this with yserviceNameour desired form submission logic
    customerRemarkModalfunction(); // Close the modal after submission
  };

  return (
    <Modal
      className="modal-dialog-centered modal-lg"
      isOpen={customerRemarkModalOpen}
      toggle={customerRemarkModalfunction}
    >
      <ModalHeader toggle={customerRemarkModalfunction}>
        Service Remark
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col xs={12}>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="serviceRemark">
                Service Remark
              </label>
              <Input
                type="textarea"
                name="serviceRemark"
                className="w-100"
                value={formData.serviceRemark}
                onChange={handleInputChange}
                rows="6" // Increase the number of rows
                cols="50" // Adjust the number of columns if needed
              />
            </div>
            <div className="d-flex justify-content-evenly">
              <Button color="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button
                color="primary"
                outline
                onClick={customerRemarkModalfunction}
              >
                Close
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};
