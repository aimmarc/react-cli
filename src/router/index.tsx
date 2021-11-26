/**
 * @author aimmarc
 * @filename router/index.tsx
 * @date 2021-02-09
 * @param routes
 * @description 生成路由
 */
import React, { ComponentType, memo } from "react";
import {
    Router,
    Switch,
    Redirect,
    RouteComponentProps,
} from "react-router-dom";
import routerConfig, { IRouter } from "../config/router.config";
import config from "../config/app";
import { createHashHistory, createBrowserHistory } from "history";
import BasicRoute from "./BasicRoute";
import asyncComponent from './AsyncComponent';

/**
 * 生成路由
 * @param routes
 * @returns
 */
const mapRoutes = (routes: Array<IRouter>) =>
    routes.map((item: IRouter, index) => {
        let component:
            | ComponentType<RouteComponentProps<any>>
            | ComponentType<any>
            | undefined;
        if (item.routes) {
            const Wrapper: any = item.component || React.Fragment;
            component = () => (
                <Wrapper>
                    <Switch>{mapRoutes(item.routes || [])}</Switch>
                </Wrapper>
            );
        } else {
            component = asyncComponent(() => import('@/pages/list/TableList'));// item.component;
        }
        console.log('component', component);
        return !!item.redirect ? (
            <BasicRoute
                exact
                path={item.path}
                render={() => <Redirect to={item.redirect} />}
                key={index}
            />
        ) : (
            <BasicRoute
                exact={!item.routes}
                path={item.path}
                component={component}
                key={index}
            />
        );
    });
const history =
    config.routerMode === "history"
        ? createBrowserHistory()
        : createHashHistory();
/**
 * 路由组件
 * @returns
 */
const RouterComponent = () => (
    <Router history={history}>
        <Switch>{mapRoutes(routerConfig)}</Switch>
    </Router>
);

export { history };

export default RouterComponent;
