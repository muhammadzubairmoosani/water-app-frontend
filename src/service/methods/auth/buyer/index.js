import api from "../../../../service/api";
const passwordHash = require("password-hash");
const { notification } = require("antd");
notification.config({
  duration: 4,
});

const _loginBuyer = (values) => {
  const { mobile, password } = values;
  api
    .get(`/buyer-login/${mobile}`)
    .then(({ data }) => {
      if (passwordHash.verify(password, data.password)) {
        notification.success({
          message: "Login Success!",
        });
      } else {
        notification.error({
          message: "Your account is not registered yet!",
          description:
            "Please check your mobile number and password and try again thnak you!",
        });
      }
    })
    .catch((err) => notification.error({ message: err.message }));
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
