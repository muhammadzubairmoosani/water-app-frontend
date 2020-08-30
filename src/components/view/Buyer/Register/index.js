import React, { useState, useEffect } from "react";
import firebase from "../../../../config/index";
import { WallCard, Notification } from "../../../common";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { _buyerRegister } from "../../../../service/methods";
import VarificationModal from "./varificationModal";
import {
  MobileOutlined,
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const BuyerRegister = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [cResult, setCResult] = useState(null);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const captcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" }
    );
  };

  const sendCode = (values) => {
    setSubmitLoading(true);
    const phoneNumber = `+92${values.mobile}`;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmResult) => {
        setCResult(confirmResult);
        setValues(values);
        setModal(!modal);
        setSubmitLoading(false);
      })
      .catch(({ message }) => {
        Notification.error({ message: message });
        setSubmitLoading(false);
      });
  };

  const confirmCode = (code) => {
    if (!code) return;
    setVerifyIsLoading(true);
    cResult
      .confirm(code)
      .then((res) => {
        _buyerRegister({ values, uid: res.user.uid });
        setModal(!modal);
        setVerifyIsLoading(false);
      })
      .catch(({ message }) => {
        Notification.error({ message: message });
        setVerifyIsLoading(false);
      });
  };

  useEffect(() => captcha(), []);

  return (
    <WallCard className="buyer_register" heading="Buyer Register">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={(values) => sendCode(values)}
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={submitLoading}
            block
          >
            Register
          </Button>
          Or <Link to="buyer-login">Login now!</Link>
        </Form.Item>
      </Form>
      {/* code varification modal start */}
      <VarificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        codeVerify={confirmCode}
        mob={values?.mobile || ""}
        loading={verifyIsLoading}
        reSendCodeLoading={submitLoading}
      />
      {/* code varification modal end */}

      {/* recaptcha-container div must be required for phone varifivation*/}
      <div id="recaptcha-container"></div>
    </WallCard>
  );
};

export default BuyerRegister;
