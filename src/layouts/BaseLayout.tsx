import React from "react";
import style from "./BaseLayout.less";
import { Header, Sider, TabBar } from "@/components/Layouts";
import routerConfig from "@/config/router.config";
import { resolveMenuData } from "@/utils/resolveMenuData";
import { observer, inject } from "mobx-react";
import { useHistory } from "react-router";
import MainLayout from "./MainLayout";
import cnfig from "@/config/app";

/**
 * 基础布局
 * @param props
 * @returns
 */
const BaseLayout: React.FC<{}> = (props: any): React.ReactElement => {
    const { app } = props;
    const menuData = resolveMenuData(routerConfig);
    const history = useHistory();

    const onCollapsed = () => {
        app.setCollapsed(!app.collapsed);
    };

    const onLogout = () => {
        history.replace(`/user/login?redirectUrl=${location.href}`);
    };

    return (
        <div className={style.baselayoutWraper}>
            <Header
                onCollapsed={onCollapsed}
                collapsed={app.collapsed}
                onLogout={onLogout}
            />
            <Sider menuData={menuData} collapsed={app.collapsed} />
            {cnfig.showTabs && <TabBar tabs={app.tabs} active="" />}
            <MainLayout collapsed={app.collapsed}>{props.children}</MainLayout>
        </div>
    );
};

export default inject("app")(observer(BaseLayout));
