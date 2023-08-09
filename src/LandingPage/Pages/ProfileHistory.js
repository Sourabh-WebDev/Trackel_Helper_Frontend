import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import axios from 'axios'
import { API_URL } from '../../config'
import { BugReportTwoTone } from '@mui/icons-material'
import { Button } from '@mui/material'
import MyProfile from './MyProfile'


const ProfileHistory = () => {

    const { id } = useParams()

    const [serviceData, setServiceData] = useState([]);


    useEffect(() => {
        axios.get(`${API_URL}/customer/getbyid/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.data)
                    setServiceData(response.data.data);
                    // console.log(response.data) // Assuming the fetched data structure has a 'serviceHistory' property
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);


    // console.log(serviceData)


    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

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
                        variant={active === '1' && 'outlined'}
                        sx={{ color: active === '1' ? '#eedc30' : '#fff' }} >My Profile</Button>
                    <Button active={active === '2'}
                        onClick={() => {
                            toggle('2')
                        }}
                        sx={{ color: 'white' }} >Edit Profile</Button>
                    {serviceData.freeServices && serviceData.freeServices.length === 0 ? null : <Button active={active === '3'}
                        onClick={() => {
                            toggle('3')
                        }}
                        sx={{ color: 'white' }} >Free Services</Button>}
                    <Button active={active === '4'}
                        onClick={() => {
                            toggle('4')
                        }}
                        sx={{ color: 'white' }} >Manage Post</Button>
                    <Button active={active === '5'}
                        onClick={() => {
                            toggle('5')
                        }}
                        sx={{ color: 'white' }} >Logout</Button>
                </div>
            </div>
            {active === '1' ? <MyProfile serviceData={serviceData} /> : 'text'}

            <div className='profilePadding'>
                <Footer />
            </div>
        </div >
    )
}

export default ProfileHistory