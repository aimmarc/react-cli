import React from "react";
import style from "./BaseLayout.less";
import { Header, Sider, TabBar } from "@/components/Layouts";
import routerConfig from "@/config/router.config";
import { resolveMenuData } from "@/utils/resolveMenuData";
import { observer, inject } from "mobx-react";
import { useHistory } from "react-router";
import MainLayout from "./MainLayout";
import { IAppStore } from "@/store/modules/app";
import { IUserStore } from "@/store/modules/user";

interface IBaseLayoutProps {
    app: IAppStore;
    user: IUserStore;
}

/**
 * 基础布局
 * @param props
 * @returns
 */
const BaseLayout: React.FC<IBaseLayoutProps> = (props): React.ReactElement => {
    const { app, user } = props;
    const { setting } = app;
    const menuData = resolveMenuData(routerConfig);
    const history = useHistory();

    const onCollapsed = () => {
        app.setCollapsed(!app.collapsed);
    };

    const onLogout = () => {
        user.logout();
        history.replace(`/user/login?redirectUrl=${location.href}`);
    };

    return (
        <div className={style.baselayoutWraper}>
            <Header
                onCollapsed={onCollapsed}
                collapsed={app.collapsed}
                onLogout={onLogout}
                showFullScreen={app.setting.showFullScreen}
            />
            <Sider menuData={menuData} collapsed={app.collapsed} />
            {setting.showTabs && <TabBar tabs={app.tabs} active="" />}
            <MainLayout collapsed={app.collapsed} app={props.app}>
                {props.children}
            </MainLayout>
        </div>
    );
};

export default inject("app", "user")(observer(BaseLayout));
