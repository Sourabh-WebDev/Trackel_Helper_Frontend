import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { UseStateManager } from '../Context/StateManageContext'
import Logo from '../assets/svg/we_logo.png'


export const LoginModal = () => {
    const { LoginOpen, setLoginOpen } = UseStateManager()
    return (
        <Modal className='modal-dialog-centered' isOpen={LoginOpen} toggle={() => setLoginOpen(!LoginOpen)}>
            <ModalHeader toggle={() => setLoginOpen(!LoginOpen)}> Login</ModalHeader>
            <ModalBody>
                <div className='text-center bgColour rounded'>
                    <img src={Logo} alt="MainLogo" />
                    <div className="text-center">
                        <h4>Welcome To Helper</h4>
                        <p className='py-2'>Please Enter your details to Login</p>
                        <Button style={{background:'#142572'}} active={true} outline >Customer</Button>
                        <Button outline className='ml-2' >Vendor</Button>

                    </div>
                    <form className='p-2' action="#" method="post">
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className="form-group">
                            <label for="email">Password. :</label>
                            <input type="email" id="email" name="email" placeholder="Enter your password." required />
                        </div>
                        <div className="form-group text-right">
                            <input onClick={() => setLoginOpen(!LoginOpen)} type="submit" value="Login" />
                        </div>
                    </form>
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
                        <Button style={{background:'#142572'}} active={true} outline >Customer</Button>
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