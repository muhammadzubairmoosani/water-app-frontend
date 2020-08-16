import React, { Fragment, useState, useEffect } from "react";
import MainCarousel from "./carousel";
import AboutUs from "./aboutUs";
import CardCarouselSegment from "../../common/Carousels/cardCarouselSegment";
import { Layout, Notification } from "../../common";
// import { data } from "../../../util/supplierCardData";
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
        {isLoading ? (
          "loading..."
        ) : (
          <CardCarouselSegment
            heading="19 liters gallon services"
            subHeading="see all"
            array={list}
            route={"/supplier-list"}
          />
        )}
        {isLoading ? (
          "loading..."
        ) : (
          <CardCarouselSegment
            heading="1,000 liters services"
            subHeading="see all"
            array={list}
            route={"/supplier-list"}
          />
        )}

        {isLoading ? (
          "loading..."
        ) : (
          <CardCarouselSegment
            heading="2,000 liters services"
            subHeading="see all"
            array={list}
            route={"/supplier-list"}
          />
        )}
        {isLoading ? (
          "loading..."
        ) : (
          <CardCarouselSegment
            heading="3,000 liters services"
            subHeading="see all"
            array={list}
            route={"/supplier-list"}
          />
        )}
        {isLoading ? (
          "loading..."
        ) : (
          <CardCarouselSegment
            heading="6,000 liters services"
            subHeading="see all"
            array={list}
            route={"/supplier-list"}
          />
        )}
      </Layout>
      <AboutUs />
    </Fragment>
  );
};
export default Home;
