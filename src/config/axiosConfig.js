import Axios from "axios";
import { configure, makeUseAxios } from "axios-hooks";
import LRU from "lru-cache";

const axios = Axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL
});

// const useAxios = makeUseAxios({
//   axios: axios.create({ baseURL: process.env.REACT_APP_BASE_URL })
// })


const cache = new LRU({ max: 10 });

configure({ axios, cache });



export default axios;
