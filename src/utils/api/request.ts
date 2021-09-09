import axios from "axios";
import config from "@/config/app";
import interceptors from "./interceptors";
import { getBaseUrl } from "./common";

const instance = axios.create({
    baseURL: getBaseUrl(),
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
