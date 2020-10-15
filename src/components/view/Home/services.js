import React, { Fragment, useState, useEffect } from "react";
import { CardCarouselSegment } from "../../common";
import { _getSupplierList } from "../../../service/methods";
import { Notification } from "../../common";

const Services = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    _getSupplierList(0, 9)
      .then(({ data }) => {
        setList(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        Notification.error({ message: message });
      });
  }, []);

  const titles = [
    "19 liters gallon services",
    "200 gallon services",
    "1,000 gallon services",
    "2,000 gallon services",
    "3,000 gallon services",
    "4,000 gallon services",
    "6,000 gallon services",
    "10,000 gallon services",
  ];
  return (
    <Fragment>
      {titles.map((title, index) => (
        <CardCarouselSegment
          key={index}
          heading={title}
          subHeading="see all"
          array={list}
          route={"/supplier-list"}
          loading={isLoading}
        />
      ))}
    </Fragment>
  );
};

export default Services;
