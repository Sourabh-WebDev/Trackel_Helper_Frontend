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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';

function Header() {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    const LoginResult = useSelector((pre) => pre.GetLogInReducers);
    const { LoginOpen, setLoginOpen } = UseStateManager();

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
    }, [LoginResult, setLoginOpen]);



    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navbar className='bgColour' expand='lg'>
            <Container fluid>
                <Navbar.Brand className='animate__animated animate__flipInY' href='/'>
                    <img src={Logo} alt='MainLogo' />
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='ml-auto my-2 my-lg-0 text-center'>

                        {/* <Nav.Link className='txtColour' href='#action1'>Register As A Professional</Nav.Link> */}
                        <Nav.Link className='txtColour' href='/'><b>Home</b></Nav.Link>
                        <Nav.Link className='txtColour' href='/About-Us'><b>About Us</b></Nav.Link>
                        {/* <Nav.Link className='txtColour' href='/'><b>Services</b></Nav.Link> */}
                        <Nav.Link className='txtColour' href='/Contact-Us'><b>Help</b></Nav.Link>
                        <div className="mega-menu">
                            <Button variant='text' sx={{ pt: 1 }} onClick={toggleMenu}>
                                <b>Services</b>
                                <ArrowDropDownIcon />
                            </Button>
                            {menuOpen && (
                                <Paper sx={{ position: 'absolute', right: '5px', zIndex: '1200' }} className="dropdown-content">
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} className="column">
                                            <u> <Typography variant="subtitle1" fontWeight={700}>Services</Typography></u>
                                            <div className="d-flex flex-column p-2 text-left">
                                                <Link to={`/ServicePage?serviceName=Plumber`}><Typography variant='subtitle2'>Plumber</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Car Servicing`}><Typography variant='subtitle2'>Car Servicing</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Travel & Driver`}><Typography variant='subtitle2'>Travel & Driver</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Security Guard`}><Typography variant='subtitle2'>Security Guard</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Doctor`}><Typography variant='subtitle2'>Doctor</Typography></Link>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className="column">
                                            {/* <Typography variant="h6">Category 2</Typography> */}
                                            <div className='d-flex flex-column p-2 text-left'>
                                                <Link to={`/ServicePage?serviceName=Medicine`}><Typography variant='subtitle2'>Medicine</Typography></Link>
                                                <Link className='text-nowrap' to={`/ServicePage?serviceName=Day to Day Supply`}><Typography variant='subtitle2'>Day to Day Supply</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Restaurants`}><Typography variant='subtitle2'>Restaurants</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Nurses`}><Typography variant='subtitle2'>Nurses</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Interior Designer`}><Typography variant='subtitle2'>Interior Designer</Typography></Link>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className="column">
                                            {/* <Typography variant="h6">Category 3</Typography> */}
                                            <div className="d-flex flex-column p-2 text-left">

                                                <Link to={`/ServicePage?serviceName=Catering`}><Typography variant='subtitle2'>Catering</Typography></Link>
                                                <Link to={`/ServicePage?serviceName=Marriage Lawn`}><Typography variant='subtitle2'>Marriage Lawn</Typography></Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )}
                        </div>
                        {currentUser !== null ? <>
                            <Nav.Link className='txtColour' href={`/YourProfile/${currentUser._id}`} >{currentUser.name}</Nav.Link>
                            <Nav.Link className='txtColour' ><Logout className='cursor-p' onClick={() => GetLogOut()} /></Nav.Link>
                        </> :
                            <>
                                <NavDropdown className='font-weight-bold' title='Login' id='nav-dropdown'>
                                    <NavDropdown.Item onClick={() => setLoginOpen(!LoginOpen)} eventKey='4.1'>Customer Login</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => navigate('/admin')} eventKey='4.2'>Office Login</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                        <Nav.Link className='txtColour'></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginModal />
            <SingupModal />
        </Navbar >
    );
}

export default Header;
