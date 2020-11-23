import React, { useState } from "react";
import { WallCard, TextField, CommonBtn, Notification } from "../../../common";
import { Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import Cookies from "universal-cookie";

export const SupplierLogin = () => {
  const cookies = new Cookies();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form
        name="normal_login"
        onFinish={(value) => {
          setIsLoading(true);
          _supplierLogin(value)
            .then(({ data }) => {
              if (!data?.user) {
                setIsLoading(false);
                return Notification.error({ message: data.message });
              }
              const { access_token, refresh_token, user } = data;
              const options = { path: "/", httpOnly: false };
              cookies.set("access_token", access_token, options);
              cookies.set("refresh_token", refresh_token, options);
              Notification.success({ message: data.message });
              setIsLoading(false);
            })
            .catch(({ message }) => {
              Notification.error({ message: message });
              setIsLoading(false);
            });
        }}
      >
        <TextField
          name="mobile"
          min={10}
          max={10}
          placeholder="Mobile Number"
          type="number"
          addonBefore={<span>+92</span>}
          style={{ width: "100%" }}
        />
        <TextField
          min={8}
          type="password"
          name="password"
          icon={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
        <Form.Item>
          <CommonBtn className="login-form-button" loading={isLoading}>
            Log in
          </CommonBtn>
          Or <Link to="supplier-register">Register now!</Link>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
