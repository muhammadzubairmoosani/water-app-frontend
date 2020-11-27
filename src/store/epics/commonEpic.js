import { commonAction } from "../actions";
import { Notification } from "../../components/common";
import { axios } from "../../config";

export default class commonEpic {
  static contactUs(data, form) {
    const { name, mobile, message } = data;

    return (dispatch) => {
      dispatch(commonAction.contactUs());
      axios
        .post("/contact-us", {
          time_stemp: Date.now(),
          name,
          mobile,
          message,
        })
        .then(() => {
          form.current.resetFields();
          dispatch(commonAction.contactUsSuccess());
          Notification.success({
            message: "Thanks for contacting us.",
            description: "Your message has been received.",
          });
        })
        .catch(({ message }) => {
          dispatch(commonAction.contactUsFailure());
          Notification.error({
            message: message,
          });
        });
    };
  }
}
