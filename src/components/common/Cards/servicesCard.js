import React from "react";
import { CommonBtn } from "../";
import { Link } from "react-router-dom";

const ServicesCard = ({ heading, subHeading }) => (
  <div className="service_card">
    <div className="first_child">
      <p className="heading">{heading} </p>
      <p className="sub_heading">{subHeading} </p>
    </div>
    <img src={require("../../../assets/icons/drops.png")} alt="..." />
    <p className="title">Suppliers</p>
    <CommonBtn onClick={"/supplier-list"}>
      <Link to="/supplier-list">View more</Link>
    </CommonBtn>
  </div>
);

export default ServicesCard;
