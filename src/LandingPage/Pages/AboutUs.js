import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';
import { Col, Row } from 'reactstrap';
import AboutUsImg from '../../assets/img/AboutUs.png';

const AboutUs = () => {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?w=1060&t=st=1686385486~exp=1686386086~hmac=789297921380da93418cf1fb9293e187296424dc91b85157789f83be61775c2a',
    'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg?w=1060&t=st=1686385526~exp=1686386126~hmac=08d758c7c32c6a5dc553a2016751f28f0edbc3567bfa48beaa74e54cac68072b',
    'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1686385570~exp=1686386170~hmac=1df49504b9b4ea54e4047b2e1240dc5074712a66bd501940f09d09531eab10fd',
    'https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16352.jpg?w=1060&t=st=1686385727~exp=1686386327~hmac=20cc698313472fe69e35c41e9e5a27888b6e044722965226b7ab4aac649a2ea7',
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
        <Header />

        {/* Hero section with a rotating background image */}
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
              <h1 className="display-3 font-weight-bold text-warning">About Us</h1>
              <span className="text-white font-weight-bold">Home &#62; About Us</span>
            </Card>
          </div>
        </div>
      </section>

      <section className="">
        {/* Section with information about the company */}
        <div className="container-fluid aboutUsBanner">
          <Row className="m-0">
            {/* Displaying an image on the left side */}
            <Col xl="6" style={{ display: 'grid', placeItems: 'center' }}>
              <img className="img-fluid" src={AboutUsImg} alt="" />
            </Col>
            {/* Displaying company description on the right side */}
            <Col xl="6" style={{ color: '#fff', display: 'grid', placeItems: 'center' }}>
              <div className="text-center">
                <h1 className="txtColour">About Us</h1>
                <h5>
                  Linking businesses to customers, Providing all suitable opportunities to the service providers and
                  entrepreneurs to expand their businesses, To cater to the daily needs of working couples who follow busy
                  schedules by providing them.
                </h5>
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

export default AboutUs;
