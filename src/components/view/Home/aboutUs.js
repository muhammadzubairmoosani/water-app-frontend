import React from "react";
import { WallCard } from "../../common";

const AboutUs = () => {
  return (
    <div className="about_us">
      <WallCard heading={"About Us"} subHeading={"PANI WALA"}>
        <p>
          Pani Wala is an on demand Water Tanker Delivery Service that
          connects you to the Water Tanker Distributor in your neighbourhood.
          Our aim is to provide a hassle free, high quality water supply at your
          residences, offices, shops and parties. Pani Wala is all about
          serving its valued customers by providing easy modes of payment - COD,
          wallet or monthly payments to choose from. It allows you to schedule
          the time of delivery.
        </p>
      </WallCard>
    </div>
  );
};

export default AboutUs;
