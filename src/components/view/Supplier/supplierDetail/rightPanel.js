import React, { useState } from "react";
import { Avatar } from "antd";
import { GrayCard } from "../../../common";

const RightPanel = ({ images }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  return (
    <>
      <div>
        <img
          src={require("../../../../assets/images/slider1.webp")}
          // src={images && images[selectedImgIndex]}
          width="100%"
          alt="carousel_img"
        />
        <div className="thumbnail_wrapper">
          {(images || [1, 2, 3]).map((image, index) => (
            <Avatar
              key={index}
              onClick={() => setSelectedImgIndex(index)}
              className={`avatar ${
                index === selectedImgIndex ? "selected_img" : ""
              }`}
              shape="square"
              size={74}
              src={require("../../../../assets/images/slider1.webp")}
              // src={image}
            />
          ))}
        </div>
      </div>
      <GrayCard title="About Us">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </GrayCard>
    </>
  );
};

export default RightPanel;
