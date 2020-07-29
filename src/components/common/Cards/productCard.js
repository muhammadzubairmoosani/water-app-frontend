import React from "react";
import { Card, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const { Meta } = Card;
const ProductCard = ({ product }) => {
  const { images, company_name } = product;
  return (
    <div className="product_card_wrapper">
      <Card
        cover={<img alt="example" src={images[0]} />}
        actions={[
          <span>
            <PhoneOutlined style={{ transform: "rotate(100deg)" }} /> Order Now
          </span>,
        ]}
      >
        <Meta
          avatar={<Avatar src={images[1]} />}
          title={company_name}
          description={
            "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world"
          }
        />
      </Card>
    </div>
  );
};
export default ProductCard;
