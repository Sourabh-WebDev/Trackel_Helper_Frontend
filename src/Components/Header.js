import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/svg/we_logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar className='bgColour' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="MainLogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='txtColour' href="#action1">Register As A Professional</Nav.Link>
                        <Nav.Link className='txtColour' href="#action2">Help</Nav.Link>
                        <Nav.Link className='txtColour' > <Link to={'/dashboard/overview'}> Login / Sign Up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;