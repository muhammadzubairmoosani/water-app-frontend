import React, { useState } from "react";
import { WallCard } from "../../../common";
import { Form, Input, Button, Checkbox, Modal, Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  MobileOutlined,
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { _buyerRegister } from "../../../../service/methods";

const BuyerRegister = () => {
  const [modal, setModal] = useState(true);

  return (
    <WallCard className="buyer_register" heading="Buyer Register">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={(values) => _buyerRegister(values)}
      >
        <Form.Item
          name="name"
          hasFeedback
          rules={[{ required: true, max: 50, message: "Name is Required!" }]}
        >
          <Input
            placeholder="Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

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
            placeholder="Mobile Number (Required)"
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
            placeholder="Password (Required)"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              min: 8,
              max: 30,
              message: "Confirm password is Required!",
            },
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
          name="address"
          hasFeedback
          rules={[
            { required: true, max: 300, message: "Address is Required!" },
          ]}
        >
          <Input
            placeholder="Address (Required)"
            prefix={<HomeOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Checkbox>
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
          Or <Link to="buyer-login">Login now!</Link>
        </Form.Item>
      </Form>
      <Button onClick={() => setModal(!modal)}>click</Button>
      <Modal
        title="Code Confirmation"
        visible={modal}
        onOk={() => setModal(!modal)}
        onCancel={() => setModal(!modal)}
        okText="Send Code"
      >
        <Form.Item
          label="6 digit code:"
          extra="A text message with varification code was just sent to *** *** ***67"
        >
          <Form.Item
            name="captcha"
            noStyle
            rules={[
              {
                required: true,
                max: 6,
                message: "Please input the captcha you got!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form.Item>
      </Modal>
    </WallCard>
  );
};

export default BuyerRegister;
