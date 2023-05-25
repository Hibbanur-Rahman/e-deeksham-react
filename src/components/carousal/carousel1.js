import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousal.css'

import img1 from '../images/carousal1.jpg';
import img2 from '../images/crausal2.jpg';
import img3 from '../images/carousal3.jpg';
const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <Slider {...settings}>
        <div class="img-Carousel">
          <img src={img1} alt="Slide 1" />
        </div>
        <div class="img-Carousel">
          <img src={img2} alt="Slide 2" />
        </div>
        <div class="img-Carousel">
          <img src={img3} alt="Slide 3" />
        </div>
      </Slider>
    );
  };
  
  export default Carousel;
  