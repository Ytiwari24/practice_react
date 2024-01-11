import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CCard, CCardBody, CCardHeader, CCarouselCaption, CCol, CRow } from '@coreui/react';

import AngularImg from './images/new.jpg';
import ReactImg from './images/profile.jpg';
import VueImg from './images/new.jpg';

import '../css/slider.css'; // Import the CSS file for styles
const slides = [AngularImg, ReactImg, VueImg];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      →
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      ←
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Horizontal Scroll Carousel</strong>
          </CCardHeader>
          <CCardBody> 
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="image-container">
                  <img className="d-block w-100" src={slide} alt={`slide ${index + 1}`} />
                  <CCarouselCaption className="d-none d-md-block">
                    {/* Your caption content here */}
                  </CCarouselCaption>
                </div>
              ))}
            </Slider>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Carousel;
