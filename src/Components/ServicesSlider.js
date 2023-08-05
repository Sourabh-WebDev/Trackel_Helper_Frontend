import React from 'react';
import Slider from 'react-slick';

const ServicesSlider = () => {
    const settings = {
        dots: true,
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
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='text-center'>
            <Slider {...settings} className=''>
                <div>
                    <h3>Slide 1</h3>
                </div>
                <div>
                    <h3>Slide 2</h3>
                </div>
                <div>
                    <h3>Slide 3</h3>
                </div>
            </Slider>
        </div>
    );
};

export default ServicesSlider;
