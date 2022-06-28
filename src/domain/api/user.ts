import request from '@/utils/api/request';

export async function login(body?: Object) {
    return request.post('/login/account', body);
}
