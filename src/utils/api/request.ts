import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../constants/config";
import domain from "../constants/target";
import interceptors from "./interceptors";
console.log(domain);

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 20000,
  headers: { "Content-type": "application/json" },
});

interceptors(instance);

class Api {
  get(url: string, config?: AxiosRequestConfig) {
    return instance.get(url, config);
  }
  post(url: string, data?: Object) {
    return instance.post(url, data);
  }
  put(url: string, data?: Object) {
    return instance.put(url, data);
  }
  delete(url: string, config?: AxiosRequestConfig) {
    return instance.delete(url, config);
  }
}

export default new Api();
