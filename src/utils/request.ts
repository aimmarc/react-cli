import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "@/config/app";
import domain from "./constants/target";
console.log(domain);

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 20000,
    headers: { "Content-type": "application/json" },
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
    (conf: AxiosRequestConfig) => {
        return conf;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);

/**
 * 请求实例
 */
const api = {
    get(url: string) {
        return instance.get(url);
    },
    post(url: string, data?: Object) {
        return instance.post(url, data);
    },
    put(url: string, data?: Object) {
        return instance.put(url, data);
    },
    delete(url: string) {
        return instance.delete(url);
    },
};

export default api;
