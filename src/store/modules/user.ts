import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";

export interface IUserInfo {
    username: string;
    isLogin: boolean;
}

export interface IUserStore {
    tabs: TTabs[];
    collapsed: boolean;
    userInfo: IUserInfo;
    login(userInfo: IUserInfo): void;
    logout(): void;
}

/**
 * user
 */
class User implements IUserStore {
    tabs: TTabs[] = [];
    collapsed: boolean = false;
    userInfo: IUserInfo =
        this.getDefaultUserInfo();

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * 获取默认值
     * @returns
     */
    getDefaultUserInfo(): IUserInfo {
        const userInfo: IUserInfo = JSON.parse(
            sessionStorage.getItem("USER_INFO") ||
                JSON.stringify({
                    username: "",
                    isLogin: false,
                })
        );
        return userInfo;
    }

    /**
     * 登陆
     * @param userInfo
     */
    @action login = (userInfo: IUserInfo) => {
        this.userInfo = userInfo;
        sessionStorage.setItem(
            "USER_INFO",
            JSON.stringify(userInfo)
        );
    };

    /**
     * 登出
     */
    @action logout = () => {
        this.userInfo = {
            username: "",
            isLogin: false,
        };
        sessionStorage.removeItem("USER_INFO");
    };
}

export default User;
