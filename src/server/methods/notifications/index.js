import api from "../../config/api";
const { notification } = require("antd");

notification.config({
  duration: 4.5,
});

const _contactUs = (values) => {
  const { name, mobile, message } = values;
  api
    .post("./contact-us", {
      name: name,
      mobile: mobile,
      message: message,
    })
    .then(() => {
      notification.success({
        message: "Thanks for contacting us.",
        description: "Your message has been received.",
      });
    })
    .catch((err) =>
      notification.error({
        message: err.message,
      })
    );
};

export { _contactUs };
