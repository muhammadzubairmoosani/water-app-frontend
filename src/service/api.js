import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// const token = cookies.get("token");
// console.log(token)
// const axiosClient = () => {
//   return axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     headers: { "token": token },
//   });
// };
// export default axiosClient;
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
    headers: { "token": cookies.get("token") },
});
