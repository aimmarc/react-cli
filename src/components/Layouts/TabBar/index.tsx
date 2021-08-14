import React, { useEffect, useState } from "react";
import style from "./index.less";
import config from "@/config/app";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router";
import { getMenuName, getMenuRoute } from "@/utils/resolveMenuData";
import { IconFont } from "@/components";
import { Tabs } from "antd";
import { getBackgroundColor } from "@/utils/theme";
const { TabPane } = Tabs;

export type TTabs = {
    route: string;
    title: string;
    icon: string;
};

export interface ITabBarProps {
    tabs?: TTabs[];
    active: string;
    app?: any;
}

/**
 * 标签页
 * @param props
 * @returns
 */
const TabBar: React.FC<ITabBarProps> = (props): React.ReactElement => {
    const { app } = props;
    const history = useHistory();
    const [unmount, setUnmount] = useState(false);

    useEffect(() => {
        history.listen((route: any) => {
            if (unmount) {
                return;
            }
            if (route.pathname === "/") {
                return;
            }
            resolveTabs(route.pathname);
        });
        resolveTabs(history.location.pathname);
        return () => {
            setUnmount(true);
        };
    }, []);

    const resolveTabs = (pathname: any) => {
        if (config.notTabs.includes(pathname)) {
            console.log(pathname);
            return;
        }
        const pathes = app.tabs.map((item: TTabs) => item.route);
        if (pathes.includes(pathname)) {
            app.setActiveTab(pathname);
            return;
        }
        const current = {
            title: getMenuName(pathname),
            route: pathname,
            icon: getMenuRoute(pathname)?.icon,
        };
        app.setTabs([...app.tabs, current]);
        app.setActiveTab(pathname);
    };

    const handleChangeTab = (key: any) => {
        if (app.activeTab === key) {
            return;
        }
        history.push(key);
        app.setActiveTab(key);
    };

    const handleRemove = (key: any) => {
        const array = JSON.parse(JSON.stringify(app.tabs))?.filter(
            (row: TTabs) => row.route !== key
        );
        if (app.activeTab === key) {
            // 关闭的tab和当前激活路由一致时才跳转
            history.goBack();
        }
        app.setTabs(array);
    };

    return (
        <div
            className={style.tabbarWrap}
            style={{
                width: `calc(100% - ${app.collapsed ? 78 : config.menuWidth
                    }px)`,
                left: app.collapsed ? 79 : config.menuWidth,
                backgroundColor: getBackgroundColor('#f0f2f5')
            }}
        >
            <Tabs
                type="editable-card"
                activeKey={app.activeTab}
                onChange={handleChangeTab}
                onEdit={handleRemove}
                hideAdd
            >
                {app.tabs.map((item: TTabs, index: Number) => (
                    <TabPane
                        tab={
                            <div>
                                <IconFont type={index === 0 ? 'icon-home' : item?.icon || "icon-file"} />
                                {item.title}
                            </div>
                        }
                        key={item.route}
                        closable={config.index !== item.route}
                    ></TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default inject("app")(observer(TabBar));
