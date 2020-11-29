import React from "react";
import { WallCard, TextField, CommonBtn } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import { useDispatch, useSelector } from "react-redux";
import { authEpic } from "../../../../store/epics";

export const SupplierLogin = () => {
  const dispatch = useDispatch();
  const { isLoggedInLoader } = useSelector(({ authReducer }) => authReducer);

  return (
    <WallCard className="supplier_login" heading="Supplier Login">
      <Form
        name="normal_login"
        initialValues={{ mobile: "11111111111", password: "11111111" }}
        onFinish={(values) => dispatch(authEpic.login(values))}
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
