import React, { Fragment } from "react";
import MainCarousel from "./carousel";
import CardCarouselSegment from "../../common/Carousels/cardCarouselSegment";
import { Layout } from "../../common/index";
const data = [
  {
    _id: 1,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
  {
    _id: 2,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
  {
    _id: 3,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
  {
    _id: 4,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
  {
    _id: 5,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
  {
    _id: 6,
    img: require("../../../assets/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"),
    detail: "hello world hello world hello world hello world hello world",
  },
];
const Home = () => {
  return (
    <Fragment>
      <MainCarousel />
      <Layout>
        <CardCarouselSegment
          heading="19 liters water gallon service"
          subHeading="see all"
          array={data}
        />
        <CardCarouselSegment
          heading="1,000 liters water service"
          subHeading="see all"
          array={data}
        />
        <CardCarouselSegment
          heading="2,000 liters water service"
          subHeading="see all"
          array={data}
        />
        <CardCarouselSegment
          heading="3,000 liters water service"
          subHeading="see all"
          array={data}
        />
        <CardCarouselSegment
          heading="6,000 liters water service"
          subHeading="see all"
          array={data}
        />
      </Layout>
    </Fragment>
  );
};
export default Home;
