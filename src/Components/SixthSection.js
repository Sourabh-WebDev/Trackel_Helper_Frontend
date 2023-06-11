import React from 'react'
import { Card } from 'react-bootstrap';
import Slider from "react-slick";

const SixthSection = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 0.4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='text-center p-4'>
            <h2>Our Team</h2>
            <Slider {...settings} className=''>

                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Anil Kumar
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Anil Kumar
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Anil Kumar
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </div>
    )
}

export default SixthSection