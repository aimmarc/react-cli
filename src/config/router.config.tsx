/**
 * @author aimmarc
 * @filename routerConfig.tsx
 * @date 2021-02-09
 * @description 路由配置
 */
import Detail from "@/pages/detail";
import NotFound from "@/pages/404";
import React from "react";
import History from "history";
import BaseLayout from "@/layouts/BaseLayout";
import Login from "@/pages/user/Login";
import Analysis from "@/pages/dashboard/Analysis";
import BaseForm from "@/pages/form/BaseForm";
import Article from "@/pages/list/search/Article";
import Setting from "@/pages/common/Setting";
import Table from "@/pages/list/Table";

export interface IRouter {
    path?: String | any;
    component?: React.FC | React.ComponentClass;
    redirect?: History.LocationDescriptor | String | any;
    routes?: Array<IRouter>;
    name?: string;
    icon?: string;
    exact?: boolean;
}

const routerConfig: Array<IRouter> = [
    {
        path: "/user/login",
        component: Login,
    },
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/",
        component: BaseLayout,
        routes: [
            {
                path: "/",
                redirect: "/dashboard/analysis",
            },
            {
                path: "/dashboard",
                name: "仪表盘",
                icon: "icon-dashboard",
                routes: [
                    {
                        path: "/dashboard/analysis",
                        component: Analysis,
                        name: "分析页",
                    },
                    {
                        component: NotFound,
                    },
                ],
            },
            {
                path: "/form",
                name: "表单",
                icon: "icon-edit-square",
                routes: [
                    {
                        path: "/form",
                        redirect: "/form/base-form",
                    },
                    {
                        path: "/form/base-form",
                        component: BaseForm,
                        name: "基础表单",
                    },
                    {
                        component: NotFound,
                    },
                ],
            },
            {
                path: "/list",
                name: "列表",
                icon: "icon-table",
                routes: [
                    {
                        path: "/list",
                        redirect: "/list/search/article",
                    },
                    {
                        path: "/list/search",
                        name: "搜索列表",
                        routes: [
                            {
                                path: "/list/search",
                                redirect: "/list/search/article",
                            },
                            {
                                path: "/list/search/article",
                                component: Article,
                                name: "文章搜索",
                            },
                        ],
                    },
                    {
                        path: "/list/table",
                        name: "查询表格",
                        component: Table,
                    },
                    {
                        component: NotFound,
                    },
                ],
            },
            {
                path: "/setting",
                name: "设置",
                icon: "icon-setting",
                component: Setting,
            },
            {
                component: NotFound,
            },
        ],
    },
    {
        component: NotFound,
    },
];

export default routerConfig;
