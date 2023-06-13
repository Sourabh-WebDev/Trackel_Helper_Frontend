import React from 'react'
import Card from 'react-bootstrap/Card';
import ProServices from '../assets/img/ProffServices.png'
import FastService from '../assets/img/FastService.png'
import BestQuality from '../assets/img/BestQuality.png'
import AllDaysServices from '../assets/img/24l7Services.png'
import ServiceDirection from '../assets/img/ServiceDirection.png'
import { Button, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const ThirdSection = () => {

    const navigate = useNavigate()

    return (
        <>
            <Row className='m-0'>
                {/* Left Column */}
                <Col xl='4'>
                    <div className="d-flex justify-content-center align-items-center p-5" >
                        <div className='ThirdSectionRotatedLeft'>
                            <div className="d-flex animate__animated animate__slideInLeft animate__delay-2s">
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
                            <div className="d-flex animate__animated animate__slideInLeft animate__delay-2s">
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
                    <div className='d-flex justify-content-center align-items-center animate__animated animate__jackInTheBox animate__delay-2s' style={{ height: '800px' }}>
                        <div>
                            <img className='img-fluid' src={ServiceDirection} />
                            <h1 className='txtColour'>WHY CHOOSE US</h1>
                            <p>"DELIVERIING BEST QUALITY SERVICES, SECURING YOUR SMILE."</p>
                            <p> For we care! So that you have all your time in being more responsible for your people, and leave the rest to us for attending to!...</p>
                            <Button onClick={() => navigate('/Why-Choose-Us')} className='bgColour txtColour'>Read More</Button>
                        </div>
                    </div>
                </Col>
                <Col xl='4' className='text-center'>
                    <div className="d-flex justify-content-center align-items-center p-5" >
                        <div className='ThirdSectionRotatedRight'>
                            <div className="d-flex animate__animated animate__slideInRight animate__delay-2s">
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
                            <div className="d-flex animate__animated animate__slideInRight animate__delay-2s">
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