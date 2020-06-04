import React from "react";
import {
  WallCard,
  CompanyCard,
  CardCarousel,
  Layout,
} from "../../common/index";

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

const NineteenLiter = () => {
  return (
    <div className="nineteen_liter_segment_container">
      <Layout>
        <WallCard heading="19 liters water gallon service" subHeading="see all">
          <div className="organization_segment_body">
            <CardCarousel>
              {data.map((companies) => (
                <div key={companies._id}>
                  <CompanyCard props={companies} />
                </div>
              ))}
            </CardCarousel>
          </div>
        </WallCard>
      </Layout>
    </div>
  );
};

export default NineteenLiter;
