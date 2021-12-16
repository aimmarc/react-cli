/**
 * @author aimmarc
 * @filename routerConfig.tsx
 * @date 2021-02-09
 * @description 路由配置
 */
 import { ComponentType } from "react";
 import { RouteComponentProps } from "react-router-dom";
 import History from "history";
 
 export interface IRouter {
     path?: String | any;
     component?: string;
     redirect?: History.LocationDescriptor | String | any;
     routes?: Array<IRouter>;
     name?: string;
     icon?: string;
     exact?: boolean;
     cache?: boolean;
     hideOnMenu?: boolean;
 }
 
 const routerConfig: Array<IRouter> = [
     {
         path: "/user/login",
         cache: false,
         component: "pages/user/Login",
     },
     {
         path: "/",
         component: "layouts/BaseLayout",
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
                         component: "pages/dashboard/Analysis",
                         name: "分析页",
                     },
                     {
                         component: "pages/404",
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
                         component: "pages/form/BaseForm",
                         name: "基础表单",
                     },
                     {
                         path: "/form/step-form",
                         component: 'pages/form/StepForm',
                         name: "分步表单",
                     },
                     {
                         path: "/form/advanced-form",
                         component: "pages/form/AdvancedForm",
                         name: "高级表单",
                     },
                     {
                         component: "pages/404",
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
                         component: "pages/list/search/SearchWrapper",
                         routes: [
                             {
                                 path: "/list/search",
                                 redirect: "/list/search/article",
                             },
                             {
                                 path: "/list/search/article",
                                 component: "pages/list/search/Article",
                                 name: "搜索列表（文章）",
                             },
                             {
                                 path: "/list/search/project",
                                 component: "pages/list/search/Project",
                                 name: "搜索列表（项目）",
                             },
                             {
                                 path: "/list/search/application",
                                 component: "pages/list/search/Application",
                                 name: "搜索列表（应用）",
                             },
                         ],
                     },
                     {
                         path: "/list/table",
                         name: "查询表格",
                         component: "pages/list/TableList",
                     },
                     {
                         path: "/list/table/detail",
                         name: "表格详情",
                         hideOnMenu: true,
                         component: "pages/list/TableList/Detail",
                     },
                     {
                         path: "/list/basicList",
                         name: "标准列表",
                         component: "pages/list/BasicList",
                     },
                     {
                         path: "/list/cardList",
                         name: "卡片列表",
                         component: "pages/list/CardList",
                     },
                     {
                         component: "pages/404",
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
                         component: "pages/detail/BasicDetail",
                     },
                     {
                         path: "/detail/advancedDetail",
                         name: "高级详情页",
                         component: "pages/detail/AdvancedDetail",
                     },
                 ],
             },
             {
                 path: "/result",
                 name: "结果页",
                 icon: "icon-check-circle",
                 routes: [],
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
                         component: "pages/403",
                     },
                     {
                         path: "/error/404",
                         name: "404",
                         component: "pages/404",
                     },
                     {
                         path: "/error/500",
                         name: "500",
                         component: "pages/500",
                     },
                 ],
             },
             {
                 path: "/user",
                 name: "个人页",
                 icon: "icon-user",
                 routes: [
                     {
                         path: "/user",
                         redirect: "/user/user-center",
                     },
                     {
                         path: "/user/user-center",
                         name: "个人中心",
                         component: "pages/user/UserCenter",
                     },
                 ],
             },
             {
                 path: "/setting",
                 name: "设置",
                 icon: "icon-setting",
                 component: "pages/common/Setting",
             },
             {
                 component: "pages/404",
             },
         ],
     },
     {
         component: "pages/404",
     },
 ];
 
 export default routerConfig;
 