import React, { useContext } from "react";
import { WallCard, TextField, CommonBtn, Notification } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import useAxios from "axios-hooks";
import { ThemeContext } from "../../../../service/helpers";

export const SupplierLogin = () => {
  const [form] = Form.useForm();
  const { setUser } = useContext(ThemeContext);
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
              Notification.success({
                message: "Your message has been received.",
              });
            })
            .catch((error) =>
              Notification.error({ message: error.response.data.message })
            );
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
