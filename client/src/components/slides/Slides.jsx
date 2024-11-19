import './slides.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "../projectCard/ProjectCardTemp.jsx";

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="prev-arrow">
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick, isProjectSlide }) => (
  <button onClick={onClick} className="next-arrow" style={{ right: isProjectSlide ? '50px' : '28px' }}>
    <FaArrowRight />
  </button>
);

const Slide = ({ children, slidesToShow }) => {
  const childrenArray = React.Children.toArray(children);
  const isProjectSlide = childrenArray.some(child => child.type === ProjectCard);

  const settings = {
    dots: true,
    infinite: childrenArray.length > slidesToShow,
    speed: 500,
    slidesToShow: Math.min(slidesToShow, childrenArray.length),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow isProjectSlide={isProjectSlide} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, childrenArray.length),
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, childrenArray.length),
        }
      }
    ]
  };

  return (
    <div className="slide flex justify-center p-[100px] pl-0 pr-0">
      <div className="container w-[1400px]">
        <Slider {...settings}>
          {childrenArray}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
