import React, { useState } from "react";
import { Avatar } from "antd";
import { GrayCard } from "../../../common";

const LeftPanel = ({ images, name, description, loading }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  return (
    <>
      <GrayCard title={name} className="slider_card">
        <div>
          <div className="img_container">
            <img
              src={images && images[selectedImgIndex]}
              alt="carousel_img"
              className="slider_img"
            />

            <img
              src={require("../../../../assets/icons/logo.jpg")}
              alt="carousel_img"
              className="water_mark"
            />
          </div>
          <div className="thumbnail_wrapper">
            {(images || [1, 2, 3]).map((image, index) => (
              <Avatar
                key={index}
                onMouseOver={() => setSelectedImgIndex(index)}
                className={`avatar ${
                  index === selectedImgIndex ? "selected_img" : ""
                }`}
                shape="square"
                size={74}
                src={image}
              />
            ))}
          </div>
        </div>
      </GrayCard>
      <GrayCard title="About Us">{description}</GrayCard>
    </>
  );
};

export default LeftPanel;
