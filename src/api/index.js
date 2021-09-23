import axios from "axios";
import { yelApiKey } from "../constant";

const api = axios.create({ baseURL: "https://api.yelp.com/v3" });

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${yelApiKey}`;
  console.log(
    `Call an api, url=${config.url}, params=${JSON.stringify(config.params)} `
  );
  return config;
});

export default api;
