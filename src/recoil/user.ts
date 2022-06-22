import { TTabs } from '@/components/Layouts/TabBar';
import StorageEnum from '@/utils/constants/storage';
import { atom } from 'recoil';

export interface IUserInfo {
    username: string;
    isLogin: boolean;
    role: string | string[];
    avatar: string;
}

export interface IUserStore {
    tabs: TTabs[];
    collapsed: boolean;
    userInfo: IUserInfo;
}

function getDefaultUserInfo() {
    const userInfo: IUserInfo = JSON.parse(
        sessionStorage.getItem(StorageEnum.USER_INFO) ||
            JSON.stringify({
                username: '',
                isLogin: false,
            }),
    );
    return userInfo;
}

/**
 * 用户信息
 */
const userInfoState = atom<IUserInfo>({
    key: 'userInfoState',
    default: getDefaultUserInfo(),
});

/**
 * collapsedState
 */
const collapsedState = atom<boolean>({
    key: 'collapsedState',
    default: false,
});

export { userInfoState, collapsedState };
