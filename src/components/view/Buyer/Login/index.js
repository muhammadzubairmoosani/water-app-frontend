import React from "react";
import { Layout, Heading } from "../../../common";
import { Form, Input, Button } from "antd";
import { MobileOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BuyerLogin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <aside className="login">
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
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please Enter your Mobile Number!",
                max: 50,
              },
            ]}
          >
            <Input
              prefix={<MobileOutlined className="site-form-item-icon" />}
              placeholder="mobile number"
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="buyer-signin">Register now!</Link>
          </Form.Item>
        </Form>
      </Layout>
    </aside>
  );
};
export default BuyerLogin;
