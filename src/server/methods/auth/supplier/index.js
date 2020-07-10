import api from "../../../config/api";
var passwordHash = require("password-hash");
const { notification } = require("antd");
notification.config({
  duration: 4,
});

const _signUpSupplier = (values) => {
    console.log({values})
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
};

export { _signUpSupplier };
