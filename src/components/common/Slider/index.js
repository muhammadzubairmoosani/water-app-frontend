import React from "react";
import { Carousel } from "antd";

const Slider = ({ effect, dotPosition, autoplay, images, className }) => (
  <Carousel
    effect={effect}
    dotPosition={dotPosition}
    autoplay={autoplay}
    className={className}
  >
    {images.map((image) => (
      <div>
        <img src={image} alt="carousel_img" />
      </div>
    ))}
  </Carousel>
);
export default Slider;
