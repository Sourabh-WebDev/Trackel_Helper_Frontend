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
                <div className='text-center bgColour'>
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