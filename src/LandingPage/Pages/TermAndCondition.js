import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';

const TermAndCondition = () => {
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
                            <h1 className="display-3 font-weight-bold text-warning">Term and Condition</h1>
                            <span className="text-white font-weight-bold">Home &#62; Term and Condition</span>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container-fluid TermandConditionBanner">
                    <div className='p-5'>
                        <div className='text-center'>
                        <h3>TERMS AND CONDITIONS</h3>
                        <h6>Last Updated: 29thApril, 2022</h6>
                        </div>

                        <p className='py-2'>
                            These terms and conditions (“Terms”) govern the use of services made available on or through https://www.mytotalhelper.com and/or the Helper Company mobile app (collectively, the “Platform”, and together with the services made available on or through the Platform, the “Services”). These Terms also include our privacy policy, available at https://www.mytotalhelper.com/privacy-policy (“Privacy Policy”), and any guidelines, additional, or supplemental terms, policies, and disclaimers made available or issued by us from time to time (“Supplemental Terms”). The Privacy Policy and the Supplemental Terms form an integral part of these Terms. In the event of a conflict between these Terms and the Supplemental Terms with respect to applicable Services, the Supplemental Terms will prevail.
                        </p>
                        <p className='py-2'>
                            The Terms constitute a binding and enforceable legal contract between Total helper (a company incorporated under the Companies Act, 2013 with its registered address at A/1412, Sector- I Ashiyana, LDA Colony Near Pakripool Lucknow – 226012, UP, India, and you, a user of the Services, or any legal entity that books Pro Services (defined below) on behalf of end-users (“you” or “Customer”). By using the Services, you represent and warrant that you have full legal capacity and authority to agree to and bind yourself to these Terms. If you represent any other person, you confirm and represent that you have the necessary power and authority to bind such person to these Terms.
                        </p>
                        <p className='py-2'>
                            By using the Services, you agree that you have read, understood, and are bound by, these Terms, as amended from time to time, and that you will comply with the requirements listed here. These Terms expressly supersede any prior written agreements with you. If you do not agree to these Terms, or comply with the requirements listed here, please do not use the Services.
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

export default TermAndCondition;
