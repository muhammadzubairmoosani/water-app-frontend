import api from "../../../../service/api";
import { Notification } from "../../../../components/common";
import passwordHash from "password-hash";

const _buyerLogin = (values) => {
  const { mobile, password } = values;
  api
    .get(`/buyer-login/${mobile}`)
    .then(({ data }) => {
      if (passwordHash.verify(password, data.password)) {
        Notification.success({
          message: "Login Success!",
        });
      } else {
        Notification.error({
          message: "Your account is not registered yet!",
          description:
            "Please check your mobile number and password and try again thnak you!",
        });
      }
    })
    .catch((err) => Notification.error({ message: err.message }));
};

const _buyerRegister = (values,uid) => {
  const { name, mobile, password, address } = values;
  console.log({uid})
  api
    .post("/buyer-register", {
      time_stemp: Date.now(),
      user_type: "buyer",
      name: name,
      mobile: mobile,
      password: passwordHash.generate(password),
      address: address,
    })
    .then(() =>
      Notification.success({
        message: "Thanks for create account.",
        description: "Your account has been successfully created!",
      })
    )
    .catch((err) => Notification.error({ message: err.message }));
};

export { _buyerRegister, _buyerLogin };
