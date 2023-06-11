import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Col, Row } from 'reactstrap'
import Card from 'react-bootstrap/Card';

const ServicePage = () => {

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
                {/* <!-- --navbar-- --> */}

                <Header />

                <div
                    style={{
                        backgroundImage: `url(${images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '500px',
                    }}
                    className="container-fluid">
                    <div className="container" style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                        <Card className=" border-0 bg-transparent text-center">
                            <h1 className='display-1 font-weight-bold txtColour'>Women Salon</h1>
                        </Card>
                    </div>
                </div>
            </section >
            <section>
                <div className="container-fluid ">
                    <Row>
                        <Col xl={6} className=''>
                            <img className='img-fluid' src="https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?w=1060&t=st=1686489226~exp=1686489826~hmac=2e19cf95f0c7845fad1257520e0eea10e6371084b662b734052402cf961f351a" alt="" />
                        </Col>
                        <Col xl={6} className=''>
                            asdfghjklkjhgfdsdfghj
                        </Col>
                    </Row>
                </div>
            </section >
            <section>
                <div className="container-fluid ">
                    <Row>
                        <Col xl={6} className=''>
                            <img className='img-fluid' src="https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?w=1060&t=st=1686489226~exp=1686489826~hmac=2e19cf95f0c7845fad1257520e0eea10e6371084b662b734052402cf961f351a" alt="" />
                        </Col>
                        <Col xl={6} className=''>
                            asdfghjklkjhgfdsdfghj
                        </Col>
                    </Row>
                </div>
            </section >
            {/* <section>
        <div className="container-fluid bgFirstSectionImg ">
          <ThirdSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          <FourthSections />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFifthSectionImg">
          <FifthSection />
        </div>
      </section >
      <section>
        <div className="container-fluid bgSixthSectionImg">
          <SixthSection />
        </div>
      </section >
      <section>
        <div style={{ backgroundImage: `url(${OurServiceProvier})` }} className="container-fluid bgSeventhSectionImg">
          <SeventhSection />
        </div>
      </section > */}
            <section>
                <div className="container-fluid">
                    <Footer />
                </div>
            </section >
        </>
    )
}

export default ServicePage