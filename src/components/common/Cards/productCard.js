import React from "react";
import { Card, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, company_name } = product;
  return (
    <div className="product_card_wrapper">
      <Card
        cover={<img alt="example" src={images ? images[0] : "default image"} />}
        actions={[
          <Link to={`supplier-detail/${product._id}`}>
            <PhoneOutlined style={{ transform: "rotate(100deg)" }} /> Order Now
          </Link>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={images ? images[1] || images[0] : "default image"} />
          }
          title={company_name}
          description={
            "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world"
          }
        />
      </Card>
    </div>
  );
};
export default ProductCard;
