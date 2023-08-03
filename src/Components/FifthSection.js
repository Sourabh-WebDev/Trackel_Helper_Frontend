import React from 'react'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';

const FifthSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true
    };

    return (
        <div className='text-center p-4'>
            <h2 style={{ color: '#eedc30' }} >Testimonial</h2>
            <Slider {...settings} className=''>
                <div className='m-5 p-2'>
                    <center>
                        <img width={80} height={80} className='rounded-circle border' src="https://cdn1.vectorstock.com/i/1000x1000/94/40/indian-man-face-avatar-cartoon-vector-25919440.jpg" alt="Male" />
                    </center>

                    <h4>Vimal Tiwari</h4>
                    <div className='p-2'>
                        <h4 className='text-white'>“Fridge repair was very much essential for my home them and I was unable find a repairing company. Then they came like God saved.”</h4>
                    </div>
                </div>
                <div className='m-5 p-2'>
                    <center>
                        <img width={80} height={80} className='rounded-circle border' src="https://cdn5.vectorstock.com/i/1000x1000/91/79/indian-woman-face-avatar-cartoon-vector-25919179.jpg" alt="female" />
                    </center>
                    <h4>Tina Singh</h4>
                    <div className="p-2">
                        <h4 className='text-white'>“I got my AC repaired from them they are so good that they repaired my AC within a day and didn't charge any extra.”</h4>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default FifthSection