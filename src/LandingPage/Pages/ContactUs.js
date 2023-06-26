import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';
import { BsFillBuildingFill, BsMailbox } from 'react-icons/bs';
import { SlSocialFacebook, SlSocialGoogle, SlSocialInstagram, SlSocialSkype } from 'react-icons/sl';
import { Col, Row } from 'reactstrap';
import PlumberBanner from '../../assets/img/PlumberBanner.jpg'
import CarWashingBanner from '../../assets/img/CarWashingBanner.jpg'
import SalonBanner from '../../assets/img/SalonBanner.jpg'
import ElectricBanner from '../../assets/img/ElectricBanner.jpg'

const ContactUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                            <h1 className="display-3 font-weight-bold text-warning">Contact Us</h1>
                            <span className="text-white font-weight-bold">Home &#62; Contact Us</span>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="pt-1">
                {/* First service section */}
                <div className="container-fluid">
                    <Row className="m-0">
                        <Col xl="6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28490.963766973822!2d80.913375!3d26.79633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc0e597dde7b%3A0x58d52cd526585da0!2sA%2F1417%2C%20Aashiyana%20Chauraha%2C%20Sector%20I%2C%20Sector%20L%2C%20Ashiyana%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012%2C%20India!5e0!3m2!1sen!2sus!4v1686632712385!5m2!1sen!2sus"
                                className="w-100"
                                height="600"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Col>
                        <Col xl="3" style={{ background: '#eedc30', color: '#142572', display: 'grid', placeItems: 'center' }}>
                            <div className="text-center">
                                <BsFillBuildingFill size={60} />
                                <h4 className="py-5">OFFICE</h4>
                                <p>
                                    A/1412, Sector- I Ashiyana LDA Colony Near Pakripool Lucknow – 226012, UP, India
                                    Mobile No.: 0522-4300589, 0522-4330641
                                </p>
                            </div>
                        </Col>
                        <Col xl="3" style={{ background: '#142572', color: '#eedc30', display: 'grid', placeItems: 'center' }}>
                            <div className="text-center">
                                <BsMailbox size={60} />
                                <h4 className="py-5">Contact Via</h4>
                                <p className="py-1">
                                    Contact via <SlSocialFacebook size={25} className="ml-1" />
                                </p>
                                <p className="py-1">
                                    Contact via <SlSocialInstagram size={25} className="ml-1" />
                                </p>
                                <p className="py-1">
                                    Contact via <SlSocialGoogle size={25} className="ml-1" />
                                </p>
                                <p className="py-1">
                                    Contact via <SlSocialSkype size={25} className="ml-1" />
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="">
                {/* First service section */}
                <div className="container-fluid">
                    <Row className="m-0">
                        <Col xl="12" className="p-0">
                            <div className="container-fluid text-center contactUsBanner">
                                <h1>Send Us a Message</h1>
                                <p>We Will Answer ASAP</p>
                                <div className="ContactUS container animate__animated animate__backInDown">
                                    <h2>Enquiry Form</h2>
                                    <form className="p-2" action="#" method="post">
                                        <div className="form-group">
                                            <label style={{ color: '#eedc30' }} htmlFor="name">
                                                Name:
                                            </label>
                                            <input type="text" id="name" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ color: '#eedc30' }} htmlFor="email">
                                                Mob No. :
                                            </label>
                                            <input type="email" id="email" name="email" placeholder="Your Mobile No." required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ color: '#eedc30' }} htmlFor="message">
                                                Message:
                                            </label>
                                            <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Send" />
                                        </div>
                                    </form>
                                </div>
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
    );
};

export default ContactUs;
