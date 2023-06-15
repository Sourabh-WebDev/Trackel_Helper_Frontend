import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';

const Privacy = () => {
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
                            <h1 className="display-3 font-weight-bold text-warning">Privacy & Policy</h1>
                            <span className="text-white font-weight-bold">Home &#62; Privacy & Policy</span>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container-fluid PrivcyAndPolicyBanner">
                    <div className='p-5'>
                        <div className='text-center'>
                            <h3>Privacy & Policy</h3>
                            <h6>Last Updated: 29thApril, 2022</h6>
                        </div>

                        <p className='py-2'>
                            Welcome to Helper Services privacy policy (“Privacy Policy” or “Policy”).
                        </p>
                        <p className='py-2'>
                            Helper Services India Private Limited and its affiliates are engaged in the business of providing web-based solutions to facilitate connections between customers that seek specific services and service professionals that offer these services. This Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you have consented to to share with us when you access, use, or otherwise interact with our website available at https://www.mytotalhelper.com/ or mobile application ‘Urban Company’ (collectively, “Platform”) or avail products or services that Helper services offers you on or through the Platform (collectively, the “Services”).In this Policy, the services offered to you by service professionals on or through the Platform are referred to as “Professional Services”.
                        </p>
                        <p className='py-2'>
                            At Helper Company, we are committed to protecting your personal data and respecting your privacy. In order to provide you with access to the Services or the Professional Services, we have to collect and otherwise process certain data about you. This Policy explains how we process and use personal data about you.
                        </p>
                    </div>

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

export default Privacy;
