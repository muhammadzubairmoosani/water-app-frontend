import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { _sendCode, _captcha } from "../../../../service/helpers";
import { useHistory } from "react-router-dom";
import useAxios from "axios-hooks";
import {
  WallCard,
  CodeVerificationModal,
  Notification,
  TextField,
  CommonBtn,
} from "../../../common";

const SupplierRegister = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [confirmResult, setConfirmResult] = useState(null);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const { push } = useHistory();
  const [form] = Form.useForm();

  const sendCode = (values) => {
    setSubmitIsLoading(true);

    _sendCode(values.mobile.substring(1))
      .then((confirmResult) => {
        setConfirmResult(confirmResult);
        setValues(values);
        setModal(true);
        setSubmitIsLoading(false);
      })
      .catch(({ message }) => {
        Notification.error({ message });
        setSubmitIsLoading(false);
      });
  };

  const confirmCode = (code) => {
    if (!code) return;

    setVerifyIsLoading(true);

    confirmResult
      .confirm(code)
      .then(({ user }) => {
        values.firebase_uid = user.uid;

        signup({ data: values })
          .then(() => {
            form.resetFields();
            push("/login");
            Notification.success({
              message: "Your account has been successfully created.",
            });
          })
          .catch((error) => {
            console.log("signup err", error);
            Notification.error({ message: error?.response?.data?.message });
          });
      })
      .catch(({ message }) => {
        Notification.error({ message });
        setVerifyIsLoading(false);
      });
  };

  useEffect(() => _captcha("supplier-registration-recaptcha-container"), []);

  const [{}, signup] = useAxios(
    { url: "/signup", method: "POST" },
    { manual: true }
  );

  return (
    <WallCard className="supplier_register" heading="Supplier Sign Up">
      <Form form={form} name="normal_login" onFinish={sendCode}>
        <TextField
          required={true}
          name="mobile"
          min={11}
          max={11}
          placeholder="Mobile number"
          type="number"
          icon={<PhoneOutlined />}
        />
        <TextField
          required={true}
          name="password"
          min={8}
          placeholder="Password"
          icon={<LockOutlined />}
          type="password"
        />
        <Form.Item>
          <CommonBtn loading={submitIsLoading} className="login-form-button">
            Register
          </CommonBtn>
          Or <Link to="login">Login now!</Link>
        </Form.Item>
      </Form>

      {/* code verification modal */}
      <CodeVerificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        codeVerify={confirmCode}
        mob={values?.mobile || ""}
        loading={verifyIsLoading}
        reSendCodeLoading={submitIsLoading}
      />

      {/* recaptcha-container div with id must be required for phone varifivation start*/}
      <div id="supplier-registration-recaptcha-container"></div>
    </WallCard>
  );
};

export default SupplierRegister;
