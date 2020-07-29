import api from "../../../service/api";
import { Notification } from "../../../components/common";

const _contactUs = (values) => {
  const { name, mobile, message } = values;
  api
    .post("/contact-us", {
      name: name,
      mobile: mobile,
      message: message,
    })
    .then(() => {
      Notification.success({
        message: "Thanks for contacting us.",
        description: "Your message has been received.",
      });
    })
    .catch((err) =>
      Notification.error({
        message: err.message,
      })
    );
};

export { _contactUs };
