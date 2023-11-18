import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgCode from "../../assets/imgs/Code_perspective_matte.png";
import imgTab from "../../assets/imgs/Dashboard_perspective_matte.png";
import imgMob from "../../assets/imgs/Mobile_app_perspective_matte.png";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  const cards = [
    {
      imageSrc: imgTab,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgCode,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgMob,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgCode,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgTab,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgCode,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgMob,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      imageSrc: imgCode,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  const sliderSettings = {
    className: "active_card",
    centerMode: true,
    arrow: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    afterChange: (index) => setActiveSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setProgressWidth(((activeSlide + 1) * 100) / (cards.length - 1));
  }, [activeSlide]);

  return (
    <div className="content d-flex flex-column cards">
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div className="card d-flex flex-column" key={index}>
            <div className="img">
              <img
                alt={card.title}
                src={card.imageSrc}
                width="100"
                height="100"
              />
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
      <div className="slider_number position-absolute d-flex align-items-center gap-2 justify-content-end">
        <div className="active_slider_num">0{activeSlide + 1}</div>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: `${progressWidth}%` }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="slider_nums">0{cards.length}</div>
      </div>
    </div>
  );
};

export default Carousel;
