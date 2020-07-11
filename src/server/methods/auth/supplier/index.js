import api from "../../../config/api";
const passwordHash = require("password-hash");
const { notification } = require("antd");
// require("dotenv").config();

notification.config({
  duration: 4,
});

const _signUpSupplier = (values) => {
  console.log({ values });
  const file = new FormData();
  file.append("upload_preset", "pani-wala");
  const urls = [];
  values.map((image) => {
    file.append("file", image);
    api
      .post("https://api.cloudinary.com/v1_1/pani-wala/image/upload", file)
      .then(({ data }) => urls.push(data.secure_url))
      .catch((err) => notification.error({ message: err.message }));
  });
  console.log(urls)
};

export { _signUpSupplier };

//   const {  name, mobile, password, address } = values;
//   api
//     .post("./buyer-register", {
//       name: name,
//       mobile: mobile,
//       password: passwordHash.generate(password),
//       address: address,
//     })
//     .then(() => {
//       notification.success({
//         message: "Thanks for create account.",
//         description: "Your account has been successfully created!",
//       });
//     })
//     .catch((err) =>
//       notification.error({
//         message: err.message,
//       })
//     );
