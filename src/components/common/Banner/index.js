import React from "react";

const Banner = ({ heading, subHeading }) => {
  return (
    <div className="banner_container">
      <div className="back_shadow"></div>
      <div className="nested_contain">
        <h1>{heading}</h1>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default Banner;
