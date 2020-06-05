import React from "react";
const WallCard = ({ heading, subHeading, children }) => {
  return (
    <div className="wallcard_container">
      <div className="items_container">
        <div className="top_img_contain">
          <img
            src={require("../../../assets/icons/raindrop.png")}
            alt="raindrop"
          />
          <img
            src={require("../../../assets/icons/raindrop.png")}
            alt="raindrop"
          />
          <img
            src={require("../../../assets/icons/raindrop.png")}
            alt="raindrop"
          />
        </div>
        <h1 className="heading">{heading}</h1>
        <p className="sub_heading">{subHeading}</p>
      </div>
      <div className="wall_card_body">{children}</div>
    </div>
  );
};
export default WallCard;
