import React from 'react'
import { Col, Row } from 'reactstrap'
import Services from '../assets/img/Subscription.png'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'

const FourthSections = () => {
    return (
        <div style={{ background: '#99DBF5' }}>
            <div style={{ background: '#eedc30' }} className="text-center pt-3 pb-2">
                <h1 className='txtColour' >Our Best Plans</h1>
            </div>
            {/* <Row>
                <Col xs={12} sm={12} md={6} xl={6}>
                    <img className='img-fluid' src={Services} />
                </Col>
                <Col className='d-flex align-middle' xs={12} sm={12} md={6} xl={6}>
                    <div className="d-flex align-items-center">
                        <div>
                            <h3 style={{ color: '#3d5ce8' }}>MONTHLY PLAN STARTING</h3>
                            <div>
                                <ul>
                                    <li>4 FULL CAR WASHES ( INTERIOR & EXTERIOR )</li>
                                    <li>11 FREE DUSTING</li>
                                </ul>
                            </div>
                            <h3 style={{ color: '#3d5ce8' }}>ONE TIME WASH STARTING</h3>
                            <div>
                                <ul>
                                    <li>1 FULL CAR WASH</li>
                                    <li>1 FREE DUSTING ( WITHIN 1 WEEK )</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row> */}

            <Grid container spacing={3} paddingY={2} justifyContent="center">
                <Grid item>
                    <Card className='planCard'>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-vector/time-management-concept-illustration_114360-2499.jpg?w=740&t=st=1692376457~exp=1692377057~hmac=86b9cb5e694adb37beacb914bdfd7f4604c2e2ca3cac6dbb0ab08182057bd57b"
                            alt="Card 2 Image"
                        />
                        <CardContent>
                            <h3>ONE TIME WASH STARTING</h3>
                            <hr style={{ backgroundColor: '#eedc30', width: '300px', height: '1px', margin: '10px auto', color: '#eedc30' }} />
                            <p style={{ fontFamily: 'Lumanosimo !important' }}>
                                <ul>
                                    <li>1 FULL CAR WASH</li>
                                    <li>1 FREE DUSTING ( WITHIN 1 WEEK )</li>
                                </ul>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className='planCard'>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/top-view-calendar-keyboard_23-2148693410.jpg?w=1060&t=st=1692376586~exp=1692377186~hmac=de37e08c71a486b97c408b65bb023741a25302948d0e3e09e42397bbfd86d600"
                            alt="Card 1 Image"
                        />
                        <CardContent>
                            <div className="text-center">
                                <h3>MONTHLY PLAN STARTING</h3>
                                <hr style={{ backgroundColor: '#eedc30', width: '300px', height: '1px', margin: '10px auto', color: '#eedc30' }} />
                            </div>
                            <p>
                                <ul>
                                    <li>4 FULL CAR WASHES ( INTERIOR & EXTERIOR )</li>
                                    <li>11 FREE DUSTING</li>
                                </ul>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default FourthSections