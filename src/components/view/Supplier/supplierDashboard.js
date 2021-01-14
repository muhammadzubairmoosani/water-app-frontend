import React from "react";
import sale from "../../../assets/images/icon-sale.png";
import order from "../../../assets/images/icon-order.png";
import user from "../../../assets/images/icon-user.png";
import visitor from "../../../assets/images/icon-visitor.png";
import { StatusCard } from "../../common";
// import TableSelect from "../components/home/TableSelect";
import { Row, Col, Card } from "antd";

const statusData = [
  {
    icon: sale,
    text: "Total Sale",
    number: "9541",
    className: "sale",
  },
  {
    icon: order,
    text: "New Order",
    number: "9541",
    className: "order",
  },
  {
    icon: user,
    text: "New User",
    number: "9541",
    className: "user",
  },
  {
    icon: visitor,
    text: "Unique Visitor",
    number: "9541",
    className: "visitor",
  },
];

export const SupplierDashboard = () => (
  <div className="supplier_dashboard">
    {/* <!--Stats view --> */}
    <Row gutter={16}>
      {statusData.map((status) => (
        <Col xs={24} sm={12} lg={6} className="status_card_wrapper">
          <StatusCard
            bgColor={status.className}
            icon={status.icon}
            text={status.text}
            number={status.number}
          />
        </Col>
      ))}
    </Row>

    {/* <!--Table view --> */}
    <Row gutter={16} className="m-t-15">
      {/* <Col span={24}>
        <Card
          bordered={false}
          title={<p>Dynamic Custom Table </p>}
          bodyStyle={{ padding: "10px 20px" }}
        >
          <TableSelect />
        </Card>
      </Col> */}
    </Row>
  </div>
);
