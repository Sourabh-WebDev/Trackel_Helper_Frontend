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

const LandingPage = () => {

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
            backgroundImage: `linear-gradient(62deg, #14257289 100%, #eedb30a8 0%), url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            // height: '100vh',
          }}
          className="container-fluid">
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