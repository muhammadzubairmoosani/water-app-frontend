import React from "react";
import { Layout, Heading } from "../../../common";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import {
  MobileOutlined,
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const SupplierRegister = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout className="aside_layout">
      <Heading heading="Supplier Registration" />
      <Form
        name="normal_login"
        className="login-form aside_container"
        onFinish={onFinish}
      >
        <Form.Item
          name="companyName"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Company/Supplier Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="mobile"
          hasFeedback
          rules={[{ required: true, min: 10, max: 10 }]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number (Required)"
            type="number"
            addonBefore={<span>+92</span>}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item name="whatsApp" rules={[{ max: 10 }]}>
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="WhatsApp Number (Optional)"
            addonBefore={<span>+92</span>}
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, min: 8, max: 30 }]}
          hasFeedback
        >
          <Input.Password
            placeholder="Password (Required)"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, min: 8, max: 30 },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password (Required)"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="Address"
          hasFeedback
          rules={[{ required: true, max: 500 }]}
        >
          <Input
            placeholder="Company Address (Required)"
            prefix={<HomeOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Checkbox style={{ marginBottom: "12px" }}>
          I have read the <Link to="#">agreement</Link>
        </Checkbox>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Register
          </Button>
          Or <Link to="supplier-login">Login now!</Link>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SupplierRegister;
