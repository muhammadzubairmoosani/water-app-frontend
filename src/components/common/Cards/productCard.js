import React from "react";
import { Card, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const { Meta } = Card;
const ProductCard = ({ props }) => {
  return (
    <div className="product_card_wrapper">
      <Card
        cover={<img alt="example" src={props.img} />}
        actions={[
          <span>
            <PhoneOutlined style={{ transform: "rotate(100deg)" }} /> Order Now
          </span>,
        ]}
      >
        <Meta
          avatar={<Avatar src={props.img} />}
          title={"Card title"}
          description={props.detail}
        />
      </Card>
    </div>
  );
};
export default ProductCard;
