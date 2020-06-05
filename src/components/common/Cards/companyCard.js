import React from "react";
import { Card, Skeleton, Avatar } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const { Meta } = Card;
const CompanyCard = ({ props }) => {
  return (
    <div className="company_card_wrapper">
      <Card
        style={{ width: 300 }}
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
export default CompanyCard;
