import axios from "axios";
import md5 from "md5";

const ts = 100;

const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const hash = md5(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

export const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/`,
  params: {
    ts,
    apikey: REACT_APP_PUBLIC_KEY,
    hash,
  },
});
