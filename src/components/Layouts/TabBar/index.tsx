import React, { useEffect, useRef, useState } from 'react';
import style from './index.less';
import config from '@/common/config/app.config';
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { getMenuName, getMenuRoute } from '@/utils/resolveMenuData';
import { IconFont } from '@/components';
import { Tabs } from 'antd';
import { getBackgroundColor } from '@/utils/theme';
import { IAppStore } from '@/store/modules/app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeTabState, collapsedState, tabState } from '@/recoil/app';
import useAtomState from '@/recoil/lib/useAtomState';
import StorageEnum from '@/utils/constants/storage';
import useFirstEffect from '@/utils/hooks/useFirstEffect';
const { TabPane } = Tabs;

export type TTabs = {
    route: string;
    title: string;
    icon?: string;
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
const TabBar: React.FC<ITabBarProps> = (): React.ReactElement => {
    const history = useHistory();
    const [unmount, setUnmount] = useState(false);
    const [tabData, setTabData] = useAtomState(tabState, (tabs) => {
        localStorage.setItem(StorageEnum.TABS_DATA, JSON.stringify(tabs));
    });
    const [activeTab, setActiveTab] = useRecoilState(activeTabState);
    const resolveTabsRef: any = useRef();
    const tabDataRef: any = useRef();
    const collapsed = useRecoilValue(collapsedState);

    useFirstEffect(() => {
        history.listen((route: any, action) => {
            if (unmount) {
                return;
            }
            if (route.pathname === '/') {
                return;
            }
            if (action === 'POP') {
                const copyTabData = tabDataRef.current
                    ? tabDataRef.current
                    : tabData;
                const pathes = copyTabData.map((item: TTabs) => item.route);
                if (!pathes?.includes(route.pathname)) {
                    history.goBack();
                    return;
                }
            }
            resolveTabsRef.current
                ? resolveTabsRef.current(route.pathname, route.search)
                : resolveTabs(route.pathname, route.search);
        });
        resolveTabsRef.current
            ? resolveTabsRef.current(
                  history.location.pathname,
                  history.location.search,
              )
            : resolveTabs(history.location.pathname, history.location.search);
        return () => {
            setUnmount(true);
        };
    });

    useEffect(() => {
        // 使用useRef保存每次最新的resolveTabs函数
        resolveTabsRef.current = resolveTabs;

        tabDataRef.current = tabData;
    });

    /**
     * 处理激活
     * @param pathname
     * @param search
     * @returns
     */
    const resolveTabs = (pathname: string, search: string = '') => {
        if (config.notTabs.includes(pathname)) {
            return;
        }
        const pathes = tabData.map((item: TTabs) => item.route + item.search);
        const newPathname = pathname + search;
        if (pathes?.includes(newPathname)) {
            setActiveTab(newPathname);
            return;
        }
        const current: TTabs = {
            title: getMenuName(pathname),
            route: pathname,
            icon: getMenuRoute(pathname)?.icon,
            search,
        };
        setTabData((state) => [...state, current]);
        setActiveTab(newPathname);
    };

    /**
     * change
     * @param key
     * @returns
     */
    const handleChangeTab = (key: any) => {
        if (activeTab === key) {
            return;
        }
        setActiveTab(key);
        history.push(key);
    };

    /**
     * remove
     * @param key
     */
    const handleRemove = (key: any) => {
        const array = JSON.parse(JSON.stringify(tabData))?.filter(
            (row: TTabs) => row.route + row.search !== key,
        );

        if (activeTab === key) {
            // 关闭的tab和当前激活路由一致时才跳转
            history.goBack();
        }
        setTabData(array);
    };

    return (
        <div
            className={style.tabbarWrap}
            style={{
                width: `calc(100% - ${collapsed ? 78 : config.menuWidth}px)`,
                left: collapsed ? 79 : config.menuWidth,
                backgroundColor: getBackgroundColor('#f0f2f5'),
            }}
        >
            <Tabs
                type="editable-card"
                activeKey={activeTab}
                onChange={handleChangeTab}
                onEdit={handleRemove}
                hideAdd
                size="small"
            >
                {tabData.map((item: TTabs, index: Number) => (
                    <TabPane
                        tab={
                            <div>
                                <IconFont
                                    type={
                                        index === 0
                                            ? 'icon-home'
                                            : item?.icon || 'icon-file'
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

export default TabBar;
