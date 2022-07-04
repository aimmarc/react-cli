import config from '@/common/config/app.config';
import React from 'react';
import styles from './MainLayout.less';
import { ISetting } from '@/recoil/app';
import useTheme from '@/utils/hooks/useTheme';

interface IProps {
    collapsed: Boolean;
    children?: any;
    setting: ISetting;
}

const MainLayout: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setting } = props;
    const { color } = useTheme('#f0f2f5');

    return (
        <div
            className={styles.bg}
            style={{
                paddingLeft: props.collapsed ? 78 + 8 : config.menuWidth + 8,
                paddingTop: setting.showTabs ? 96 : 58,
                backgroundColor: color,
            }}
        >
            {props.children}
        </div>
    );
};

export default MainLayout;
