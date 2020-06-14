import React, { Fragment } from "react";
import MainCarousel from "./carousel";
import CardCarouselSegment from "../../common/Carousels/cardCarouselSegment";
import { Layout } from "../../common/index";
import { data } from "../../../util/supplierCardData";
const Home = () => {
  return (
    <Fragment>
      <MainCarousel />
      <Layout>
        <CardCarouselSegment
          heading="19 liters water gallon service"
          subHeading="see all"
          array={data}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="1,000 liters water service"
          subHeading="see all"
          array={data}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="2,000 liters water service"
          subHeading="see all"
          array={data}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="3,000 liters water service"
          subHeading="see all"
          array={data}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="6,000 liters water service"
          subHeading="see all"
          array={data}
          route={"/supplier-list"}
        />
      </Layout>
    </Fragment>
  );
};
export default Home;
