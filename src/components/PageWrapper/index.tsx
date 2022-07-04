import React from 'react';
import styles from './index.less';
import { PageHeader, Layout, BackTop } from 'antd';
import useTheme from '@/utils/hooks/useTheme';
import { useRecoilValue } from 'recoil';
import { settingState } from '@/recoil/app';
const { Content } = Layout;

interface IPageWrapperProps extends TBaseProp {
    custom?: boolean;
    fit?: boolean;
    bg?: boolean;
    title?: string | React.ReactElement;
    subTitle?: string | React.ReactElement;
    goBack?: boolean;
    extra?: React.ReactElement;
    style?: React.CSSProperties;
    backTop?: boolean;
}

const PageWrapper: React.FC<IPageWrapperProps> = (
    props,
): React.ReactElement => {
    const setting = useRecoilValue(settingState);
    const { color } = useTheme('#fff');

    return (
        <div
            className={styles.pageWrapper}
            style={{
                minHeight: props.fit
                    ? `calc(100vh - ${setting.showTabs ? 104 : 66}px)`
                    : 'auto',
                backgroundColor: props.bg ? color : '',
                ...props.style,
            }}
        >
            {props.custom ? (
                props.children
            ) : (
                <PageHeader
                    title={props.title}
                    subTitle={props.subTitle}
                    extra={props.extra}
                >
                    <Content>{props.children}</Content>
                </PageHeader>
            )}
            {props.backTop === false ? null : <BackTop />}
        </div>
    );
};

export default PageWrapper;
