import React from "react";
import { Card, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import noImageAvailable from "../../../assets/images/noImageAvailable.png";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, company_name } = product;
  return (
    <div className="product_card_wrapper">
      <Card
        cover={<img alt="example" src={images?.[0] || noImageAvailable} />}
        actions={[
          <Link to={`supplier-detail/${product._id}`}>
            <PhoneOutlined style={{ transform: "rotate(100deg)" }} /> Order Now
          </Link>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={images?.[1] || images?.[0] || noImageAvailable} />
          }
          title={company_name || "Company name"}
          description={
            "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world"
          }
        />
      </Card>
    </div>
  );
};
export default ProductCard;
