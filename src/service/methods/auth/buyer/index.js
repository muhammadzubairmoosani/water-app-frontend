import api from "../../../../service/api";
const passwordHash = require("password-hash");
const { notification } = require("antd");
notification.config({
  duration: 4,
});

const _loginBuyer = (values) => {
  const { mobile, password } = values;
  // console.log(values);
  api
    .get("/buyer-login", {
      mobile: mobile,
    })
    .then(
      (user) => console.log(user)
      // notification.success({
      //   message: "Thanks for create account.",
      //   description: "Your account has been successfully created!",
      // })
    )
    .catch((err) => notification.error({ message: err.message }));
  // password: passwordHash.generate(password),
};

const _registerBuyer = (values) => {
  const { name, mobile, password, address } = values;
  api
    .post("/buyer-register", {
      name: name,
      mobile: mobile,
      password: passwordHash.generate(password),
      address: address,
    })
    .then(() =>
      notification.success({
        message: "Thanks for create account.",
        description: "Your account has been successfully created!",
      })
    )
    .catch((err) => notification.error({ message: err.message }));
};

export { _registerBuyer, _loginBuyer };
