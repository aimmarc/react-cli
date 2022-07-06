import { useState } from 'react';
import useFirstEffect from './useFirstEffect';

const authCodes: string[] = [];

/**
 * 权限hook
 * @param authCode
 * @returns
 */
const useAuthority = (authCode: string) => {
    const [isAuth, setIsAuth] = useState(false);

    useFirstEffect(() => {
        if (authCodes.includes(authCode)) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    });

    /**
     * 包裹函数
     * @param component
     * @returns
     */
    const show = (component: any) => {
        if (isAuth) {
            return component;
        }
        return null;
    };

    return {
        show,
        isAuth,
    };
};

export default useAuthority;
