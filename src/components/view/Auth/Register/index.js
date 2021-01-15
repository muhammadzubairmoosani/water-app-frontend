import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
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
  const [cResult, setCResult] = useState(null);
  const [verifyIsLoading, seterifyIsLoading] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const { push } = useHistory();
  const [form] = Form.useForm();

  // const sendCode = (values) => {
  //   setSubmitIsLoading(true);
  //   _sendCode(values.mobile)
  //     .then((confirmResult) => {
  //       setCResult(confirmResult);
  //       setValues(values);
  //       setModal(!modal);
  //       setSubmitIsLoading(false);
  //     })
  //     .catch(({ message }) => {
  //       Notification.error({ message: message });
  //       setSubmitIsLoading(false);
  //     });
  // };

  // const confirmCode = (code) => {
  //   if (!code) return;
  //   seterifyIsLoading(true);
  //   cResult
  //     .confirm(code)
  //     .then(({ user }) => {
  //       _suplierRegister({
  //         values,
  //         uid: user.uid,
  //       })
  //         .then(({ data }) => {
  //           history.push("/login");
  //           Notification.success({ message: data });
  //           setModal(!modal);
  //           seterifyIsLoading(false);
  //         })
  //         .catch(({ message }) => {
  //           Notification.error({ message: message });
  //           seterifyIsLoading(false);
  //         });
  //     })
  //     .catch(({ message }) => {
  //       Notification.error({ message: message });
  //       seterifyIsLoading(false);
  //     });
  // };

  useEffect(() => _captcha("supplier-registration-recaptcha-container"), []);
  const [{ loading }, signup] = useAxios(
    { url: "/signup", method: "POST" },
    { manual: true }
  );

  return (
    <WallCard className="supplier_register" heading="Supplier Sign Up">
      <Form
        form={form}
        name="normal_login"
        onFinish={(values) => {
          const { mobile, password } = values;
          signup({ data: { mobile, password } })
            .then(() => {
              form.resetFields();
              push("/login");
              Notification.success({
                message: "Your account has been successfully created.",
              });
            })
            .catch((error) => {
              Notification.error({ message: error.response.data.message });
            });
        }}
      >
        <TextField
          required={true}
          name="mobile"
          // min={11}
          // max={11}
          placeholder="03002233445"
          type="number"
          icon={<PhoneOutlined />}
        />
        <TextField
          required={true}
          name="password"
          // min={8}
          placeholder="Password"
          icon={<LockOutlined />}
          type="password"
        />
        <Form.Item>
          {/* <CommonBtn loading={submitIsLoading} className="login-form-button"> */}
          <CommonBtn loading={loading} className="login-form-button">
            Register
          </CommonBtn>
          Or <Link to="login">Login now!</Link>
        </Form.Item>
      </Form>

      {/* code verification modal start */}
      <CodeVerificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        // codeVerify={confirmCode}
        mob={values?.mobile || ""}
        loading={verifyIsLoading}
        reSendCodeLoading={submitIsLoading}
      />
      {/* code verification modal end */}

      {/* recaptcha-container div must be required for phone varifivation start*/}
      <div id="supplier-registration-recaptcha-container"></div>
      {/* recaptcha-container div must be required for phone varifivation end*/}
    </WallCard>
  );
};

export default SupplierRegister;
