/**
 * @author aimmarc
 * @filename router/index.tsx
 * @date 2021-02-09
 * @param routes
 * @description 生成路由
 */
import React, { ComponentType } from 'react';
import {
    Router,
    Switch,
    Redirect,
    RouteComponentProps,
} from 'react-router-dom';
import routerConfig, { IRouter } from '@/common/config/router.config';
import config from '../common/config/app.config';
import { createHashHistory, createBrowserHistory } from 'history';
import BasicRoute from './BasicRoute';
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
        let tempComponent: any = null;
        if (item.component?.indexOf('pages') === 0) {
            tempComponent = asyncComponent(
                () => import(`@/pages${item.component?.replace('pages', '')}`),
            );
        }
        if (item.component?.indexOf('layouts') === 0) {
            tempComponent = asyncComponent(
                () =>
                    import(
                        `@/layouts${item.component?.replace('layouts', '')}`
                    ),
            );
        }
        if (item.routes) {
            const Wrapper: any = item.component
                ? tempComponent || React.Fragment
                : item.component || React.Fragment;
            component = () => (
                <Wrapper>
                    <Switch>{mapRoutes(item.routes || [])}</Switch>
                </Wrapper>
            );
        } else {
            component = item.component ? tempComponent : undefined;
        }

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
    config.routerMode === 'history'
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
