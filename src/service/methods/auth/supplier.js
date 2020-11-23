import api from "../../api";
import { Notification } from "../../../components/common";
import passwordHash from "password-hash";

const _supplierLogin = (values) => {
  const { mobile, password } = values;
  return api.get(`/supplier-login/${mobile}`);
  // .then((res) => {
  //   console.log(res)
  // const { data, token } = res.data;
  // if (passwordHash.verify(password, data.password)) {
  //   localStorage.setItem("user_token", token);
  //   Notification.success({
  //     message: "Login Success!",
  //   });
  // } else {
  //   Notification.error({
  //     message: "Your account is not registered yet!",
  //     description:
  //       "Please check your mobile number or password and try again thnak you!",
  //   });
  // }
  // })
  // .catch((err) => Notification.error({ message: err.message }));
};

const _suplierRegister = ({ values, uid }) => {
  const { mobile, password } = values;
  return api.post("/supplier-register", {
    time_stemp: Date.now(),
    role: "supplier",
    firebase_uid: uid,
    mobile,
    password: passwordHash.generate(password),
  });
};

export { _suplierRegister, _supplierLogin };

// return Promise.all(
//   fileList.map((file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "pani-wala");
//     return api.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
//   })
// ).then((res) => {});
