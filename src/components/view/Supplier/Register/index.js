import React, { useState, useEffect } from "react";
import {
  ImageUploader,
  WallCard,
  CodeVerificationModal,
  Notification,
} from "../../../common";
import { Form, Input, Button, Select, TreeSelect } from "antd";
import { Link } from "react-router-dom";
import {
  LockOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
import firebase from "../../../../config/index";

const { SHOW_PARENT } = TreeSelect;
const { TextArea } = Input;

const SupplierRegister = () => {
  const [messageLength, setMessageLength] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [areaOfService, setAreaOfService] = useState(undefined);
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
        _suplierRegister({
          values,
          uid: res.user.uid,
          fileList: fileList.map((item) => item.originFileObj),
        });
        setModal(!modal);
        setVerifyIsLoading(false);
      })
      .catch(({ message }) => {
        Notification.error({ message: message });
        setVerifyIsLoading(false);
      });
  };

  useEffect(() => captcha(), []);

  const treeData = [
    {
      title: "Garden",
      value: "Garden",
    },
    {
      title: "Old Haji Camp",
      value: "Old Haji Camp",
    },
    {
      title: "Saddar",
      value: "Saddar",
    },
    {
      title: "Kharadar",
      value: "Kharadar",
    },
  ];

  const tProps = {
    treeData,
    value: areaOfService,
    onChange: setAreaOfService,
    treeCheckable: true,
    allowClear: true,
    // hasFeedback: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Area of Working...",
    style: {
      width: "100%",
    },
  };

  return (
    <WallCard className="supplier_register" heading="Supplier Register">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={(values) => sendCode(values)}
      >
        <Form.Item
          name="company_name"
          hasFeedback
          rules={[{ required: true, max: 50 }]}
        >
          <Input
            placeholder="Company Name (Required)"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="name"
          hasFeedback
          rules={[
            {
              required: true,
              min: 3,
              max: 50,
            },
          ]}
        >
          <Input
            placeholder="Owner/Supplier Name (Required)"
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
            },
          ]}
        >
          <Input
            placeholder="Mobile Number (Required)"
            type="number"
            allowClear
            addonBefore={<span>+92</span>}
            className="w_100"
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
          rules={[{ required: true, max: 500 }]}
        >
          <Input
            placeholder="Company Address (Required)"
            prefix={<HomeOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="area_of_working"
          rules={[
            {
              required: true,
              message: "You must add at least one area of working!",
            },
          ]}
        >
          <TreeSelect {...tProps} />
        </Form.Item>

        <div className="msg_contain">
          <Form.Item
            name="description"
            className="text_area_wrapper"
            rules={[
              {
                required: true,
                max: 500,
              },
            ]}
          >
            <TextArea
              allowClear
              placeholder="Tell something about your company for growing your business... (Required)"
              autoSize={{ minRows: 5, maxRows: 8 }}
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
          </Form.Item>
          <div className="msgLength">{`${messageLength} / 500 max`}</div>
        </div>

        <ImageUploader
          fileList={fileList}
          setFileList={setFileList}
          name="image"
        />

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
          Or <Link to="supplier-login">Login now!</Link>
        </Form.Item>
      </Form>

      {/* code verification modal start */}
      <CodeVerificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        codeVerify={confirmCode}
        mob={values?.mobile || ""}
        loading={verifyIsLoading}
        reSendCodeLoading={submitLoading}
      />
      {/* code verification modal end */}

      {/* recaptcha-container div must be required for phone varifivation start*/}
      <div id="recaptcha-container"></div>
      {/* recaptcha-container div must be required for phone varifivation end*/}
    </WallCard>
  );
};

export default SupplierRegister;