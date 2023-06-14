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
            <h1 className='txtColour'>Our Team</h1>
            <Slider {...settings} className=''>

                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                    <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                    <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Anil Kumar
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                    <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                    <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Anil Kumar
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='d-flex justify-content-around align-items-center py-2'>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                        <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Sourabh Verma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                        <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Abhishek Sharma
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome '>
                    <Card.Img className='img-fluid' variant="top" src="https://static01.nyt.com/images/2014/04/19/your-money/19stewart/19stewart-superJumbo.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Suman Singh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '10rem' }} className='SixthSectionAwesome mt-5'>
                    <Card.Img className='img-fluid' variant="top" src="https://i.ytimg.com/vi/Y7B_k4K-o4U/maxresdefault.jpg" />
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