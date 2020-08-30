import React, { Fragment, useState, useEffect } from "react";
import { CardCarouselSegment } from "../../common";
import { _getSupplierList } from "../../../service/methods";
import { Notification } from "../../common";

const Services = () => {
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
    </Fragment>
  );
};

export default Services;
