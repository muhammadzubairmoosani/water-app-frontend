import React from "react";
import { WallCard } from "../../../common";
import { Form, Input, Button } from "antd";
import { MobileOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _buyerLogin } from "../../../../service/methods";

const BuyerLogin = () => {
  return (
    <WallCard className="buyer_login" heading="Buyer Login">
      <Form name="normal_login" onFinish={(values) => _buyerLogin(values)}>
        <Form.Item
          name="mobile"
          hasFeedback
          rules={[
            {
              required: true,
              min: 10,
              max: 10,
              message: "Mobile is Required!",
            },
          ]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number"
            type="number"
            addonBefore={<span>+92</span>}
            style={{
              width: "100%",
            }}
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
              message: "Password is Required!",
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
          Or <Link to="buyer-register">Register now!</Link>
        </Form.Item>
      </Form>
    </WallCard>
  );
};

export default BuyerLogin;
