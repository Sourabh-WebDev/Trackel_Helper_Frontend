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

const LandingPage = () => {

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
        {/* <!-- --navbar-- --> */}

        <Header />

        <div
          style={{
            backgroundImage: `linear-gradient(62deg, #14257289 100%, #eedb30a8 0%), url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            // height: '100vh',
          }}
          className="container-fluid custom-shape-divider-bottom-1687584617">
          {/* <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
            }}
          ></div> */}
          {/* <!-- --Tittle-- --> */}
          <FirstSection />
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
        <div style={{ backgroundImage: `url(${OurServiceProvier})` }} className="container-fluid bgSeventhSectionImg">
          {/* <!-- --Tittle-- --> */}
          <SeventhSection />
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