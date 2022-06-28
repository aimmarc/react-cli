import axios from 'axios';
import interceptors from './interceptors';
import { getBaseUrl } from './common';
import { stringify } from 'qs';

const instance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 20000,
    headers: { 'Content-type': 'application/json' },
});

interceptors(instance);

export default {
    get(url: string, params?: object) {
        return instance.get(`${url}${params ? '?' : ''}${stringify(params)}`);
    },
    post(url: string, data?: object) {
        return instance.post(url, data);
    },
    put(url: string, data?: object) {
        return instance.put(url, data);
    },
    delete(url: string) {
        return instance.delete(url);
    },
};
