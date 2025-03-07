import React, { Fragment } from "react";
import AboutUs from "./aboutUs";
import Services from "./services";
import { Layout, CardCarouselSegment } from "../../common";

export const Home = () => (
  <Fragment>
    <video width="100%" height="800%" muted autoPlay loop>
      <source
        src="https://res.cloudinary.com/pani-wala/video/upload/v1608048446/videos/seppuhiy20ghbrozcq96.mp4"
        type="video/mp4"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <Layout className="card_carousel_container">
      <Services />
      <CardCarouselSegment
        heading="Our Suppliers"
        subHeading={"See all"}
        array={[0, 0, 0, 0, 0]}
      />
      <div id="about_us" />
    </Layout>
    <AboutUs />
  </Fragment>
);
