import React from "react";
import { WallCard, TextField, CommonBtn } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import useAxios from "axios-hooks";

export const SupplierLogin = () => {
  const [{ data, loading, error }, login] = useAxios(
    { url: "/login", method: "POST" },
    { manual: true }
  );

  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form
        name="normal_login"
        onFinish={(values) => {
          const { mobile, password } = values;
          login({ data: { mobile, password } });
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
          <CommonBtn className="login-form-button" loading={loading}>
            Log in
          </CommonBtn>
          Or <Link to="supplier-register">Sign Up now!</Link>
        </Form.Item>
      </Form>
    </WallCard>
  );
};
