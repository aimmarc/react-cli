import { AxiosRequestConfig, AxiosResponse } from "axios";
import { getFailResponse, getResponse } from "./httpResponse";
/**
 * 拦截器
 * @param instance
 */
export default function interceptors(instance: any) {
    instance.interceptors.request.use(
        (conf: AxiosRequestConfig) => {
            return conf;
        },
        (err: any) => {
            return Promise.reject(err);
        }
    );
    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            const { data } = response;
            let ret;
            if (data.code === 0) {
                ret = getResponse(data);
            } else {
                ret = getFailResponse(data);
            }
            return ret;
        },
        (err: any) => {
            return Promise.reject(err);
        }
    );
}
