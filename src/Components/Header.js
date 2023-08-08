import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/svg/we_logo.png';
import Swal from 'sweetalert2';
import { NavDropdown } from 'react-bootstrap';
import { UseStateManager } from '../Context/StateManageContext';
import { LoginModal, SingupModal } from './Modal';
import { useSelector } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    const LoginResult = useSelector((pre) => pre.GetLogInReducers);
    const { LoginOpen, setLoginOpen, SingUp, setSingUp } = UseStateManager();

    const GetLogOut = () => {
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logout Successfully',
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/')
    };

    useEffect(() => {
        if (LoginResult.isSuccess === true) {
            setLoginOpen(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log In Successfully',
                showConfirmButton: false,
                timer: 1500,
            });
            setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
        } else if (LoginResult.isSuccess === false) {
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                title: 'Ooops ! Log In failed',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }, [LoginResult]);

    return (
        <Navbar className='bgColour' expand='lg'>
            <Container fluid>
                <Navbar.Brand className='animate__animated animate__flipInY' href='/'>
                    <img src={Logo} alt='MainLogo' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='ml-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>

                        <Nav.Link className='txtColour' href='#action1'>Register As A Professional</Nav.Link>
                        <Nav.Link className='txtColour' to='/About-Us'>About Us</Nav.Link>
                        <Nav.Link className='txtColour' href='/Our-All-Services'>Services</Nav.Link>
                        <Nav.Link className='txtColour' href='/Contact-Us'>Help</Nav.Link>
                        {currentUser !== null ? <>
                            <Nav.Link className='txtColour' href={`/YourPrifile/${currentUser._id}`} >{currentUser.name}</Nav.Link>
                            <Nav.Link className='txtColour' ><Logout className='cursor-p' onClick={() => GetLogOut()} /></Nav.Link>
                        </> :
                            <>
                                <NavDropdown title='Login' id='nav-dropdown'>
                                    <NavDropdown.Item onClick={() => setLoginOpen(!LoginOpen)} eventKey='4.1'>Customer Login</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => navigate('/admin')} eventKey='4.2'>Office Login</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal />
            <SingupModal />
        </Navbar>
    );
}

export default Header;
