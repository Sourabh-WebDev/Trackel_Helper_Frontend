import React from 'react'
import { Col, Row } from 'reactstrap'
import Services from '../assets/img/Subscription.png'

const FourthSections = () => {
    return (
        <div style={{background:'#99DBF5'}}>
            <div className="text-center pt-4">
                <h1 className='txtColour' >Our Best Plans</h1>
            </div>
            <Row>
                <Col xs={12} sm={12} md={6} xl={6}>
                    <img className='img-fluid' src={Services} />
                </Col>
                <Col xs={12} sm={12} md={6} xl={6}>
                    <div className="d-flex align-items-center justify-content-center mt-5">
                        <div>
                            <h3 className='txtColour'>MONTHLY PLAN STARTING</h3>
                            <div>
                                <ul>
                                    <li>4 FULL CAR WASHES ( INTERIOR & EXTERIOR )</li>
                                    <li>11 FREE DUSTING</li>
                                </ul>
                            </div>
                            <h3 className='txtColour'>ONE TIME WASH STARTING</h3>
                            <div>
                                <ul>
                                    <li>1 FULL CAR WASH</li>
                                    <li>1 FREE DUSTING ( WITHIN 1 WEEK )</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FourthSections