import React from "react";
import { Layout, Heading } from "../../../common";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const BuyerLogin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <Heading heading="Buyer Login" />
      <Form
        name="normal_login"
        className="login-form login_container"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
              max: 50,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
              max: 100,
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default BuyerLogin;
