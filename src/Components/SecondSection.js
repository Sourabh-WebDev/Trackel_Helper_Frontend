import React from 'react';
import Card from 'react-bootstrap/Card';
import WomenSalon from '../assets/img/BeautySalon.png';
import AcService from '../assets/img/AcRepair.png'
import PlumberService from '../assets/img/PlumberServices.png'
import Electrician from '../assets/img/ElectricianServices.png'
import CarWashing from '../assets/img/CarService.png'
import { useNavigate } from 'react-router';
import { Col, Row } from 'reactstrap';
import BackGrid from '../assets/img/White-Grid.png'

const SecondSection = () => {

    const navigate = useNavigate()

    const PrimaryServices = [
        {
            id: 1,
            image: WomenSalon,
            title: 'Plumber'
        },
        {
            id: 2,
            image: AcService,
            title: 'Car Servicing'
        },
        {
            id: 3,
            image: PlumberService,
            title: 'Travel & Driver'
        },
        {
            id: 4,
            image: Electrician,
            title: 'Security Guard'
        },
        {
            id: 5,
            image: CarWashing,
            title: 'Doctor'
        },
        {
            id: 6,
            image: WomenSalon,
            title: 'Medicine'
        },
        {
            id: 7,
            image: AcService,
            title: 'Day to Day Supply'
        },
        {
            id: 8,
            image: PlumberService,
            title: 'Restaurants'
        },
        {
            id: 9,
            image: Electrician,
            title: 'Nurses'
        },
        {
            id: 10,
            image: CarWashing,
            title: 'Interior Designer'
        },
        {
            id: 11,
            image: CarWashing,
            title: 'Catering'
        },
        {
            id: 12,
            image: CarWashing,
            title: 'Marriage Lawn'
        },
    ];

    return (
        <div className="bgColour text-center pt-3 pb-5">
                <div className="text-center pb-3">
                    <h1 style={{ color: '#142572' }} >Our Services</h1>
                    <h5>Get our services at minimum cost in a required time at the best deal possible with granted good work.</h5>
                </div>
            <div className='bgColour'>

                <div className="bgSecondSectionImg">
                    <Row className="g-4 pb-4">
                        {PrimaryServices.map((item, index) => (
                            <Col xs={6} md={6} lg={2} xl={2} key={index}>
                                <Card className='p-2 cardHover' style={{ height: '16rem' }}>
                                    <div className="border">
                                        <Card.Img height={150} src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* {PrimaryServices.map((item, index) => (
                        <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/serviceName')} className=' cardHover' key={item.id}>
                            <Card.Img className='img-fluid' src={item.image} />
                            <Card.Body className='bgSecondSectionServiceCard'>
                                <Card.Text >
                                    {item.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    <BsFillCaretRightFill onClick={() => navigate('/Our-All-Services')} style={{ cursor: 'pointer' }} size={50} /> */}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
