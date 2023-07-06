import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { UseStateManager } from '../Context/StateManageContext'
import Logo from '../assets/svg/we_logo.png'
import { Formik } from 'formik'
import { GetLogIn } from '../Store/Actions/LandingPage/AuthAction'
import GetLogInReducers from '../Store/Reducers/LandingPage/AuthReducer'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'


export const LoginModal = () => {


    const dispatch = useDispatch();

    const users = {
        Admin: "Admin",
        vendor: "vendor",
        Office: "Office",
        Customer: "Customer"
    }
    const { LoginOpen, setLoginOpen } = UseStateManager()

    const [loginPerson, setLoginPerson] = useState(users.Customer)

    const LoginResult = useSelector(pre => pre.GetLogInReducers)





    const loginForm = {
        email: "",
        password: "",
    }

    return (
        <Modal className='modal-dialog-centered' isOpen={LoginOpen} toggle={() => setLoginOpen(!LoginOpen)}>
            <ModalHeader toggle={() => setLoginOpen(!LoginOpen)}> Login</ModalHeader>
            <ModalBody>
                {console.log(LoginResult)}
                <div className='text-center bgColour rounded'>
                    <img src={Logo} alt="MainLogo" />
                    <div className="text-center">
                        <h4>Welcome To Helper</h4>
                        <p className='py-2'>Please Enter your details to Login</p>
                        <Button color='success' active={loginPerson === users.Customer} outline onClick={() => setLoginPerson(users.Customer)} >Customer</Button>
                        <Button color='success' outline active={loginPerson === users.vendor} onClick={() => setLoginPerson(users.vendor)} className='ml-2' >Vendor</Button>
                    </div>

                    <Formik initialValues={loginForm} onSubmit={(values, { resetForm }) => {
                        dispatch(GetLogIn(values, loginPerson))
                        resetForm();
                    }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <form className='p-2' onSubmit={handleSubmit} method="post">
                                <div className="form-group">
                                    <label for="email">Email:</label>
                                    <input type="text" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Password:</label>
                                    <input type="password" id="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter your password." required />
                                </div>
                                <div className="form-group text-right">
                                    <Button type="submit" >Log In </Button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </ModalBody>
        </Modal>
    )
}
export const SingupModal = () => {
    const { SingUp, setSingUp } = UseStateManager()
    return (
        <Modal className='modal-dialog-centered' isOpen={SingUp} toggle={() => setSingUp(!SingUp)}>
            <ModalHeader toggle={() => setSingUp(!SingUp)}> Sign Up</ModalHeader>
            <ModalBody>
                <div className='text-center bgColour rounded'>
                    <img src={Logo} alt="MainLogo" />
                    <div className="text-center">
                        <h4>Welcome To Helper</h4>
                        <p className='py-2'>Please Enter your details to Sign Up</p>
                        <Button style={{ background: '#142572' }} active={true} outline >Customer</Button>
                        <Button outline className='ml-2' >Vendor</Button>

                    </div>
                    <form className='p-2' action="#" method="post">
                        <div className="form-group">
                            <label for="name">Full Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className="form-group">
                            <label for="email">Password :</label>
                            <input type="email" id="email" name="email" placeholder="Enter your password." required />
                        </div>
                        <div className="form-group">
                            <label for="email">Confirm Password :</label>
                            <input type="email" id="email" name="email" placeholder="Confirm your password." required />
                        </div>
                        <div className="form-group text-right">
                            <input onClick={() => setSingUp(!SingUp)} type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    )
}