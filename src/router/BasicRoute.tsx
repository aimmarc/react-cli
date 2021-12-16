import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { IUserStore } from '@/store/modules/user'
import config from '@/common/config/app'

interface IBasicRouteProps extends RouteProps {
    user?: IUserStore
}

/**
 * 进行路由守护
 * @param props
 * @returns
 */
const BasicRoute: React.FC<IBasicRouteProps> = (props): React.ReactElement => {
    const { user } = props
    const isLogin = user?.userInfo?.isLogin || false
    const path: any = props.path

    return isLogin || config.notTabs.includes(path) ? (
        <Route {...props} />
    ) : (
        <Redirect to="/user/login" />
    )
}

export default inject('user')(observer(BasicRoute))
