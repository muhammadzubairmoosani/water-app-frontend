import React, { useState, useEffect } from "react";
import {
  ImageUploader,
  WallCard,
  CodeVerificationModal,
  Notification,
  TextField,
} from "../../../common";
import { Form, Button, TreeSelect, Input } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
import firebase from "../../../../config/index";
const { TextArea } = Input;
const { SHOW_PARENT } = TreeSelect;

const SupplierRegister = () => {
  const [fileList, setFileList] = useState([]);
  const [areaOfService, setAreaOfService] = useState(undefined);
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [cResult, setCResult] = useState(null);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

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
        <TextField
          name="company_name"
          placeholder="Company Name (Required)"
          icon={<UserOutlined className="site-form-item-icon" />}
        />

        <TextField
          name="name"
          min={3}
          placeholder="Owner/Supplier Name (Required)"
          icon={<UserOutlined className="site-form-item-icon" />}
        />

        <TextField
          name="mobile"
          min={10}
          max={10}
          placeholder="Mobile Number (Required)"
          type="number"
          addonBefore={<span>+92</span>}
          subClassname="w_100"
        />

        <TextField
          name="password"
          min={8}
          placeholder="Password (Required)"
          icon={<LockOutlined className="site-form-item-icon" />}
          type="password"
        />

        <TextField
          name="address"
          max={500}
          placeholder="Company Address (Required)"
          icon={<HomeOutlined className="site-form-item-icon" />}
        />

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
            name="message"
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
              placeholder="Type your message..."
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
