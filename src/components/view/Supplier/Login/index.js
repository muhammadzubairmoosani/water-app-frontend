import React from "react";
import { WallCard } from "../../../common";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";

const SupplierLogin = () => {
  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form name="normal_login" onFinish={(value) => _supplierLogin(value)}>
        <Form.Item
          name="mobile"
          hasFeedback
          rules={[
            {
              required: true,
              min: 10,
              max: 10,
            },
          ]}
        >
          <Input
            placeholder="Mobile Number"
            allowClear
            type="number"
            addonBefore={<span>+92</span>}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              min: 8,
              max: 30,
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
          Or <Link to="supplier-register">Register now!</Link>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
export default SupplierLogin;
