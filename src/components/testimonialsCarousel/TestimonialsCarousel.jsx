import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialsCarousel.css";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React, { useRef } from "react";

import ReactStars from "react-rating-stars-component";
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import clientImg1 from "../../assets/imgs/clientImg1.png";
import clientImg2 from "../../assets/imgs/clientImg2.png";
import clientImg3 from "../../assets/imgs/clientImg3.png";
import clientImg4 from "../../assets/imgs/clientImg4.png";
import clientImg5 from "../../assets/imgs/clientImg5.png";

const TestimonialsCarousel = () => {
  const arrowRef = useRef(null);

  const feedbacks = [
    {
      heading: (
        <h2 className="section-header">
          Meet the People
          <br /> <span className="bold">We are Working With </span>
        </h2>
      ),
      paraparph:
        "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      clients: [
        {
          clientImg: clientImg1,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg2,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg3,
          stars: 5,
          name: "Emran Khan",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg4,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg5,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
      ],
    },
    {
      heading: (
        <h2 className="section-header">
          Meet the People
          <br /> <span className="bold">We are Working With </span>
        </h2>
      ),
      paraparph:
        "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      clients: [
        {
          clientImg: clientImg1,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg2,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg3,
          stars: 5,
          name: "Emran Khan",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg4,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg5,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
      ],
    },
    {
      heading: (
        <h2 className="section-header">
          Meet the People
          <br /> <span className="bold">We are Working With </span>
        </h2>
      ),
      paraparph:
        "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      clients: [
        {
          clientImg: clientImg1,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg2,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg3,
          stars: 5,
          name: "Emran Khan",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg4,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg5,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
      ],
    },
    {
      heading: (
        <h2 className="section-header">
          Meet the People
          <br /> <span className="bold">We are Working With </span>
        </h2>
      ),
      paraparph:
        "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      clients: [
        {
          clientImg: clientImg1,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg2,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg3,
          stars: 5,
          name: "Emran Khan",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg4,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
        {
          clientImg: clientImg5,
          stars: 5,
          name: "Romeena De Silva",
          title: "Software Engineer",
        },
      ],
    },
  ];

  const sliderSettings = {
    className: "active_card",
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const handleNext = () => {
    arrowRef.current.slickNext();
  };

  const handlePrev = () => {
    arrowRef.current.slickPrev();
  };

  return (
    <div className="content feedback-content text-center position-relative">
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
        {feedbacks.map((feedback, index) => (
          <div className="client-feedback" key={index}>
            {feedback.heading}
            <div className="quote position-relative">
              <div className="icon icon-left position-absolute">
                <RiSingleQuotesL />
              </div>
              <p>{feedback.paraparph}</p>
              <div className="icon icon-right position-absolute">
                <RiSingleQuotesR />
              </div>
            </div>
            <ul className="clients list-unstyled d-flex justify-content-center align-items-center text-center">
              {feedback.clients.map((client, idx) => (
                <li
                  className="d-flex flex-column justify-content-center align-items-center gap-1"
                  id={idx}
                  key={idx}
                >
                  <div className="img">
                    <img src={client.clientImg} alt={client.name} />
                  </div>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={client.stars}
                  />
                  <h5>{client.name}</h5>
                  <span>{client.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
