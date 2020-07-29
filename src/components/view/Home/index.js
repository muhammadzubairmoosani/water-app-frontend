import React, { Fragment, useState, useEffect } from "react";
import MainCarousel from "./carousel";
import AboutUs from "./aboutUs";
import CardCarouselSegment from "../../common/Carousels/cardCarouselSegment";
import { Layout, Notification } from "../../common";
import { data } from "../../../util/supplierCardData";
import { _supplierList } from "../../../service/methods";

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _supplierList()
      .then(({ data }) => {
        setList(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        Notification.error({ message: message });
      });
  }, []);

  return (
    <Fragment>
      <MainCarousel />
      <Layout>
        <CardCarouselSegment
          heading="19 liters water gallon service"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="1,000 liters water service"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="2,000 liters water service"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="3,000 liters water service"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
        />
        <CardCarouselSegment
          heading="6,000 liters water service"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
        />
      </Layout>
      <AboutUs />
    </Fragment>
  );
};
export default Home;
