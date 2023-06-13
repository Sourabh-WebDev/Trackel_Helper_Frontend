import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';
import { TbAirConditioning } from "react-icons/tb";
import { MdContentCut, MdElectricBolt, MdLocalCarWash, MdPlumbing } from "react-icons/md";

const OurServices = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?w=1060&t=st=1686385486~exp=1686386086~hmac=789297921380da93418cf1fb9293e187296424dc91b85157789f83be61775c2a',
        'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg?w=1060&t=st=1686385526~exp=1686386126~hmac=08d758c7c32c6a5dc553a2016751f28f0edbc3567bfa48beaa74e54cac68072b',
        'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1686385570~exp=1686386170~hmac=1df49504b9b4ea54e4047b2e1240dc5074712a66bd501940f09d09531eab10fd',
        'https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16352.jpg?w=1060&t=st=1686385727~exp=1686386327~hmac=20cc698313472fe69e35c41e9e5a27888b6e044722965226b7ab4aac649a2ea7'
    ];

    const Servicecards = [
        {
            headerClass: "one",
            iconClass: <MdContentCut size={85} />,
            title: "Barber SERVICES",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            btnClass: "one",
            btnText: "Request"
        },
        {
            headerClass: "two",
            iconClass: <TbAirConditioning size={85} />,
            title: " Air SERVICES",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            btnClass: "two",
            btnText: "Request"
        },
        {
            headerClass: "three",
            iconClass: <MdPlumbing size={85} />,
            title: "PLUMBER SERVICES",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            btnClass: "three",
            btnText: "Request"
        },
        {
            headerClass: "four",
            iconClass: <MdElectricBolt size={85} />,
            title: "Electric Services",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            btnClass: "four",
            btnText: "Request"
        },
        {
            headerClass: "four",
            iconClass: <MdLocalCarWash size={85} />,
            title: "CAR WASH SERVICES",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            btnClass: "four",
            btnText: "Request"
        }
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
                            <h1 className='display-3 font-weight-bold text-warning'>Our All Services</h1>
                            <span className='text-white font-weight-bold'>Home &#62; Our All Services</span>
                        </Card>
                    </div>
                </div>
            </section>

            <section className='overServicesBanner'>
                {/* First service section */}
                <div className="container-fluid OurServiceCardflow">
                    {Servicecards.map((card, index) => (
                        <div className="card-wrap" key={index}>
                            <div className={`card-header txtColour ${card.headerClass}`}>
                                {card.iconClass}
                            </div>
                            <div className="card-content">
                                <h1 className="card-title">{card.title}</h1>
                                {/* <p className="card-text">{card.text}</p> */}
                                <button className={`card-btn ${card.btnClass}`}>{card.btnText}</button>
                            </div>
                        </div>
                    ))}
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

export default OurServices