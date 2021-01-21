
import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import routerConfig, { IRouter } from "./routerConfig";


// 循环路由
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

const BasicRoute = () => (
  <HashRouter>
    <Switch>{mapRoutes(routerConfig)}</Switch>
  </HashRouter>
);

export default BasicRoute;
