import React, { memo } from "react";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import routerConfig, { IRouter } from "../config/router.config";
import config from "../config/app";

/**
 * @author aimmarc
 * @filename router/index.tsx
 * @date 2021-02-09
 * @param routes
 * @description 生成路由
 */
const mapRoutes = (routes: Array<IRouter>) =>
  routes.map((item: IRouter, index) => {
    let component;
    if (item.routes) {
      const Wrapper = item.component || React.Fragment;
      component = () => (
        <Wrapper>
          <Switch>{mapRoutes(item.routes || [])}</Switch>
        </Wrapper>
      );
    } else {
      component = item.component;
    }

    return !!item.redirect ? (
      <Route
        exact
        path={item.path}
        render={() => <Redirect to={item.redirect} />}
        key={index}
      />
    ) : (
      <Route
        exact={!item.routes}
        path={item.path}
        component={component}
        key={index}
      />
    );
  });

const BasicRoute = () =>
  config.routerMode === "history" ? (
    <BrowserRouter>
      <Switch>{mapRoutes(routerConfig)}</Switch>
    </BrowserRouter>
  ) : (
    <HashRouter>
      <Switch>{mapRoutes(routerConfig)}</Switch>
    </HashRouter>
  );

export default memo(BasicRoute);
