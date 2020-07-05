import React from "react";
import { Card, Skeleton, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const { Meta } = Card;
const SupplierCard = ({ props }) => {
  return (
    <div className="supplier_card_wrapper">
      <Card
        cover={<img alt="example" src={props.img} />}
        actions={[
          <span>
            <PhoneOutlined style={{ transform: "rotate(100deg)" }} /> Order Now
          </span>,
        ]}
      >
        {/* will setup Skeleton */}
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src={props.img} />}
            title={"Card title"}
            description={props.detail}
          />
        </Skeleton>
      </Card>
    </div>
  );
};
export default SupplierCard;
