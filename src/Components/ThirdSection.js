import React from 'react'
import Card from 'react-bootstrap/Card';
import WomenSalon from '../assets/img/BeautySalon.png';
import ProServices from '../assets/img/ProffServices.png'
import FastService from '../assets/img/FastService.png'
import BestQuality from '../assets/img/BestQuality.png'
import AllDaysServices from '../assets/img/24l7Services.png'
import ServiceDirection from '../assets/img/ServiceDirection.png'
import { Col, Row } from 'reactstrap';

const ThirdSection = () => {
    const Whychooseus = [
        {
            id: 1,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 2,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 3,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 4,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 5,
            image: WomenSalon,
            title: 'Women Salon'
        }
    ];
    return (
        <>
            <Row className='m-0'>
                {/* Left Column */}
                <Col xl='4'>
                    <div className="d-flex justify-content-center align-items-center p-5" >
                        <div className='ThirdSectionRotatedLeft'>
                            <div className="d-flex">
                                <Card className='ThirdSectionCard'>
                                    <Card.Img className='img-fluid' src={ProServices} />
                                    <Card.Body className=''>
                                        <Card.Title >EXPERIENCED PROFESSIONALS</Card.Title>
                                        <Card.Text >
                                            Choose us always because we know our work well.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="d-flex">
                                <Card className='ThirdSectionCard'>
                                    <Card.Img className='img-fluid' src={BestQuality} />
                                    <Card.Body className=''>
                                        <Card.Title>QUALITY GUARANTEE</Card.Title>
                                        <Card.Text >
                                            We guarantee you recived best services.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* Right Column */}
                <Col xl='4' className='text-center'>
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '800px' }}>
                        <div>
                            <img src={ServiceDirection} />
                            <h2>WHY CHOOSE US</h2>
                            <p>Choose us because we know how to do and what to do within right time with right working skill.</p>
                        </div>
                    </div>
                </Col>
                <Col xl='4' className='text-center'>
                    <div className="d-flex justify-content-center align-items-center p-5" >
                        <div className='ThirdSectionRotatedRight'>
                            <div className="d-flex">
                                <Card className='ThirdSectionCard'>
                                    <Card.Img className='img-fluid' src={FastService} />
                                    <Card.Body className=''>
                                        <Card.Title>FAST WORK</Card.Title>
                                        <Card.Text >
                                            We assure you recive very fast service and you get all the things done within no time.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="d-flex">
                                <Card className='ThirdSectionCard'>
                                    <Card.Img className='img-fluid' src={AllDaysServices} />
                                    <Card.Body className=''>
                                        <Card.Title>12/7 SERVICE AVAILABLE</Card.Title>
                                        <Card.Text >
                                            We are 12*7 available to you and ready to help you out with your home appliances problem.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ThirdSection