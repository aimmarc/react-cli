import React from 'react';
import style from './BaseLayout.less';
import { Header, Sider, TabBar } from '@/components/Layouts';
import routerConfig from '@/common/config/router.config';
import { resolveMenuData } from '@/utils/resolveMenuData';
import { observer, inject } from 'mobx-react';
import { useHistory } from 'react-router';
import MainLayout from './MainLayout';
import { IAppStore } from '@/store/modules/app';
import { IUserStore } from '@/store/modules/user';
import useAtomState from '@/recoil/lib/useAtomState';
import { collapsedState, settingState } from '@/recoil/app';
import { useRecoilValue } from 'recoil';

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
    const menuData = resolveMenuData(routerConfig);
    const history = useHistory();
    const [collapsed, setCollapsed] = useAtomState(collapsedState);
    const setting = useRecoilValue(settingState);

    const onCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const onLogout = () => {
        user.logout();
        history.replace(`/user/login?redirectUrl=${location.href}`);
    };

    return (
        <div className={style.baselayoutWraper}>
            <Header
                onCollapsed={onCollapsed}
                collapsed={collapsed}
                onLogout={onLogout}
                showFullScreen={setting.showFullScreen}
            />
            <Sider menuData={menuData} collapsed={collapsed} />
            {setting.showTabs && <TabBar tabs={app.tabs} active="" />}
            <MainLayout collapsed={collapsed} setting={setting}>
                {props.children}
            </MainLayout>
        </div>
    );
};

export default inject('app', 'user')(observer(BaseLayout));
