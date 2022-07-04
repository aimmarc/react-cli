import React from 'react';
import style from './index.less';
import SiderMenu from './SiderMenu';
import config from '@/common/config/app.config';
import useTheme from '@/utils/hooks/useTheme';

interface IProps {
    menuData: any[];
    collapsed: boolean;
}

const Sider: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { collapsed } = props;
    const { color } = useTheme('#fff', '#141414');
    const { color: boxColor } = useTheme('#e0e0e0');

    return (
        <div
            className={style.sider}
            style={{
                width: collapsed ? 78 : config.menuWidth,
                backgroundColor: color,
                boxShadow: `0 0 10px ${boxColor}`,
            }}
        >
            <SiderMenu menuData={props.menuData} collapsed={collapsed} />
        </div>
    );
};

export default Sider;
