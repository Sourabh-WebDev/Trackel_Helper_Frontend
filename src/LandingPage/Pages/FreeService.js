import React from 'react'
import { Container } from '@mui/material'
import { Col, Row } from 'reactstrap'

const FreeService = () => {
    return (
        <div>

            <Container maxWidth='sm' className='w-100 p-1'>
                <Row>
                    <Col xs={6} lg={8} xl={8}>
                        <ul className="list-group list-group-light list-group-small text-center">
                            <li className="list-group-item px-3"><b>Service Name</b></li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Service Name 1</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Service Name 2</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Service Name 3</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Service Name 4</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Extera Service Name 1</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3">Extera Service Name 2</li>
                        </ul>

                    </Col>
                    <Col xs={6} lg={4} xl={4}>
                        <ul className="list-group list-group-light list-group-small text-center">
                            <li className="list-group-item px-3"><b>Service Status</b></li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                            <hr className='m-0' />
                            <li className="list-group-item px-3 text-danger">Pending</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FreeService