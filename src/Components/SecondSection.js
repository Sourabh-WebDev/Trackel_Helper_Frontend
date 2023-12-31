import React from 'react';
import Card from 'react-bootstrap/Card';
import WomenSalon from '../assets/img/BeautySalon.png';
import AcService from '../assets/img/AcRepair.png'
import PlumberService from '../assets/img/PlumberServices.png'
import Electrician from '../assets/img/ElectricianServices.png'
import CarWashing from '../assets/img/CarService.png'
import CarServicing from '../assets/img/CarServicing.png'
import TravelDriver from '../assets/img/Travel&Driver.png'
import SecurityGuard from '../assets/img/SecurityGuard.png'
import Medicine from '../assets/img/Medicine.png'
import Doctors from '../assets/img/Doctors.png'
import DayTodaySupply from '../assets/img/DayTodaySupply.png'
import ResturantService from '../assets/img/ResturantService.png'
import InteriorDesigner from '../assets/img/InteriorDesigner.png'
import Catering from '../assets/img/Catering.png'
import MarriageLawn from '../assets/img/MarriageLawn.png'
import Nurses from '../assets/img/Nurses.png'
import { useNavigate } from 'react-router';
import { Col, Row } from 'reactstrap';
import { API_URL } from '../config';
import { Typography } from '@mui/material';

const SecondSection = ({ data }) => {

    const navigate = useNavigate()


    const PrimaryServices = [
        {
            id: 1,
            image: PlumberService,
            serviceName: 'Plumber'
        },
        {
            id: 2,
            image: CarServicing,
            serviceName: 'Car Servicing'
        },
        {
            id: 3,
            image: TravelDriver,
            serviceName: 'Travel & Driver'
        },
        {
            id: 4,
            image: SecurityGuard,
            serviceName: 'Security Guard'
        },
        {
            id: 5,
            image: Doctors,
            serviceName: 'Doctor'
        },
        {
            id: 6,
            image: Medicine,
            serviceName: 'Medicine'
        },
        {
            id: 7,
            image: DayTodaySupply,
            serviceName: 'Day to Day Supply'
        },
        {
            id: 8,
            image: ResturantService,
            serviceName: 'Restaurants'
        },
        {
            id: 9,
            image: Nurses,
            serviceName: 'Nurses'
        },
        {
            id: 10,
            image: InteriorDesigner,
            serviceName: 'Interior Designer'
        },
        {
            id: 11,
            image: Catering,
            serviceName: 'Catering'
        },
        {
            id: 12,
            image: MarriageLawn,
            serviceName: 'Marriage Lawn'
        },
    ];

    const HandleServiceSubmit = (serviceName) => {
        const query = new URLSearchParams({ serviceName: serviceName })
        navigate(`/ServicePage?${query}`)
    }


    return (
        <div id='services' className="bgColour text-center pt-3 pb-4">
            <div className="text-center pb-3">
                <Typography variant='h4' sx={{ color: '#142572' }} fontWeight={800}>Our Services</Typography>
                <Typography variant='h6' fontWeight={700} className='sketchFamily'>Get our services at minimum cost in a required time at the best deal possible with granted good work.</Typography>
            </div>
            <div className='bgColour'>
                <div className="bgSecondSectionImg">
                    <Row className="g-4 pb-4">
                        {/* {data.data && data.data.map((item, index) => (
                            <Col xs={6} md={6} lg={data.data && data.data.length >= 5 ? 2 : 4} xl={data.data && data.data.length >= 5 ? 2 : 4} style={{ maxWidth: '100%' }} key={index}>
                                <Card className='p-2 cardHover' onClick={() => HandleServiceSubmit(item.serviceName)} style={{ height: '16rem' }}>
                                    <div className="border">
                                        <img className='w-100' height={150} src={API_URL + "/uploads/" + item.icon} />
                                        <Card.Body>
                                            <Card.Title>{item.serviceName}</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))} */}
                        {PrimaryServices.map((item, index) => (
                            <Col xs={6} md={6} lg={2} xl={2} style={{ maxWidth: '100%' }} key={index}>
                                <Card className='p-2 cardHover' onClick={() => HandleServiceSubmit(item.serviceName)} style={{ height: '16rem' }}>
                                    <div className="border">
                                        <img className='w-100' height={150} src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='sketchFamily'>{item.serviceName}</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
