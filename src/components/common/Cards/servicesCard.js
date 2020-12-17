import React from "react";
import { CommonBtn } from "../";
const ServicesCard = () => {
  return (
    <div className="services_card_container">
      <div className="first_child">
        <p className="heading">1000</p>
        <p className="sub_heading">Gallon</p>
      </div>
      <img src={require("../../../assets/icons/drops.png")} alt="..." />
      <p className="title">Suppliers</p>
      <CommonBtn>View more</CommonBtn>
    </div>
  );
};

export default ServicesCard;
