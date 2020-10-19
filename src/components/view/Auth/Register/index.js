import React, { useState, useEffect } from "react";
import {
  ImageUploader,
  WallCard,
  CodeVerificationModal,
  Notification,
  TextField,
  DynamicTextField,
  MultiSelectDropDown,
  TextAreaField,
  CommonBtn,
} from "../../../common";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
import { _sendCode, _captcha } from "../../../../service/helpers";
import areaList from "../../../../util/areaList.json";

const SupplierRegister = () => {
  const [fileList, setFileList] = useState([]);
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [cResult, setCResult] = useState(null);
  const [isVerifyLoading, setIsVerifyLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const sendCode = (values) => {
    setSubmitLoading(true);
    _sendCode(values.mobile)
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
    setIsVerifyLoading(true);
    cResult
      .confirm(code)
      .then((res) => {
        _suplierRegister({
          values,
          uid: res.user.uid,
          fileList: fileList.map((item) => item.originFileObj),
        });
        setModal(!modal);
        setIsVerifyLoading(false);
      })
      .catch(({ message }) => {
        Notification.error({ message: message });
        setIsVerifyLoading(false);
      });
  };

  useEffect(() => _captcha("supplier-registration-recaptcha-container"), []);

  return (
    <WallCard className="supplier_register" heading="Supplier Register">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={(values) => sendCode(values)}
        // onFinish={(values) => console.log(values)}
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
          name="address"
          max={500}
          placeholder="Company Address (Required)"
          icon={<HomeOutlined className="site-form-item-icon" />}
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
        <MultiSelectDropDown list={areaList.areas} />

        <DynamicTextField />

        <TextAreaField />

        <ImageUploader
          fileList={fileList}
          setFileList={setFileList}
          name="image"
        />

        <CommonBtn
          bottomChildren={
            <>
              Or <Link to="supplier-login">Login now!</Link>
            </>
          }
          loading={submitLoading}
          className="login-form-button"
        >
          Register
        </CommonBtn>
      </Form>

      {/* code verification modal start */}
      <CodeVerificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        codeVerify={confirmCode}
        mob={values?.mobile || ""}
        loading={isVerifyLoading}
        reSendCodeLoading={submitLoading}
      />
      {/* code verification modal end */}

      {/* recaptcha-container div must be required for phone varifivation start*/}
      <div id="supplier-registration-recaptcha-container"></div>
      {/* recaptcha-container div must be required for phone varifivation end*/}
    </WallCard>
  );
};

export default SupplierRegister;
