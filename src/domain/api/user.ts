import request from '@/utils/api/request';

export interface IUserLoginParams {
    password: string;
    username: string;
}

export async function login(body?: Object) {
    return request.post('/login/account', body);
}
