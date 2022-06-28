import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import config from '@/common/config/app.config';
import { useUserInfo } from '@/domain/model/entity/user';

interface IBasicRouteProps extends RouteProps {}

/**
 * 进行路由守护
 * @param props
 * @returns
 */
const BasicRoute: React.FC<IBasicRouteProps> = (props): React.ReactElement => {
    const [useInfo] = useUserInfo();
    const isLogin = useInfo?.isLogin || false;
    const path: any = props.path;

    return isLogin || config.notTabs.includes(path) ? (
        <Route {...props} />
    ) : (
        <Redirect to="/user/login" />
    );
};

export default BasicRoute;
