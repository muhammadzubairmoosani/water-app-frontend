import api from "../../api";
import { Notification } from "../../../components/common";
import passwordHash from "password-hash";

const _supplierLogin = (values) => {
  const { mobile, password } = values;
  api
    .get(`/supplier-login/${mobile}`)
    .then(({ data }) => {
      if (passwordHash.verify(password, data.password)) {
        Notification.success({
          message: "Login Success!",
        });
      } else {
        Notification.error({
          message: "Your account is not registered yet!",
          description:
            "Please check your mobile number or password and try again thnak you!",
        });
      }
    })
    .catch((err) => Notification.error({ message: err.message }));
};

const _suplierRegister = ({ values, uid, fileList }) => {
  const {
    company_name,
    name,
    mobile1,
    password,
    address,
    area_of_working,
    description,
  } = values;

  console.log("values", values);

  Promise.all(
    fileList.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "pani-wala");
      return api.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
    })
  )
    .then((res) =>
      api.post("/supplier-register", {
        time_stemp: Date.now(),
        role: "supplier",
        firebase_uid: uid,
        company_name,
        name,
        mobile1,
        password: passwordHash.generate(password),
        address,
        images: res.map(({ data }) => data.secure_url),
        area_of_working,
        description,
      })
    )
    .then(() =>
      Notification.success({
        message: "Your account has been successfully created!",
      })
    )
    .catch((err) => Notification.error({ message: err.message }));
};

export { _suplierRegister, _supplierLogin };
