import api from "../../../service/api";

const _contactUs = (values) => {
  const { name, mobile, message } = values;
  return api.post("/contact-us", {
    time_stemp: Date.now(),
    name,
    mobile,
    message,
  });
};

export { _contactUs };
