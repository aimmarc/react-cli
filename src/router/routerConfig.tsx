import Index from "../pages/index";
import Detail from "../pages/detail";
import React from "react";
import History from "history";

export interface IRouter {
  path?: String | any;
  component?: React.FC | React.ComponentClass;
  redirect?: History.LocationDescriptor | String | any;
  routes?: Array<IRouter>;
}

const routerConfig: Array<IRouter> = [
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/index/detail",
    component: Detail,
  },
  {
    path: "/",
    redirect: "/index",
  },
];

export default routerConfig;