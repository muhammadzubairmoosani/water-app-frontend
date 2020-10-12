import React, { Fragment } from "react";
import AboutUs from "./aboutUs";
import Services from "./services";
import { Layout, Slider } from "../../common";

const images = [
  require("../../../assets/images/slider1.webp"),
  require("../../../assets/images/slider2.webp"),
  require("../../../assets/images/slider3.webp"),
  require("../../../assets/images/slider4.webp"),
  require("../../../assets/images/slider5.webp"),
];

export const Home = () => (
  <Fragment>
    <Slider
      images={images}
      effect={"fade"}
      dotPosition={window.innerWidth >= 600 ? "right" : "bottom"}
      autoplay
      className="main_carousel"
    />
    <Layout>
      <Services />
    </Layout>
    <AboutUs />
  </Fragment>
);
