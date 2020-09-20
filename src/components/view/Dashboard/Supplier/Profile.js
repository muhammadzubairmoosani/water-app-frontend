import React from "react";
import { Row, Col, Input, Form } from "antd";

const Profile = () => {
  return (
    <Form name="profile" onFinish={(values) => console.log(values)}>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16} lg={8} className="gutter-row">
          <Form.Item
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={16} lg={8} className="gutter-row">
          <Form.Item
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} md={16} lg={8} className="gutter-row">
          <Form.Item
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} md={16} lg={8} className="gutter-row">
          <Form.Item
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Profile;
