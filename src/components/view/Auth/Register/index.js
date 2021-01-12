import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { _suplierRegister } from "../../../../service/methods";
import { _sendCode, _captcha } from "../../../../service/helpers";
import { useHistory } from "react-router-dom";
import {
  WallCard,
  CodeVerificationModal,
  Notification,
  TextField,
  CommonBtn,
} from "../../../common";
import { useDispatch, useSelector } from "react-redux";
import { authEpic } from "../../../../store/epics";
import useAxios from "axios-hooks";

const SupplierRegister = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [cResult, setCResult] = useState(null);
  const [verifyIsLoading, seterifyIsLoading] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const history = useHistory();

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
  const dispatch = useDispatch();
  const { signUpIsLoader } = useSelector(({ authReducer }) => authReducer);

  console.log(process.env.REACT_APP_BASE_URL);

  const [
    { data: putData, loading: putLoading, error: putError },
    executePut,
  ] = useAxios(
    {
      // url: "http://localhost:4000/signup",
      url: `${process.env.REACT_APP_BASE_URL}/signup`,
      method: "POST",
    },
    { manual: true }
  );

  useEffect(() => {
    console.log("putLoading", putLoading);
    console.log("putError", putError);
    console.log("putData", putData);
  }, [putLoading, putError, putData]);

  return (
    <WallCard className="supplier_register" heading="Supplier Sign Up">
      <Form
        // initialValues={{ mobile: "11111111111", password: "11111111" }}
        name="normal_login"
        // onFinish={(values) => sendCode(values)}
        // onFinish={(values) => dispatch(authEpic.signUp(values))}
        onFinish={(values) => {
          const { mobile, password } = values;
          executePut({ data: { mobile, password } });
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
          <CommonBtn loading={signUpIsLoader} className="login-form-button">
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
