import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logosCarousel.css";

import React, { useRef } from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import logo3 from "../../assets/imgs/Logo-6.png";
import logo4 from "../../assets/imgs/Logo-7.png";
import logo5 from "../../assets/imgs/Logo-9.png";
import logo6 from "../../assets/imgs/logo5.png";
import logo7 from "../../assets/imgs/logo9.png";
import logo8 from "../../assets/imgs/logo8.png";

const LogosCarousel = () => {
  const arrowRef = useRef(null);

  const logos = [
    {
      imageSrc: logo3,
    },
    {
      imageSrc: logo4,
    },
    {
      imageSrc: logo5,
    },
    {
      imageSrc: logo6,
    },
    {
      imageSrc: logo7,
    },
    {
      imageSrc: logo8,
    },
    {
      imageSrc: logo3,
    },
    {
      imageSrc: logo4,
    },
    {
      imageSrc: logo5,
    },
    {
      imageSrc: logo6,
    },
    {
      imageSrc: logo7,
    },
    {
      imageSrc: logo8,
    },
  ];

  const sliderSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleNext = () => {
    arrowRef.current.slickNext();
  };

  const handlePrev = () => {
    arrowRef.current.slickPrev();
  };

  return (
    <div className="content logos-content">
      <div className="controls">
        <div
          className="custom-arrow custom-prev"
          onClick={() => {
            handlePrev();
          }}
        >
          <FaArrowLeftLong />
        </div>
        <div
          className="custom-arrow custom-next"
          onClick={() => {
            handleNext();
          }}
        >
          <FaArrowRightLong />
        </div>
      </div>
      <Slider ref={arrowRef} {...sliderSettings}>
        {logos.map((logo, index) => (
          <div className="img" key={index}>
            <img alt="logo" src={logo.imageSrc} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogosCarousel;
