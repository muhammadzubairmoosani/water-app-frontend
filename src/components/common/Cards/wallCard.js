import React from "react";
import { Link } from "react-router-dom";
const WallCard = ({ heading, subHeading, children, route }) => {
  return (
    <div className="wallcard_container">
      <div className="items_container">
        {/* <img src={require("../../../assets/icons/drops.jpg")} alt="drops"/> */}
        {/* <div className="top_img_contain">
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
        </div> */}
        <h1 className="heading">{heading}</h1>
        <Link to={route}>
          <p className="sub_heading">{subHeading}</p>
        </Link>
      </div>
      <div className="wall_card_body">{children}</div>
    </div>
  );
};
export default WallCard;
