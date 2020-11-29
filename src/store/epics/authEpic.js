import { authAction } from "../actions";
import { Notification } from "../../components/common";
import { axios } from "../../config";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class authEpic {
  static login(data) {
    return async (dispatch) => {
      dispatch(authAction.loginIsLoading());
      const { mobile, password } = data;
      try {
        const res = await axios.get(`/supplier-login`, {
          params: {
            mobile,
            password,
          },
        });
        dispatch(authAction.loginSuccess(res));
      } catch (err) {
        Notification.error({ message: err?.response?.data?.message });
        dispatch(authAction.loginFailure());
      }
    };
  }

  static signUp(data) {
    return async (dispatch) => {
      dispatch(authAction.signUpIsLoading());
      const { mobile, password } = data;
      try {
        const { data } = await axios.post("/supplier-register", {
          time_stemp: Date.now(),
          role: "supplier",
          firebase_uid: "uid",
          mobile,
          password,
        });
        Notification.success({ message: data.message });
        dispatch(authAction.signUpSuccess());
      } catch ({ message }) {
        Notification.error({ message: message });
        dispatch(authAction.signUpFailure());
      }
    };
  }
}

//     const { access_token, refresh_token, user } = data;
//     const options = { path: "/", httpOnly: false };
//     cookies.set("access_token", access_token, options);
//     cookies.set("refresh_token", refresh_token, options);
