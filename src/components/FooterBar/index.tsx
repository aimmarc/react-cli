import React from 'react';
import styles from './index.less';
import config from '@/common/config/app.config';
import useTheme from '@/utils/hooks/useTheme';
import { useRecoilValue } from 'recoil';
import { collapsedState } from '@/recoil/app';

interface IFooterBarProps {
    leftContent?: React.ComponentType<any>;
}

const FooterBar: React.FC<IFooterBarProps> = (props): React.ReactElement => {
    const { color } = useTheme('#fff', '#141414');
    const { color: borderColor } = useTheme('#f0f0f0', '#303030');
    const collapsed = useRecoilValue(collapsedState);

    return (
        <div
            className={styles.footerBar}
            style={{
                width: `calc(100% - ${collapsed ? 78 : config.menuWidth}px)`,
                backgroundColor: color,
                borderTop: `1px solid ${borderColor}`,
            }}
        >
            <div className={styles.leftContent}>{props.leftContent}</div>
            <div className={styles.rightContent}>{props.children}</div>
        </div>
    );
};

export default FooterBar;
