import React from "react";
import { Carousel } from "antd";

const MainCarousel = () => {
  return (
    <div className="main_carousel">
      <Carousel effect="fade" dotPosition="right" autoplay>
        <div>
          <img
            className="img"
            src={require("../../../assets/images/footer.webp")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            className="img"
            src={require("../../../assets/images/huseyin-akuzum-UfkuFDsXTwI-unsplash.jpg")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            className="img"
            src={require("../../../assets/images/louis-hansel-shotsoflouis-Y-8uuOZGKrY-unsplash.jpg")}
            alt="carousel"
          />
        </div>
        <div>
          <img
            className="img"
            src={require("../../../assets/images/img1.jpg")}
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default MainCarousel;
