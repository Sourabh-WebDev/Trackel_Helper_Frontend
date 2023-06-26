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
            title: 'Women Salon'
        },
        {
            id: 2,
            image: AcService,
            title: 'AC Services'
        },
        {
            id: 3,
            image: PlumberService,
            title: 'Plumber Services'
        },
        {
            id: 4,
            image: Electrician,
            title: 'Electric Services'
        },
        {
            id: 5,
            image: CarWashing,
            title: 'Car Washing'
        }
    ];

    return (
        <div className="bgColour text-center">
            <div className='bgColour py-5'>
                <div className="text-center">
                    <h1 style={{ color: '#142572' }} >Our Prime Services</h1>
                    <p>Get our services at minimum cost in a required time at the best deal possible with granted good work.</p>
                </div>

                <div style={{ backgroundImage: `url(${BackGrid})` }} className="bgSecondSectionImg">
                    <Row xs={1} md={1} lg={3} xl={5} className="g-4 pb-4">
                        {PrimaryServices.map((item, index) => (
                            <Col key={index}>
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
