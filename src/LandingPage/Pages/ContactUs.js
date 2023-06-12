import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';
import { TbAirConditioning } from "react-icons/tb";
import { MdContentCut, MdElectricBolt, MdLocalCarWash, MdPlumbing } from "react-icons/md";
import { Col, Row } from 'reactstrap';

const ContactUs = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?w=1060&t=st=1686385486~exp=1686386086~hmac=789297921380da93418cf1fb9293e187296424dc91b85157789f83be61775c2a',
        'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg?w=1060&t=st=1686385526~exp=1686386126~hmac=08d758c7c32c6a5dc553a2016751f28f0edbc3567bfa48beaa74e54cac68072b',
        'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1686385570~exp=1686386170~hmac=1df49504b9b4ea54e4047b2e1240dc5074712a66bd501940f09d09531eab10fd',
        'https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16352.jpg?w=1060&t=st=1686385727~exp=1686386327~hmac=20cc698313472fe69e35c41e9e5a27888b6e044722965226b7ab4aac649a2ea7'
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
                        backgroundImage: `url(${images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '500px',
                    }}
                    className="container-fluid"
                >
                    <div className="container" style={{ display: 'grid', placeItems: 'center', height: '500px' }}>
                        <Card className="bg-transparent text-center ServiceBanner p-2">
                            <h1 className='display-3 font-weight-bold text-warning'>Contact Us</h1>
                            <span className='text-white font-weight-bold'>Home &#62; Contact Us</span>
                        </Card>

                    </div>
                </div>
            </section>

            <section className='contactUsBanner'>
                {/* First service section */}
                <div className="container-fluid">
                    <Row className='m-0'>
                        {/* Left Column */}
                        <Col xl='6'>
                            <img src="" alt="" />
                        </Col>
                        {/* Right Column */}
                        <Col xl='6' className='text-center'>
                            {/* <img className='FirstSectionImgStyle img-fluid' src={FirstectionImg} alt="ADIMG" /> */}
                            <div class="Enquiry container animate__animated animate__backInDown">
                                <h2>Enquiry Form</h2>
                                <form className='p-2' action="#" method="post">
                                    <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name" placeholder="Your name" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Mob No. :</label>
                                        <input type="email" id="email" name="email" placeholder="Your Mobile No." required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Services looking for:</label>
                                        <input type="email" id="email" name="email" placeholder="Services looking for" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message:</label>
                                        <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                {/* Footer section */}
                <div className="container-fluid">
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default ContactUs