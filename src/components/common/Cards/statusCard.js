import React from "react";
import { Card } from "antd";

export const StatusCard = ({
  icon,
  text,
  number,
  bgColor,
  bordered = false,
  className,
}) => (
  <Card bordered={bordered} className={bgColor} bodyStyle={{ padding: "20px" }}>
    <div className={`status_card ${className}`}>
      <h2> {text}</h2>
      <div className="card_body">
        <div className="status-number"> {number}</div>
        <div>
          <img src={icon} alt="..." />
        </div>
      </div>
    </div>
  </Card>
);
