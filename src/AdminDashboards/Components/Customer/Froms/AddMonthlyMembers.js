import React, { Fragment } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const AddMonthlyMembers = () => {
    return (
        <Fragment>

            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label >Customer Name</Label>
                            <Input placeholder='Enter Name' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >Services</Label>
                            <Input placeholder='Enter number of services' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >T.Service</Label>
                            <Input placeholder='Enter Type of Service' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >This Month Bill</Label>
                            <Input placeholder='Enter This Month Bill' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >Last Pay Date</Label>
                            <Input type='date' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label >Remark</Label>
                            <Input type='text' placeholder='Enter Remark' />
                        </FormGroup>
                    </Col>
                    <Button className='bg-primary text-white'>Submit</Button>
                </Row>
            </Form>
        </Fragment>
    )
}

export default AddMonthlyMembers