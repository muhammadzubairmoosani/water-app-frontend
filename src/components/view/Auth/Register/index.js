import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { _sendCode, _captcha } from "../../../../service/helpers";
// import { useHistory } from "react-router-dom";
import {
  WallCard,
  CodeVerificationModal,
  TextField,
  CommonBtn,
  toast
} from "../../../common";
import { setDoc, doc } from 'firebase/firestore'
import { db } from "../../../../config";
import { supplier } from '../../../../schema'

const SupplierRegister = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [confirmResult, setConfirmResult] = useState(null);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  // const { push } = useHistory();
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
        toast.error(message);
        setSubmitIsLoading(false);
      });
  };

  const confirmCode = (code) => {
    if (!code) return;
    setVerifyIsLoading(true);
    confirmResult
      .confirm(code)
      .then(({ user }) => {
        const supplierSchema = {
          ...supplier,
          uid: user.uid,
          phoneNumberPrimary: user.phoneNumber,
          username: values.username,
          createAt: Date.now()
        }
        setDoc(doc(db, "users", user.uid), supplierSchema)
          .then(() => {
            form.resetFields();
            toast.success("Your account has been successfully created.");
            setModal(false)
            setVerifyIsLoading(false);
          })
          .catch((error) => {
            toast.error(error);
            setVerifyIsLoading(false);
          });
      })
      .catch(({ message }) => {
        toast.error(message);
        setVerifyIsLoading(false);
      });
  };

  useEffect(() => _captcha("supplier-registration-recaptcha-container"), []);


  return (
    <WallCard className="supplier_register" heading="Create Your Account">
      <Form form={form} name="normal_login" onFinish={sendCode}>
        <TextField
          required={true}
          name="username"
          min={3}
          max={30}
          placeholder="User name"
          icon={<UserOutlined />}
        />
        <TextField
          required={true}
          name="mobile"
          min={11}
          max={11}
          placeholder="Mobile number"
          type="number"
          icon={<PhoneOutlined />}
          defaultValue='03152396525'
        />
        <Form.Item>
          <CommonBtn loading={submitIsLoading} className="login-form-button">
            Register
          </CommonBtn>
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
