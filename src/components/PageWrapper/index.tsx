import React from "react";
import style from "./index.less";
import { PageHeader, Layout, BackTop } from "antd";
import config from "@/config/app";
const { Content } = Layout;

interface IProps {
    custom?: boolean;
    fit?: boolean;
    bg?: boolean;
    children?: any;
    title?: string | React.ReactElement;
    subTitle?: string | React.ReactElement;
    goBack?: boolean;
    extra?: React.ReactElement;
    style?: React.CSSProperties;
    backTop?: boolean;
}

const PageWrapper: React.FC<IProps> = (props: IProps): React.ReactElement => {
    return (
        <div
            className={style.pageWrapper}
            style={{
                minHeight: props.fit
                    ? `calc(100vh - ${config.showTabs ? 104 : 66}px)`
                    : "auto",
                backgroundColor: props.bg ? "#fff" : "",
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
