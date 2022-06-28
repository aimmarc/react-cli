import useAtomState from '@/recoil/lib/useAtomState';
import { IUserInfo, userInfoState } from '@/recoil/user';
import { IBaseResponse } from '@/utils/api/httpResponse';
import { getQueryVariable } from '@/utils/common';
import StorageEnum from '@/utils/constants/storage';
import useRequest from '@umijs/use-request';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { login } from '../../api/user';

/**
 * 登录
 * @returns
 */
const useLogin = () => {
    const [_, setUserInfo] = useUserInfo();
    const history = useHistory();
    const { run, loading } = useRequest<IBaseResponse>(login, {
        manual: true,
        onSuccess: (ret: IBaseResponse) => {
            if (ret.code === 10000) {
                const redirectUrl = getQueryVariable('redirectUrl');
                setUserInfo({ ...ret.data, isLogin: true });
                if (redirectUrl) {
                    location.href = redirectUrl;
                    return;
                }
                history.replace('/');
            } else {
                message.error(ret.message);
            }
        },
    });
    return { run, loading };
};

/**
 * 退出登录
 * @returns
 */
const useLogout = () => {
    const history = useHistory();
    const [_, setUserInfo] = useUserInfo();
    return function () {
        setUserInfo({
            username: '',
            isLogin: false,
            role: '',
            avatar: '',
        });
        history.replace(`/user/login?redirectUrl=${location.href}`);
    };
};

/**
 * 用户信息
 * @returns
 */
const useUserInfo = (): [IUserInfo, SetterOrUpdater<IUserInfo>] => {
    const [userInfo, setUserInfo] = useAtomState(userInfoState, (state) => {
        sessionStorage.setItem(StorageEnum.USER_INFO, JSON.stringify(state));
    });
    return [userInfo, setUserInfo];
};

export { useLogin, useLogout, useUserInfo };
