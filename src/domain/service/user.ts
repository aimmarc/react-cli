import useRequest from '@umijs/use-request';
import { login } from '../api/user';

export interface IUserLoginParams {
    password: string;
    username: string;
}

/**
 * 登录
 * @returns
 */
const useLogin = <R = any>(callback: (data: R, params: any) => void) => {
    const { run, data, loading } = useRequest<R>(login, {
        manual: true,
        onSuccess: callback,
    });

    return { run, data, loading };
};

export { useLogin };
