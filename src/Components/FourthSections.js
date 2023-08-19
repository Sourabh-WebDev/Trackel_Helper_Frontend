import React from 'react'
import { Col, Row } from 'reactstrap'
import Services from '../assets/img/Subscription.png'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { Card, CardContent, CardMedia, Grid } from '@mui/material'

const FourthSections = () => {
    return (
        <div style={{ background: '#99DBF5' }}>
            <div style={{ background: '#eedc30' }} className="text-center pt-3 pb-2">
                <h1 className='txtColour' >Our Best Plans</h1>
            </div>

            <Grid container spacing={3} paddingY={2} justifyContent="center">
                <Grid item>
                    <Card className='planCard' sx={{ minHeight: 400, maxWidth: 400 }}>
                        <div className="text-center p-3">
                            <AiOutlineClockCircle color='#3d5ce8' size={100} />
                        </div>
                        <CardContent>
                            <div className="text-center">
                                <h3 style={{ color: '#eedc30' }}>ONE TIME WASH STARTING</h3>
                                <hr style={{ backgroundColor: '#eedc30', width: '300px', height: '1px', margin: '10px auto', color: '#eedc30' }} />
                            </div>
                            <p className='p-3'>
                                <ul>
                                    <li style={{ color: '#3d5ce8' }} >1 FULL CAR WASH</li>
                                    <li style={{ color: '#3d5ce8' }} className='pt-4'>1 FREE DUSTING ( WITHIN 1 WEEK )</li>
                                </ul>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className='planCard' sx={{ minHeight: 400, maxWidth: 400 }}>
                        <div className="text-center p-3">
                            <AiOutlineCalendar color='#3d5ce8' size={100} />
                        </div>
                        <CardContent>
                            <div className="text-center">
                                <h3 style={{ color: '#eedc30' }}>MONTHLY PLAN STARTING</h3>
                                <hr style={{ backgroundColor: '#eedc30', width: '300px', height: '1px', margin: '10px auto', color: '#eedc30' }} />
                            </div>
                            <p className='p-3'>
                                <ul>
                                    <li style={{ color: '#3d5ce8' }} >4 FULL CAR WASHES ( INTERIOR & EXTERIOR )</li>
                                    <li style={{ color: '#3d5ce8' }} className='pt-4'>11 FREE DUSTING</li>
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