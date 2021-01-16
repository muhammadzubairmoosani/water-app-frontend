import React from "react";
import { CommonBtn } from "../";
import { Link } from "react-router-dom";

const ServicesCard = ({ heading, subHeading }) => (
  <div className="service_card">
    <div className="heading_container">
      <p className="heading">{heading} </p>
      <p className="sub_heading">{subHeading} </p>
    </div>
    <img src={require("../../../assets/icons/drops.png")} alt="..." />
    <p className="title">Service</p>
    <CommonBtn onClick={"/supplier-list"}>
      <Link to="/supplier-list">View Suppliers</Link>
    </CommonBtn>
  </div>
);

export default ServicesCard;
