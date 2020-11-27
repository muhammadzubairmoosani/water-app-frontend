import api from "../../../config/axiosConfig";
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

const _suplierRegister = ({ values, uid, fileList }) => {
  const {
    company_name,
    name,
    mobile,
    password,
    address,
    area_of_working,
    description,
  } = values;

  return Promise.all(
    fileList.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "pani-wala");
      return api.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
    })
  ).then((res) =>
    api.post("/supplier-register", {
      time_stemp: Date.now(),
      role: "supplier",
      firebase_uid: uid,
      company_name,
      name,
      mobile,
      password: passwordHash.generate(password),
      address,
      images: res.map(({ data }) => data.secure_url),
      area_of_working,
      description,
    })
  );
};

export { _suplierRegister, _supplierLogin };
