import React, { Fragment, useState, useEffect } from "react";
import MainCarousel from "./carousel";
import AboutUs from "./aboutUs";
import { Layout, Notification, CardCarouselSegment } from "../../common";
import { _getSupplierList } from "../../../service/methods";

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _getSupplierList()
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
          heading="19 liters gallon services"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
        <CardCarouselSegment
          heading="1,000 liters services"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
        <CardCarouselSegment
          heading="2,000 liters services"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
        <CardCarouselSegment
          heading="3,000 liters services"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
        <CardCarouselSegment
          heading="6,000 liters services"
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
      </Layout>
      <AboutUs />
    </Fragment>
  );
};
export default Home;
