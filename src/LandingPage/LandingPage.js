import React, { useEffect, useState } from 'react'
import './Home.css'
import FirstSection from '../Components/FirstSection'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SecondSection from '../Components/SecondSection'
import ThirdSection from '../Components/ThirdSection'
import FifthSection from '../Components/FifthSection'
import FourthSections from '../Components/FourthSections'
import SixthSection from '../Components/SixthSection'
import Footer from '../Components/Footer'
import SeventhSection from '../Components/SeventhSection'
import OurServiceProvier from '../assets/img/TeamProvider.png'
import PlumberBanner from '../assets/img/PlumberBanner.jpg'
import CarWashingBanner from '../assets/img/CarWashingBanner.jpg'
import SalonBanner from '../assets/img/SalonBanner.jpg'
import ElectricBanner from '../assets/img/ElectricBanner.jpg'
import { Button, Offcanvas } from 'react-bootstrap'
import { Col, Row } from 'reactstrap'
import { BsFillTelephoneFill, BsWhatsapp, BsFacebook } from 'react-icons/bs'
import ServicesSlider from '../Components/ServicesSlider'

const LandingPage = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    PlumberBanner,
    // "https://img.freepik.com/free-photo/close-up-car-care-washing_23-2149172897.jpg?w=1060&t=st=1691048961~exp=1691049561~hmac=2cbfd2d151e2f365ff96c5e8bf7c08c9d1f93b5e4f7132c96ace2327908e93c2",
    CarWashingBanner,
    SalonBanner,
    ElectricBanner
  ];

  const phoneNumber = '1234567890'; // Replace with the actual phone number
  const whatsappWebURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const handleButtonClick = () => {
    window.open(whatsappWebURL, '_blank');
  };

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    services: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  useEffect(() => {
    // Function to handle the timer
    const timer = setInterval(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the image every 5 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <Button href='https://www.facebook.com/mytotal.helper?ref=br_rs' target='_blank' variant="primary" className="me-2 floating-buttonT">
        <BsFacebook color='#0777ff' size={25} />
      </Button>

      <Button onClick={handleButtonClick} variant="primary" className="me-2 floating-buttonS">
        <BsWhatsapp color='#00e6a1' size={25} />
      </Button>

      <Button variant="primary" onClick={handleShow} className="me-2 floating-button">
        {/* <PermPhoneMsgIcon style={{ fontSize: 'larger' }} /> */}
        <BsFillTelephoneFill size={25} />
      </Button>

      <Offcanvas className='bg-warning' placement={'end'} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Row>
            <Col sm={12} xl='12'>
              <div className="Enquiry container">
                <b><h2 className='txtColour font-weight-bold p-1' >Enquiry Form</h2> </b>
                <form className="pb-2 px-2" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="services">Services looking for:</label>
                    <input
                      type="text"
                      id="services"
                      name="services"
                      placeholder="Please enter the service you are looking for."
                      value={formData.services}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description (Please specify):</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Enter Description"
                      rows="5"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>

      <section>
        {/* <!-- --navbar-- --> */}

        <Header />

        <div
          style={{
            backgroundImage: `linear-gradient(62deg, #14257289 100%, #eedb30a8 0%), url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            width: '100%',
            height: '80vh',
            backgroundColor: 'transparent',
            display: 'grid',
            placeItems: 'center'

          }}
          className="container-fluid custom-shape-divider-bottom-1687584617">
          {/* <!-- --Tittle-- --> */}
          <FirstSection />
        </div>
      </section >
      <section>
        <div style={{ background: '#3d5ce8' }} className="container-fluid ">
          {/* <!-- --Tittle-- --> */}
          <ServicesSlider />
        </div>
      </section >
      <section>
        <div className="container-fluid ">
          {/* <!-- --Tittle-- --> */}
          <SecondSection />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <ThirdSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          {/* <!-- --Tittle-- --> */}
          <FourthSections />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFifthSectionImg">
          {/* <!-- --Tittle-- --> */}
          <FifthSection />
        </div>
      </section >
      <section>
        <div className="container-fluid bgSixthSectionImg">
          {/* <!-- --Tittle-- --> */}
          <SixthSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          {/* <!-- --Tittle-- --> */}
          <Footer />
        </div>
      </section >
    </>
  )
}

export default LandingPage