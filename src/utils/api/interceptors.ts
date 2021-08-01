
import { AxiosRequestConfig, AxiosResponse } from "axios";
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
      return response;
    },
    (err: any) => {
      return Promise.reject(err);
    }
  );
}
