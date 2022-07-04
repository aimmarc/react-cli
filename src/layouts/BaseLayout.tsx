import React from 'react';
import style from './BaseLayout.less';
import { Header, Sider, TabBar } from '@/components/Layouts';
import MainLayout from './MainLayout';
import { settingState, tabState } from '@/recoil/app';
import { useRecoilValue } from 'recoil';
import { useLogout } from '@/domain/model/user';
import { useCollapsed, useMenuData } from '@/domain/model/app';

/**
 * 基础布局
 * @param props
 * @returns
 */
const BaseLayout: React.FC = (props): React.ReactElement => {
    const menuData = useMenuData();
    const [collapsed, onCollapsed] = useCollapsed();
    const setting = useRecoilValue(settingState);
    const tabsData = useRecoilValue(tabState);
    const logout = useLogout();

    return (
        <div className={style.baselayoutWraper}>
            <Header
                onCollapsed={onCollapsed}
                collapsed={collapsed}
                onLogout={logout}
                showFullScreen={setting.showFullScreen}
            />
            <Sider menuData={menuData} collapsed={collapsed} />
            {setting.showTabs && <TabBar tabs={tabsData} active="" />}
            <MainLayout collapsed={collapsed} setting={setting}>
                {props.children}
            </MainLayout>
        </div>
    );
};

export default BaseLayout;
