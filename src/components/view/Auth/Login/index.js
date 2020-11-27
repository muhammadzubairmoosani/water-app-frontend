import React, { useState } from "react";
import { WallCard, TextField, CommonBtn, Notification } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { authEpic } from "../../../../store/epics";

export const SupplierLogin = () => {
  // const cookies = new Cookies();
  const dispatch = useDispatch();
  const { isLoggedInLoader } = useSelector(({ authReducer }) => authReducer);

  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form
        name="normal_login"
        onFinish={(values) => dispatch(authEpic.login(values))}

        // onFinish={(value) => {
        // setIsLoading(true);
        // _supplierLogin(value)
        //   .then(({ data }) => {
        //     if (!data?.user) {
        //       setIsLoading(false);
        //       return Notification.error({ message: data.message });
        //     }
        //     const { access_token, refresh_token, user } = data;
        //     const options = { path: "/", httpOnly: false };
        //     cookies.set("access_token", access_token, options);
        //     cookies.set("refresh_token", refresh_token, options);
        //     Notification.success({ message: data.message });
        //     setIsLoading(false);
        //   })
        //   .catch(({ message }) => {
        //     Notification.error({ message: message });
        //     setIsLoading(false);
        //   });
        // }}
      >
        <TextField
          required={true}
          name="mobile"
          min={11}
          max={11}
          placeholder="03002233445"
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
          <CommonBtn className="login-form-button" loading={isLoggedInLoader}>
            Log in
          </CommonBtn>
          Or <Link to="supplier-register">Sign Up now!</Link>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
