import React, { useState, useEffect, useContext } from "react";
import { Form } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { _sendCode, _captcha } from "../../../../service/helpers";
// import { useHistory } from "react-router-dom";
import {
  WallCard,
  CodeVerificationModal,
  TextField,
  CommonBtn,
  toast,
} from "../../../common";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../../config";
import { supplier } from "../../../../schema";
import { ThemeContext } from "../../../../service/helpers";

const SupplierRegister = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({});
  const [confirmResult, setConfirmResult] = useState(null);
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const { setUser } = useContext(ThemeContext);
  // const { push } = useHistory();
  const [form] = Form.useForm();

  const isAlreadyExistsInDB = (phoneNumber) => {
    return new Promise((resolve) => {
      const q = query(
        collection(db, "users"),
        where("phoneNumberPrimary", "==", `+92${phoneNumber}`)
      );
      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const flag = doc.exists();
            resolve(flag);
            if (flag) {
              setUser(doc.data());
              console.log(doc.id, " => ", doc.data());
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  // const isAlreadyExistsInDB =  (phoneNumber) => {
  //   let flag = false;
  //   const q = query(
  //     collection(db, "users"),
  //     where("phoneNumberPrimary", "==", `+92${phoneNumber}`)
  //   );
  //   getDocs(q)
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         flag = doc.exists();
  //         debugger
  //         if (flag) {
  //           setUser(doc.data());
  //           console.log(doc.id, " => ", doc.data());
  //         }
  //       });
  //     })
  //     .catch((err) => console.log(err));
  //     debugger
  //     return flag;
  // };

  const sendCode = async (values) => {
    setSubmitIsLoading(true);
    const phoneNumber = values.phoneNumber.substring(1);

    isAlreadyExistsInDB(phoneNumber).then((res) => {
      if (!res) {
        _sendCode(phoneNumber)
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
      } else {
        setSubmitIsLoading(false);
      }
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
          createdAt: Date.now(),
          uid: user.uid,
          phoneNumberPrimary: user.phoneNumber,
          username: values.username,
        };

        setDoc(doc(db, "users", user.uid), supplierSchema)
          .then(() => {
            form.resetFields();
            toast.success("Account has been created successfully.");
            setModal(false);
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
          defaultValue="moosani"
        />
        <TextField
          required={true}
          name="phoneNumber"
          min={11}
          max={11}
          placeholder="Mobile number"
          type="number"
          icon={<PhoneOutlined />}
          defaultValue="03152396525"
        />
        <Form.Item>
          <CommonBtn loading={submitIsLoading} className="login-form-button">
            Start
          </CommonBtn>
        </Form.Item>
      </Form>

      {/* code verification modal */}
      <CodeVerificationModal
        modal={modal}
        setModal={setModal}
        reSendCode={() => console.log("re-send code")}
        codeVerify={confirmCode}
        mob={values?.phoneNumber || ""}
        loading={verifyIsLoading}
        reSendCodeLoading={submitIsLoading}
      />

      {/* recaptcha-container div with id must be required for phone varifivation start*/}
      <div id="supplier-registration-recaptcha-container"></div>
    </WallCard>
  );
};

export default SupplierRegister;
