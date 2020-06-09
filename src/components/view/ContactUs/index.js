import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Heading } from "../../common";

const { TextArea } = Input;

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not validate email!",
  },
};

const ContactUs = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <Heading heading="Contact Us" />
      <Form
        className="contact_us_container"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              max: 100,
            },
          ]}
        >
          <Input
            allowClear
            placeholder="Enter your Name"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              max: 100,
            },
          ]}
        >
          <Input
            allowClear
            placeholder="Enter your Email"
            prefix={<MailOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              min: 30,
              max: 500,
            },
          ]}
        >
          <TextArea
            allowClear
            placeholder="Type your Message..."
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item className="btn_contain">
          <Button htmlType="submit">Send</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default ContactUs;
