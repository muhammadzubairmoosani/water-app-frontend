import React, { useContext } from "react";
import { WallCard, TextField, CommonBtn, Notification } from "../../../common";
import { Form } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { _supplierLogin } from "../../../../service/methods";
import useAxios from "axios-hooks";
import { ThemeContext } from "../../../../service/helpers";
import { firebase } from "../../../../config";

export const SupplierLogin = () => {
  const [form] = Form.useForm();
  const { setUser } = useContext(ThemeContext);
  const [{ loading }, login] = useAxios(
    { url: "/login", method: "POST" },
    { manual: true }
  );

  const auth = firebase.auth();

  const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    // firebase.auth().signInWithRedirect(facebookProvider);
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        console.log(res);
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // firebase
    //   .auth()
    //   .signInWithPopup(facebookProvider)
    //   // .getRedirectResult()
  };

  // const submitSignedInOrNot = () => {
  //   // firebase.auth().onAuthStateChanged((user) => {
  //   //   if (user) {
  //   //     console.log(user);
  //   //   } else {
  //   //     console.log("User is not Signed In");
  //   //   }
  //   // });
  //   const user = firebase.auth().currentUser;

  //   if (user) {
  //     console.log(user);

  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     // ...
  //   } else {
  //     console.log("User is not Signed In");
  //     // No user is signed in.
  //   }
  // };

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
          Or <Link to="supplier-register">Sign Up now!</Link>
        </Form.Item>
      </Form>

      <button onClick={signInWithFacebook}>sign in with facebook</button>

      {/* <button onClick={submitSignedInOrNot}>Check SignedIn Or Not</button> */}
    </WallCard>
  );
};
