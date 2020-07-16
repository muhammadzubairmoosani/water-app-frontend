import api from "../../../../service/api";
import passwordHash from "password-hash";
import { notification } from "antd";
notification.config({
  duration: 4,
});

const _signUpSupplier = ({ values, fileList }) => {
  const {
    company_name,
    name,
    mobile1,
    mobile2,
    password,
    company_address,
  } = values;
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
        company_name,
        name,
        mobile1,
        mobile2,
        password: passwordHash.generate(password),
        company_address,
        images: res.map(({ data }) => data.secure_url),
      })
    )
    .then(() =>
      notification.success({
        message: "Thanks for create account.",
        description: "Your account has been successfully created!",
      })
    )
    .catch((err) => notification.error({ message: err.message }));
};

export { _signUpSupplier };
