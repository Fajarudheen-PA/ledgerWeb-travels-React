import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.scss';

function Reviews() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }; 
  return (
    <div className='reviews'>
        <div className="content-wrapper">
            <div className="reviews__wrap">
                <div className="reviews__left">
                    <Slider {...settings}>
                        <div className='reviews__card'>
                            <img src="" alt="Customer 1" />
                        </div>
                    </Slider>
                </div>
                <div className="reviews__right">
                    <h3 className='reviews__main-head'>Testimonials<br/><span className='reviews__main-head reviews__main-head--sub-head'>Ledger Webb Customers</span></h3>
                    <p className='reviews__desc'>What our customers have to say about our service, check now!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews