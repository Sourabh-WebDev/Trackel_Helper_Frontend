import * as React from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../../Context/userAuthContext';
import { useState } from 'react';
import { roles } from '../../../config';
import { Formik } from 'formik';
import { useUserRoleContext } from '../../../Context/RolesContext';


function AdminSignIn() {

    const location = useLocation()
    const navigate = useNavigate()
    const [selectedRole, setSelectedRole] = useState(roles.super);



    const { UserRoleCalled } = useUserRoleContext();

    const { currentUser, setCurrentUser, getUserLogIn } = useAuth();

    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();

    if (currentUser) {
        if (location.pathname === '/admin') {
            return <Navigate to="/admin/dashboard" />;
        }
        return <Outlet />;
    }

    // formdara 
    const LoginData = {
        email: "",
        password: "",
    }

    const OnLoginSubmit = async (formdata, { resetForm }) => {
        sessionStorage.setItem("role", selectedRole)
        UserRoleCalled(selectedRole);
        getUserLogIn(formdata, selectedRole).then(() => {
            resetForm();
        })
    }



    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {/* role select */}
                    <Box>
                        <Button className='w-50 text-nowrap' onClick={() => setSelectedRole(roles.super)} variant={selectedRole === roles.super ? "contained" : 'outlined'} color='primary'>Super Admin Login</Button>
                        <Button className='w-50 text-nowrap' onClick={() => setSelectedRole(roles.admin)} variant={selectedRole === roles.admin ? "contained" : 'outlined'} color='primary'>Admin Login</Button>
                        <Button className='w-50 text-nowrap' onClick={() => setSelectedRole(roles.supervisor)} variant={selectedRole === roles.supervisor ? "contained" : 'outlined'} color='primary'>Supervisor Login</Button>
                        <Button className='w-50 text-nowrap' onClick={() => setSelectedRole(roles.service)} variant={selectedRole === roles.service ? "contained" : 'outlined'} color='primary'>Service Provider Login</Button>
                        <Button className='w-50 text-nowrap' onClick={() => setSelectedRole(roles.office)} variant={selectedRole === roles.office ? "contained" : 'outlined'} color='primary'>Back Office Login</Button>
                    </Box>

                    <Formik initialValues={LoginData} onSubmit={OnLoginSubmit} enableReinitialize>
                        {({ values, handleChange, handleSubmit }) => (
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Formik>

                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AdminSignIn;
