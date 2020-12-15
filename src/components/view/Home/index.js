import React, { Fragment } from "react";
import AboutUs from "./aboutUs";
import Services from "./services";
import { Layout, Slider } from "../../common";

// const images = [
//   require("../../../assets/images/slider1.webp"),
//   require("../../../assets/images/slider2.webp"),
//   require("../../../assets/images/slider3.webp"),
//   require("../../../assets/images/slider4.webp"),
//   require("../../../assets/images/slider5.webp"),
// ];

export const Home = () => (
  <Fragment>
    {/* <Slider
      images={images}
      effect={"fade"}
      dotPosition={window.innerWidth >= 600 ? "right" : "bottom"}
      autoplay
      className="main_carousel"
    /> */}
    <video width="100%" height="100%" muted autoPlay loop>
      <source
        src="https://res.cloudinary.com/pani-wala/video/upload/v1608014935/videos/beis5h113ayc1wdlb6hb.mp4"
        type="video/mp4"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <Layout className="card_carousel_container">
      <Services />
    </Layout>
    <AboutUs />
  </Fragment>
);
