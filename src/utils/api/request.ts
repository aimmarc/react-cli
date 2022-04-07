import axios from "axios";
import interceptors from "./interceptors";
import { getBaseUrl } from "./common";
import { stringify } from "qs";

const instance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 20000,
    headers: { "Content-type": "application/json" },
});

interceptors(instance);

export default {
    get(url: string, params?: Object) {
        return instance.get(`${url}?${stringify(params)}`);
    },
    post(url: string, data?: Object) {
        return instance.post(url, data);
    },
    put(url: string, data?: Object) {
        return instance.put(url, data);
    },
    delete(url: string) {
        return instance.delete(url);
    }
};
