import api from "../../../config/api";
const { notification } = require("antd");

notification.config({
  duration: 4,
});

const _signUpBuyer = (values) => {
  const { name, mobile, password, address } = values;
console.log(values)

//   api
//     .post("./buyer-register", {
//       name: name,
//       mobile: mobile,
//       password: password,
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

export { _signUpBuyer };
