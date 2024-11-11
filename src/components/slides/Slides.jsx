// src/components/slides/Slide.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Custom arrow components with light grey background styling
const arrowStyle = {
  backgroundColor: "lightgrey",
  color:"lightgrey",
  borderRadius: "50%",
  padding: "30px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1, 
};

const PrevArrow = ({ onClick }) => (
  <button style={{ ...arrowStyle, left: "-30px" }} onClick={onClick} className="slick-prev">
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button style={{ ...arrowStyle, right: "-10px" }} onClick={onClick} className="slick-next">
    <FaArrowRight />
  </button>
);

const Slide = ({ children, slidesToShow }) => {
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slide flex justify-center p-[100px] pl-0 pr-0">
      <div className="container w-[1400px]">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
