import axios, { AxiosRequestConfig } from "axios";
import { API_PREFIX } from "./target";
import { message } from "antd";
import { getStorage } from "./common";
import { STORAGE_TOKEN } from "./constant";

/**
 * 公共请求
 * @param {*} url
 * @param {*} options
 */
function request(
  url: string,
  options: AxiosRequestConfig = {
    method: "GET",
    headers: {},
    data: {},
    params: {},
  }
) {
  options.headers = {
    token: getStorage(STORAGE_TOKEN),
  };
  const defaultOptions = {
    withCredentials: true,
  };
  const newOptions: AxiosRequestConfig = {
    ...defaultOptions,
    ...options,
    url: API_PREFIX + url,
    timeout: 20000,
  };

  if (
    newOptions.method === "POST" ||
    newOptions.method === "PUT" ||
    newOptions.method === "DELETE"
  ) {
    if (!(newOptions.data instanceof FormData)) {
      newOptions.headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        ...newOptions.headers,
      };
    } else {
      // newOptions.data is FormData
      newOptions.headers = {
        Accept: "application/json",
        ...newOptions.headers,
      };
    }
  }
  // 添加拦截器
  const interceptor = axios.interceptors.response.use(
    (response) => {
      const { data: res } = response;
      const { code, message, data } = res;
      if (code === 0) {
        return data;
      } else if (code === 2998 || code === 2999) {
        // store.dispatch("user/logout");
        // history.replace("/login");
        message.error(message);
        return Promise.reject(message);
      } else {
        message.error(message);
        return Promise.reject(message);
      }
    },
    (error) => {
      if (error.response) {
        message.error(error.response.data);
      } else {
        message.error(error.toString());
      }
      return Promise.reject(error);
    }
  );
  const instans = axios(newOptions);
  axios.interceptors.response.eject(interceptor); // 取消拦截器
  return instans;
}

export default request;
