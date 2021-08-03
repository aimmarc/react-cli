import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../constants/config";
import interceptors from "./interceptors";

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 20000,
    headers: { "Content-type": "application/json" },
});

interceptors(instance);

class Api {
    get(url: string) {
        return instance.get(url);
    }
    post(url: string, data?: Object) {
        return instance.post(url, data);
    }
    put(url: string, data?: Object) {
        return instance.put(url, data);
    }
    delete(url: string) {
        return instance.delete(url);
    }
}

export default new Api();
