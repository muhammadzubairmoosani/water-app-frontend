import React from "react";
import { WallCard, TextField, CommonBtn } from "../../../common";
import { Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";

export const SupplierLogin = () => (
  <WallCard className="supplier_login" heading="Supplier Login">
    <Form name="normal_login" onFinish={(value) => _supplierLogin(value)}>
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

      <CommonBtn
        className="login-form-button"
        bottomChildren={
          <>
            Or <Link to="supplier-register">Register now!</Link>
          </>
        }
      >
        Log in
      </CommonBtn>
    </Form>
  </WallCard>
);
