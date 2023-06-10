import React from 'react';
import Card from 'react-bootstrap/Card';
import WomenSalon from '../assets/img/BeautySalon.png';
import AcService from '../assets/img/AcRepair.png'
import PlumberService from '../assets/img/PlumberServices.png'
import Electrician from '../assets/img/ElectricianServices.png'
import CarWashing from '../assets/img/CarService.png'
import { Col, Row } from 'reactstrap';

const SecondSection = () => {
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
        <div className="bgColour">
            <div className='bgColour p-5'>
                <div className="text-center">
                    <h1 style={{ color: '#142572' }} >Our Prime Services</h1>
                    <p>Get our services at minimum cost in a required time at the best deal possible with granted good work.</p>
                </div>

                <div className="bgSecondSectionImg">
                    {PrimaryServices.map((item, index) => (
                        <Card className=' cardHover' key={item.id}>
                            <Card.Img className='img-fluid' src={item.image} />
                            <Card.Body className='bgSecondSectionServiceCard'>
                                <Card.Text >
                                    {item.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    {/* <img className='img-fluid' src={LeftSideShowGirl} alt="ADIMG" /> */}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
