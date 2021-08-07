import React, { useContext, useState } from "react";
import { WallCard, TextField, CommonBtn, GoogleButton, Notification } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import useAxios from "axios-hooks";
import { firebase } from "../../../../config";
import { ThemeContext, _signInWithGoogle } from "../../../../service/helpers";

export const SupplierLogin = () => {
  const [form] = Form.useForm();
  const { setUser } = useContext(ThemeContext);
  const [signInwithGoogleIsLoading, setSignInwithGoogleIsLoading] = useState(false)
  // const [signInwithFacebookIsLoading, setSignInwithFacebookIsLoading] = useState(false)
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  // const facebookProvider = new firebase.auth.FacebookAuthProvider();



  const [{ loading }, login] = useAxios(
    { url: "/login", method: "POST" },
    { manual: true }
  );

  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form
        form={form}
        name="normal_login"
        onFinish={(values) => {
          const { mobile, password } = values;
          login({ data: { mobile, password } })
            .then(({ data }) => {
              setUser(data);
              form.resetFields();
              Notification.success({ message: "Login success." });
            })
            .catch((error) =>
              Notification.error({ message: error?.response?.data?.message })
            );
        }}
      >
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
          <CommonBtn className="login-form-button" loading={loading}>
            Log in
          </CommonBtn>
          Don't have an account? <Link to="supplier-register">Sign Up now!</Link>
        </Form.Item>

        <p style={{ textAlign: 'center' }}>Or</p>

        <GoogleButton onClick={() => _signInWithGoogle(setSignInwithGoogleIsLoading, googleProvider)} />


        {/* <CommonBtn block={false} icon={<GoogleOutlined />}
        loading={signInwithGoogleIsLoading}
        onClick={() => _signInWithGoogle(setSignInwithGoogleIsLoading, googleProvider)}
        className="login-form-button">
        Sign up with Google
      </CommonBtn> */}

        {/* <CommonBtn block={false} icon={<FacebookFilled />}
        loading={signInwithFacebookIsLoading}
        onClick={() => _signInWithGoogle(setSignInwithFacebookIsLoading, facebookProvider)}
        className="login-form-button">
        Sign up with Facebook
      </CommonBtn> */}

      </Form>
    </WallCard>
  );
};
