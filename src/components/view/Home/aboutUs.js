import React from "react";
import { WallCard } from "../../common";

const AboutUs = () => (
  <div className="about_us">
    <WallCard heading={"About Us"} subHeading={"PANI WALA"}>
      <p>
        Pani Wala is an on-demand Water Delivery Services that connects you to
        the Water Distributors in your neighborhood. We aim to provide a
        hassle-free, high-quality water supply at your residences, offices,
        shops, and parties. Pani Wala is all about serving its valued customers
        by providing easy modes of payment - COD.
      </p>
    </WallCard>
    <div>
      <img
        className="supplier_img"
        src={require("../../../assets/images/about-me.webp")}
        alt="..."
      />
    </div>
  </div>
);

export default AboutUs;
