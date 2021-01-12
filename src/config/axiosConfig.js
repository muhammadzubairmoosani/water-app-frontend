import axios from "axios";
import { configure } from "axios-hooks";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default configure({ instance });

// headers: {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   Authorization: `Bearer ${cookies.get("access_token")}`,
// },
