import React from "react";
import Slider from "react-slick";

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"service-segment-custom-slider-right-arrow"}
      onClick={onClick}
    >
      <img
        src={require("../../../assets/icons/nextthem-color.png")}
        alt="arrow-img"
      />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"service-segment-custom-slider-left-arrow"}
      onClick={onClick}
    >
      <img
        src={require("../../../assets/icons/nextthem-color.png")}
        alt="arrow-img"
      />
    </div>
  );
}

const settings = {
  className: "",
  centerMode: true,
  infinite: true,
  centerPadding: "135px",
  slidesToShow: 2,
  speed: 500,
  draggable: false,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        className: "",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      },
    },
    {
      breakpoint: 768,
      settings: {
        className: "",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      },
    },
    {
      breakpoint: 992,
      settings: {
        className: "",
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "105px",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        className: "",
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "180px",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      },
    },
  ],
};

const CardCarousel = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default CardCarousel;
