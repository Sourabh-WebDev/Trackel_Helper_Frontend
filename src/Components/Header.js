import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/svg/we_logo.png'
import { NavDropdown } from 'react-bootstrap';
import { UseStateManager } from '../Context/StateManageContext';
import { LoginModal, SingupModal } from './Modal';

function Header() {

    const { LoginOpen, setLoginOpen, SingUp, setSingUp } = UseStateManager()

    return (
        <Navbar className='bgColour' expand="lg">
            <Container fluid>
                <Navbar.Brand className='animate__animated animate__flipInY' href="/">
                    <img src={Logo} alt="MainLogo" />
                </Navbar.Brand>
                <div className='paddingForMain'>
                    <h5>Welcome to <b>Helper Services</b></h5>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='txtColour' href="#action1">Register As A Professional</Nav.Link>
                        <Nav.Link style={{ marginLeft: '10px', marginRight: '10px' }} className='txtColour' href="/About-Us">About Us</Nav.Link>
                        <Nav.Link style={{ marginLeft: '10px', marginRight: '10px' }} className='txtColour' href="/Our-All-Services">Services </Nav.Link>
                        <Nav.Link style={{ marginLeft: '10px', marginRight: '10px' }} className='txtColour' href="/Contact-Us">Help</Nav.Link>
                        {/* {LoginCondition === true ? 'Logout' : <>
                            <NavDropdown title="Login" id="nav-dropdown">
                                <NavDropdown.Item onClick={() => setLoginOpen(!LoginOpen)} eventKey="4.1">Customer Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.2">Vendor Login</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sign Up" id="nav-dropdown">
                                <NavDropdown.Item onClick={() => setSingUp(!SingUp)} eventKey="4.1">Customer Sign Up</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.2">Vendor Sign Up</NavDropdown.Item>
                            </NavDropdown>
                        </>} */}
                        <NavDropdown title="Login" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => setLoginOpen(!LoginOpen)} eventKey="4.1">Customer Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.2">Vendor Login</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sign Up" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => setSingUp(!SingUp)} eventKey="4.1">Customer Sign Up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.2">Vendor Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal />
            <SingupModal />
        </Navbar>
    );
}

export default Header;