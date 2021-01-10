import { authAction } from "../actions";
import { Notification } from "../../components/common";
import { axios } from "../../config";

export default class authEpic {
  static login(data) {
    return (dispatch) => {
      const { mobile, password } = data;
      axios
        .get("/login", { params: { mobile, password } })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((error) => {
          Notification.error({ message: error?.response?.data?.message });
        });
    };
  }

  // static signUp(data) {
  //   return async (dispatch) => {
  //     dispatch(authAction.signUpIsLoading());
  //     const { mobile, password } = data;
  //     try {
  //       const { data } = await axios.post("/signup", {
  //         time_stemp: Date.now(),
  //         role: "supplier",
  //         firebase_uid: "uid",
  //         mobile,
  //         password,
  //       });
  //       Notification.success({ message: data.message });
  //       dispatch(authAction.signUpSuccess());
  //     } catch ({ message }) {
  //       Notification.error({ message: message });
  //       dispatch(authAction.signUpFailure());
  //     }
  //   };
  // }

  //   static isLoggedIn() {
  //     return (dispatch) => {
  //       dispatch(authAction.isLoggedInIsLoading());
  //       const token = cookies.get("access_token");
  //       debugger;
  //       if (token) {
  //         dispatch(authAction.isLoggedInSuccess(true));
  //       } else {
  //         dispatch(authAction.isLoggedInFailure(false));
  //       }
  //     };
  //   }
}

//     const { access_token, refresh_token, user } = data;
//     const options = { path: "/", httpOnly: false };
//     cookies.set("access_token", access_token, options);
//     cookies.set("refresh_token", refresh_token, options);

// import { authAction } from "../actions";
// import { Notification } from "../../components/common";
// import { axios } from "../../config";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// export default class authEpic {
//   static login(data) {
//     return async (dispatch) => {
//       dispatch(authAction.loginIsLoading());
//       const { mobile, password } = data;
//       try {
//         const res = await axios.get(`/supplier-login`, {
//           params: {
//             mobile,
//             password,
//           },
//         });
//         const { access_token, user } = res.data;
//         const options = { path: "/", httpOnly: false };
//         cookies.set("access_token", access_token, options);
//         dispatch(authAction.loginSuccess(user));
//       } catch (err) {
//         Notification.error({ message: err?.response?.data?.message });
//         dispatch(authAction.loginFailure());
//       }
//     };
//   }

//   static signUp(data) {
//     return async (dispatch) => {
//       dispatch(authAction.signUpIsLoading());
//       const { mobile, password } = data;
//       try {
//         const { data } = await axios.post("/supplier-register", {
//           time_stemp: Date.now(),
//           role: "supplier",
//           firebase_uid: "uid",
//           mobile,
//           password,
//         });
//         Notification.success({ message: data.message });
//         dispatch(authAction.signUpSuccess());
//       } catch ({ message }) {
//         Notification.error({ message: message });
//         dispatch(authAction.signUpFailure());
//       }
//     };
//   }

//   static isLoggedIn() {
//     return (dispatch) => {
//       dispatch(authAction.isLoggedInIsLoading());
//       const token = cookies.get("access_token");
//       debugger;
//       if (token) {
//         dispatch(authAction.isLoggedInSuccess(true));
//       } else {
//         dispatch(authAction.isLoggedInFailure(false));
//       }
//     };
//   }
// }

// //     const { access_token, refresh_token, user } = data;
// //     const options = { path: "/", httpOnly: false };
// //     cookies.set("access_token", access_token, options);
// //     cookies.set("refresh_token", refresh_token, options);
