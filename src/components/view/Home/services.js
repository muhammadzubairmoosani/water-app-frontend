import React from "react";
import { ServicesCard, WallCard } from "../../common";
import { _getSupplierList } from "../../../service/methods";
import { _isEven } from "../../../service/helpers";

const services = [
  { heading: "19", subHeading: "Liter" },
  { heading: "200", subHeading: "Gallon" },
  { heading: "1,000", subHeading: "Gallon" },
  { heading: "2,000", subHeading: "Gallon" },
  { heading: "3,000", subHeading: "Gallon" },
  { heading: "4,000", subHeading: "Gallon" },
  { heading: "6,000", subHeading: "Gallon" },
  { heading: "10,000", subHeading: "Gallon" },
];

const Services = () => (
  <div className="services_container">
    <WallCard heading={"Services"} subHeading={"See all"}>
      {services.map((service) => (
        <ServicesCard
          key={service.heading}
          heading={service.heading}
          subHeading={service.subHeading}
        />
      ))}
      {_isEven(services.length) && <div className="isEven_dev" />}
    </WallCard>
  </div>
);

export default Services;
