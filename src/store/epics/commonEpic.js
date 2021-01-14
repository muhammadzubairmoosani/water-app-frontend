// import { commonAction } from "../actions";
// import { Notification } from "../../components/common";
// import { axios } from "../../config";

// export default class commonEpic {
//   static contactUs(data, form) {
//     const { name, mobile, message } = data;

//     return (dispatch) => {
//       dispatch(commonAction.contactUsIsLoading());
//       axios
//         .post("/contact-us", {
//           time_stemp: Date.now(),
//           name,
//           mobile,
//           message,
//         })
//         .then(() => {
//           form.current.resetFields();
//           Notification.success({
//             message: "Thanks for contacting us.",
//             description: "Your message has been received.",
//           });
//           dispatch(commonAction.contactUsSuccess());
//         })
//         .catch(({ message }) => {
//           Notification.error({ message: message });
//           dispatch(commonAction.contactUsFailure());
//         });
//     };
//   }
// }
