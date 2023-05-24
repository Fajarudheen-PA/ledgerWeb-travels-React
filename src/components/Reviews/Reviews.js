import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.scss';

function Reviews() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const iconCountCustA = 5;
    const iconCountCustB = 4;
    // const [iconCount, setIconCount] = useState(() => Math.floor(Math.random() * 3) + 3);;
  return (
    <div className='reviews'>
        <div className="content-wrapper">
            <div className="reviews__wrap">
                <div className="reviews__left">
                    <div className='reviews__card-grp'>
                        <Slider {...settings}>
                            <div className='reviews__card'>
                                <div className='reviews__avatar-bg'>
                                    <img src="../../../images/ledger-profile-avatar.png" alt="Customer 1" className='reviews__avatar' />
                                </div>
                                <div className='reviews__content'>
                                    <h4 className='reviews__content__name'>Jhone Lown</h4>
                                    <div className='reviews__content__rating'>
                                        {Array(iconCountCustA).fill().map((_, index)=>(
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ))}
                                    </div>
                                    <p className='reviews__content__desc'>“A very pleasant experience, plus the service is very friendly, recommended for those who want to try!”</p>
                                </div>
                            </div>
                            <div className='reviews__card'>
                                <div className='reviews__avatar-bg'>
                                    <img src="../../../images/ledger-profile-avatar.png" alt="Customer 1" className='reviews__avatar' />
                                </div>
                                <div className='reviews__content'>
                                    <h4 className='reviews__content__name'>Sarah Johnson</h4>
                                    <div className='reviews__content__rating'>
                                        {Array(iconCountCustB).fill().map((_, index)=>(
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ))}
                                    </div>
                                    <p className='reviews__content__desc'>“Amazing service with seamless booking and exceptional customer support. Highly Recommended!”</p>
                                </div>
                            </div>
                            <div className='reviews__card'>
                                <div className='reviews__avatar-bg'>
                                    <img src="../../../images/ledger-profile-avatar.png" alt="Customer 1" className='reviews__avatar' />
                                </div>
                                <div className='reviews__content'>
                                    <h4 className='reviews__content__name'>Emma Johnson</h4>
                                    <div className='reviews__content__rating'>
                                        {Array(iconCountCustA).fill().map((_, index)=>(
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ))}
                                    </div>
                                    <p className='reviews__content__desc'>“Great service overall. The team at XYZ Travels provided excellent assistance for my travel needs. I had a wonderful experience.”</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
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