import React, { useEffect, useState } from "react";
import style from "./index.less";
import config from "@/config/app";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router";
import { getMenuName, getMenuRoute } from "@/utils/resolveMenuData";
import { IconFont } from "@/components";
import { Tabs } from "antd";
import { getBackgroundColor } from "@/utils/theme";
import { IAppStore } from "@/store/modules/app";
const { TabPane } = Tabs;

export type TTabs = {
    route: string;
    title: string;
    icon: string;
    search?: string;
};

export interface ITabBarProps {
    tabs?: TTabs[];
    active: string;
    app?: IAppStore;
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
        history.listen((route: any, action) => {
            console.log(route);

            if (unmount) {
                return;
            }
            if (route.pathname === "/") {
                return;
            }
            if (action === "POP") {
                const pathes = app?.tabs.map((item: TTabs) => item.route);
                if (!pathes?.includes(route.pathname)) {
                    history.goBack();
                    return;
                }
            }
            resolveTabs(route.pathname, route.search);
        });
        resolveTabs(history.location.pathname, history.location.search);
        return () => {
            setUnmount(true);
        };
    }, []);

    /**
     * 处理激活
     * @param pathname
     * @param search
     * @returns
     */
    const resolveTabs = (pathname: string, search: string = "") => {
        if (config.notTabs.includes(pathname)) {
            return;
        }
        const pathes = app?.tabs.map((item: TTabs) => item.route + item.search);
        const newPathname = pathname + search;
        if (pathes?.includes(newPathname)) {
            app?.setActiveTab(newPathname);
            return;
        }
        const current = {
            title: getMenuName(pathname),
            route: pathname,
            icon: getMenuRoute(pathname)?.icon,
            search,
        };
        app?.setTabs([...app.tabs, current]);
        app?.setActiveTab(newPathname);
    };

    /**
     * change
     * @param key
     * @returns
     */
    const handleChangeTab = (key: any) => {
        if (app?.activeTab === key) {
            return;
        }
        history.push(key);
        app?.setActiveTab(key);
    };

    /**
     * remove
     * @param key
     */
    const handleRemove = (key: any) => {
        const array = JSON.parse(JSON.stringify(app?.tabs))?.filter(
            (row: TTabs) => row.route + row.search !== key
        );

        if (app?.activeTab === key) {
            // 关闭的tab和当前激活路由一致时才跳转
            history.goBack();
        }
        app?.setTabs(array);
    };

    return (
        <div
            className={style.tabbarWrap}
            style={{
                width: `calc(100% - ${
                    app?.collapsed ? 78 : config.menuWidth
                }px)`,
                left: app?.collapsed ? 79 : config.menuWidth,
                backgroundColor: getBackgroundColor("#f0f2f5"),
            }}
        >
            <Tabs
                type="editable-card"
                activeKey={app?.activeTab}
                onChange={handleChangeTab}
                onEdit={handleRemove}
                hideAdd
                size="small"
            >
                {app?.tabs.map((item: TTabs, index: Number) => (
                    <TabPane
                        tab={
                            <div>
                                <IconFont
                                    type={
                                        index === 0
                                            ? "icon-home"
                                            : item?.icon || "icon-file"
                                    }
                                />
                                {item.title}
                            </div>
                        }
                        key={item.route + item.search}
                        closable={config.index !== item.route}
                    ></TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default inject("app")(observer(TabBar));
