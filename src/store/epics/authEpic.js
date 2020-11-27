import { authAction } from "../actions";
import { Notification } from "../../components/common";
import { axios } from "../../config";
import passwordHash from "password-hash";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class authEpic {
  static login(data) {
    return (dispatch) => {
      dispatch(authAction.login());
      const { mobile, password } = data;
      axios
        .get(`/supplier-login/${mobile}`)
        .then((res) => {
          console.log(res);
          // const { data, token } = res.data;

          // if (!data?.user) {
          //     dispatch(authAction.loginFailure());
          //     return Notification.error({ message: data.message });
          //   } else {

          //   }

          if (passwordHash.verify(password, data.password)) {
            //     if (!data?.user) {
            //       setIsLoading(false);
            //       return Notification.error({ message: data.message });
            //     }
            //     const { access_token, refresh_token, user } = data;
            //     const options = { path: "/", httpOnly: false };
            //     cookies.set("access_token", access_token, options);
            //     cookies.set("refresh_token", refresh_token, options);
            //     Notification.success({ message: data.message });
            //     setIsLoading(false);
            // localStorage.setItem("user_token", token);
            // Notification.success({ message: "Login Success!" });
            // dispatch(authAction.loginSuccess());
          } else {
            Notification.error({
              message: "Your mobile or password wrong, Please try again.",
            });
            dispatch(authAction.loginFailure());
          }
        })
        .catch(({ message }) => {
          Notification.error({ message: message });
          dispatch(authAction.loginFailure());
        });
    };
  }
}
