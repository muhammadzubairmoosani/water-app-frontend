import React from "react";
import { Carousel } from "antd";

export const Slider = ({ effect, dotPosition, autoplay, images, className }) => (
  <Carousel
    effect={effect}
    dotPosition={dotPosition}
    autoplay={autoplay}
    className={className}
  >
    {(images || []).map((image) => (
      <div key={image}>
        <img src={image} width="100%" alt="carousel_img" />
      </div>
    ))}
  </Carousel>
);