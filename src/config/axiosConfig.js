import Axios from "axios";
import { configure, makeUseAxios } from "axios-hooks";
import LRU from "lru-cache";

console.log(process.env.REACT_APP_BASE_URL)

const axios = Axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

const cache = new LRU({ max: 10 });

export default makeUseAxios({ axios, cache });

// headers: {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   Authorization: `Bearer ${cookies.get("access_token")}`,
// },
