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

const SecondSection = () => {

    const navigate = useNavigate()

    const PrimaryServices = [
        {
            id: 1,
            image: PlumberService,
            title: 'Plumber'
        },
        {
            id: 2,
            image: CarServicing,
            title: 'Car Servicing'
        },
        {
            id: 3,
            image: TravelDriver,
            title: 'Travel & Driver'
        },
        {
            id: 4,
            image: SecurityGuard,
            title: 'Security Guard'
        },
        {
            id: 5,
            image: Doctors,
            title: 'Doctor'
        },
        {
            id: 6,
            image: Medicine,
            title: 'Medicine'
        },
        {
            id: 7,
            image: DayTodaySupply,
            title: 'Day to Day Supply'
        },
        {
            id: 8,
            image: ResturantService,
            title: 'Restaurants'
        },
        {
            id: 9,
            image: Nurses,
            title: 'Nurses'
        },
        {
            id: 10,
            image: InteriorDesigner,
            title: 'Interior Designer'
        },
        {
            id: 11,
            image: Catering,
            title: 'Catering'
        },
        {
            id: 12,
            image: MarriageLawn,
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
