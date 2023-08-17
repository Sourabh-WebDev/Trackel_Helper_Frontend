import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import axios from 'axios'
import { API_URL } from '../../config'
import { Button } from '@mui/material'
import MyProfile from './MyProfile'
import EditProfile from './EditProfile'
import ManagePost from './ManagePost'
import Swal from 'sweetalert2'
import FreeService from './FreeService'


const ProfileHistory = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [serviceData, setServiceData] = useState([]);
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    useEffect(() => {
        axios.get(`${API_URL}/customer/getbyid/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.data)
                    setServiceData(response.data.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);


    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

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

    return (
        <div>
            <Navbar />
            <Header />
            <div>
                <div style={{ background: '#3d5ce8', borderRadius: '0px 0px 50px 50px', padding: '15px', textAlign: 'center' }}>
                    <Button active={active === '1'}
                        onClick={() => {
                            toggle('1')
                        }}
                        sx={{ color: active === '1' ? '#eedc30' : '#fff' }} >My Profile</Button>
                    <Button active={active === '2'}
                        onClick={() => {
                            toggle('2')
                        }}
                        sx={{ color: active === '2' ? '#eedc30' : '#fff' }} >Edit Profile</Button>
                    {serviceData.freeServices && serviceData.freeServices.length === 1 ? null : <Button active={active === '3'}
                        onClick={() => {
                            toggle('3')
                        }}
                        sx={{ color: active === '3' ? '#eedc30' : '#fff' }} >Free Services</Button>}
                    <Button active={active === '4'}
                        onClick={() => {
                            toggle('4')
                        }}
                        sx={{ color: active === '4' ? '#eedc30' : '#fff' }} >Manage Post</Button>
                    <Button
                        onClick={() => GetLogOut()}
                        sx={{ color: '#fff' }} >Logout</Button>
                </div>
            </div>
            {
                active === '1' ? <MyProfile serviceData={serviceData} /> :
                    active === '2' ? <EditProfile /> :
                        active === '3' ? <FreeService /> :
                            active === '4' ? <ManagePost /> : null
            }

            <div className='profilePadding'>
                <Footer />
            </div>
        </div >
    )
}

export default ProfileHistory