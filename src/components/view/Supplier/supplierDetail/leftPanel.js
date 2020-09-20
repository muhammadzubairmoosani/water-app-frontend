import React, { useState } from "react";
import { Avatar } from "antd";
import { GrayCard } from "../../../common";

const LeftPanel = ({ images, name, description, loading }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  return (
    <>
      <GrayCard title={name} className="slider_card">
        <div>
          <img
            src={images && images[selectedImgIndex]}
            width="100%"
            alt="carousel_img"
            className="slider_img"
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

// Cloudinary image with water mark code start
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

{
  /* <CloudinaryContext cloudName="pani-wala">
          <Image publicId="my-images/back_ckxp37">
            <Transformation width="400" crop="scale" overlay="cloudinary_icon"/>
          </Image>
        </CloudinaryContext> */
}

{
  /* <CloudinaryContext cloudName="demo">
          <Image publicId="sample">
            <Transformation
              overlay="cloudinary_icon"
              gravity="south_east"
              x="5"
              y="5"
              width="50"
              opacity="60"
              effect="brightness:200"
            />

          </Image>
        </CloudinaryContext> */
}
// Cloudinary image with water mark code end
