import './slides.css';
import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import ProjectCard from "../projectCard/ProjectCardTemp.jsx"; // Import ProjectCard

// Custom arrow components
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
  // Check if any child is a ProjectCard
  const isProjectSlide = React.Children.toArray(children).some(child => child.type === ProjectCard);

  const settings = {
    slidesToShow: slidesToShow,
    arrowsScroll: 3,
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow isProjectSlide={isProjectSlide} />,
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
