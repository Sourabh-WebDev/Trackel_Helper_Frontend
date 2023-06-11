import React from 'react'
import Slider from "react-slick";

const SixthSection = () => {

    const settings = {
        ddots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 0.4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='text-center p-4'>
            <h2>Our Team</h2>
            <Slider {...settings} className=''>
                <div className='py-5'>
                    <div className="d-flex justify-content-around gap-2">
                        <div className='borderRadiusTeamFirst'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamSecond'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamThird'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamFourth'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                    </div>
                </div>
                <div className='py-5 mx-2'>
                    <div className="d-flex justify-content-around gap-2">
                        <div className='borderRadiusTeamFirst'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamSecond'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamThird'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamFourth'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <div className="d-flex justify-content-around gap-2">
                        <div className='borderRadiusTeamFirst'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamSecond'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamThird'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                        <div className='borderRadiusTeamFourth'>
                            <img className='rounded-circle p-2' width={150} height={150} src='https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg' alt="" />
                            <h5>Singh ji</h5>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SixthSection