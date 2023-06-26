import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Button, Col, Row } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import OfferSlider from './OfferSlider';
import Done from '../../assets/gif/check-mark-verified-unscreen.gif';
import PlumberBanner from '../../assets/img/PlumberBanner.jpg'
import CarWashingBanner from '../../assets/img/CarWashingBanner.jpg'
import SalonBanner from '../../assets/img/SalonBanner.jpg'
import ElectricBanner from '../../assets/img/ElectricBanner.jpg'

const ServicePage = () => {
    // State variables
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [requestDone, setRequestDone] = useState(false);

    // Array of images for the slideshow
    const images = [
        PlumberBanner,
        CarWashingBanner,
        SalonBanner,
        ElectricBanner
    ];

    useEffect(() => {
        // Function to handle the timer
        const timer = setInterval(() => {
            // Increment the current image index
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change the image every 5 seconds

        // Cleanup the timer when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Navbar />

            <section>
                {/* Navbar section */}

                <Header />

                {/* Image slideshow section */}
                <div
                    style={{
                        backgroundImage: `linear-gradient(62deg, #14257289 100%, #eedb30a8 0%), url(${images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '500px',
                    }}
                    className="container-fluid"
                >
                    <div className="container" style={{ display: 'grid', placeItems: 'center', height: '500px' }}>
                        <Card className="bg-transparent text-center ServiceBanner p-2">
                            <h1 className='display-3 font-weight-bold text-warning'>Women Salon</h1>
                        </Card>
                    </div>
                </div>
            </section>

            <section>
                {/* First service section */}
                <div className="container-fluid">
                    <Row>
                        <Col xl={6} style={{ background: '#142572' }} className='p-5 text-center'>
                            <h2 style={{ color: '#eedc30' }}><em>Facials</em></h2>
                            <div className='text-white border' style={{ display: 'grid', placeItems: 'center', height: '300px' }}>
                                <p>"We provide the best facial services ever, and we highly recommend trying it once to experience our affordable and convenient at-home service."</p>

                                {/* Render different buttons based on the state */}
                                {requestDone ?
                                    <Button color='flat-primary' onClick={() => setRequestDone(false)} outline>
                                        <img src={Done} width={25} alt="" />
                                    </Button> :
                                    <Button onClick={() => setRequestDone(true)}>Service Request</Button>
                                }
                            </div>
                        </Col>
                        <Col xl={6} className='p-0'>
                            <img className='img-fluid ServiceBannerS' src="https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?w=1060&t=st=1686489226~exp=1686489826~hmac=2e19cf95f0c7845fad1257520e0eea10e6371084b662b734052402cf961f351a" alt="" />
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                {/* Second service section */}
                <div className="container-fluid">
                    <Row>
                        <Col xl={6} className='p-0'>
                            <img className='img-fluid ServiceBanner' src="https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?w=900&t=st=1686553216~exp=1686553816~hmac=0b1dadb1b646573d63ed387baa6906f266ad604f84855b8162585ca96429f136" alt="" />
                        </Col>
                        <Col xl={6} className='text-center bgColour p-5'>
                            <h2 className='txtColour'><em>Hair Treatments</em></h2>
                            <div className='border' style={{ display: 'grid', placeItems: 'center', height: '300px' }}>
                                <p>"We provide the best facial services ever, and we highly recommend trying it once to experience our affordable and convenient at-home service."</p>

                                {/* Render different buttons based on the state */}
                                {requestDone ?
                                    <Button color='flat-primary' onClick={() => setRequestDone(false)} outline>
                                        <img src={Done} width={25} alt="" />
                                    </Button> :
                                    <Button onClick={() => setRequestDone(true)}>Service Request</Button>
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                {/* Slider section */}
                <div style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/492/842/325/sparkle-wallpaper-preview.jpg)' }} className="container-fluid bgSeventhSectionImg">
                    <OfferSlider />
                </div>
            </section>

            <section>
                {/* Footer section */}
                <div className="container-fluid">
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default ServicePage;
