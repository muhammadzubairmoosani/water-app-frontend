import React from "react";
import { Carousel } from "antd";

const MainCarousel = () => {
  return (
    <div className="main_carousel">
      <Carousel
        effect="fade"
        dotPosition={window.innerWidth >= 600 ? "right" : "bottom"}
        autoplay
      >
        <div>
          <img
            src={require("../../../assets/images/slider1.webp")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            src={require("../../../assets/images/slider2.webp")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            src={require("../../../assets/images/slider3.webp")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            src={require("../../../assets/images/slider4.webp")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            src={require("../../../assets/images/slider5.webp")}
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default MainCarousel;
