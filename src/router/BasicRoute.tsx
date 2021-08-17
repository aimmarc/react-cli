import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IUserStore } from "@/store/modules/user";

interface IBasicRouteProps extends RouteProps {
    user?: IUserStore;
}

const BasicRoute: React.FC<IBasicRouteProps> = (props): React.ReactElement => {
    const { user } = props;
    const isLogin = user?.userInfo?.isLogin || false;

    return isLogin || props.path === "/user/login" ? (
        <Route {...props} />
    ) : (
        <Redirect to="/user/login" />
    );
};

export default inject("user")(observer(BasicRoute));
