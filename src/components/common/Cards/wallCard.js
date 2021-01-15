import React from "react";
import { Link } from "react-router-dom";
const WallCard = ({ heading, subHeading, children, route ="", className }) => (
  <div className={`wallcard_container ${className}`}>
    <div className="items_container">
      <img src={require("../../../assets/icons/drops.png")} alt="drops" />
      <h1 className="heading">{heading}</h1>
      {subHeading && (
        <Link to={route}>
          <p className="sub_heading">{subHeading}</p>
        </Link>
      )}
    </div>
    <div className="wall_card_body">{children}</div>
  </div>
);
export default WallCard;
