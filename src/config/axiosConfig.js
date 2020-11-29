import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { token: cookies.get("access_token") },
});

// headers: {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   Authorization: `Bearer ${cookies.get("access_token")}`,
// },
