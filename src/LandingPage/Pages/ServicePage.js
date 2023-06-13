import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Button, Col, Row } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import OfferSlider from './OfferSlider';
import Done from '../../assets/gif/check-mark-verified-unscreen.gif';

const ServicePage = () => {
    // State variables
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [requestDone, setRequestDone] = useState(false);

    // Array of images for the slideshow
    const images = [
        'https://img.freepik.com/free-photo/makeup-artist-applying-makeup-by-brush_329181-1926.jpg?w=900&t=st=1686553614~exp=1686554214~hmac=b6999330f17fb3affe417d0f9954f419042532b60ff4670f8f90de6ec11cfd50',
        'https://img.freepik.com/free-photo/top-view-beauty-products-with-copy-space_23-2148620089.jpg?w=1380&t=st=1686553823~exp=1686554423~hmac=b059f1ede0f0ae5c8f473b1598938b1b671eb81771209bd3aa678d877fcd22bb',
        'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1686385570~exp=1686386170~hmac=1df49504b9b4ea54e4047b2e1240dc5074712a66bd501940f09d09531eab10fd',
        'https://img.freepik.com/free-photo/cosmetologist-wiping-make-up-lady_23-2148398511.jpg?w=1380&t=st=1686553886~exp=1686554486~hmac=2eeaab3a88eaa23f4142644857c2b6486fbd108924e68c68d4487c4708e45125'
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
