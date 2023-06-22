import React, { Fragment } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const AddOfferForm = () => {
    return (
        <Fragment>
            <Row>
                <Col md={12}>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input
                            type="file"
                            name="image"
                            id="image"
                        // onChange={handleImageChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="disc">Discription</Label>
                        <Input type='textarea' name='disc' placeholder='Discription' />
                    </FormGroup>
                </Col>
                <Button className='text-blue bg-primary'>Submit</Button>
            </Row>
        </Fragment>
    )
}

export default AddOfferForm