/**
 * @author aimmarc
 * @filename routerConfig.tsx
 * @date 2021-02-09
 * @description 路由配置
 */
import React from "react";
import History from "history";
import Detail from "@/pages/detail/BasicDetail";
import NotFound from "@/pages/404";
import BaseLayout from "@/layouts/BaseLayout";
import Login from "@/pages/user/Login";
import Analysis from "@/pages/dashboard/Analysis";
import BaseForm from "@/pages/form/BaseForm";
import Article from "@/pages/list/search/Article";
import Setting from "@/pages/common/Setting";
import TableList from "@/pages/list/TableList";
import BasicList from "@/pages/list/BasicList";
import CardList from "@/pages/list/CardList";
import AdvancedDetail from "@/pages/detail/AdvancedDetail";
import NotAccess from "@/pages/403";
import ServerError from "@/pages/500";

export interface IRouter {
    path?: String | any;
    component?: React.FC | React.ComponentClass;
    redirect?: History.LocationDescriptor | String | any;
    routes?: Array<IRouter>;
    name?: string;
    icon?: string;
    exact?: boolean;
    cache?: boolean;
}

const routerConfig: Array<IRouter> = [
    {
        path: "/user/login",
        cache: false,
        component: Login,
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
                name: "表单页",
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
                name: "列表页",
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
                        component: TableList,
                    },
                    {
                        path: "/list/basicList",
                        name: "标准列表",
                        component: BasicList,
                    },
                    {
                        path: "/list/cardList",
                        name: "卡片列表",
                        component: CardList,
                    },
                    {
                        component: NotFound,
                    },
                ],
            },
            {
                path: "/detail",
                name: "详情页",
                icon: "icon-detail",
                routes: [
                    {
                        path: "/detail",
                        redirect: "/detail/basicDetail",
                    },
                    {
                        path: "/detail/basicDetail",
                        name: "基础详情页",
                        component: Detail,
                    },
                    {
                        path: "/detail/advancedDetail",
                        name: "高级详情页",
                        component: AdvancedDetail,
                    },
                ],
            },
            {
                path: "/error",
                icon: "icon-error",
                name: "异常页",
                routes: [
                    {
                        path: "/error",
                        redirect: "/error/404",
                    },
                    {
                        path: "/error/403",
                        name: "403",
                        component: NotFound,
                    },
                    {
                        path: "/error/404",
                        name: "404",
                        component: NotAccess,
                    },
                    {
                        path: "/error/500",
                        name: "500",
                        component: ServerError,
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
