import React from "react";
import style from "./index.less";
import { PageHeader, Layout, BackTop } from "antd";
import { inject, observer } from "mobx-react";
import { IAppStore } from "@/store/modules/app";
import { getBackgroundColor } from "@/utils/theme";
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
    app?: IAppStore;
}

const PageWrapper: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const setting = props.app ? props.app.setting : { showTabs: true };

    return (
        <div
            className={style.pageWrapper}
            style={{
                minHeight: props.fit
                    ? `calc(100vh - ${setting.showTabs ? 104 : 66}px)`
                    : "auto",
                backgroundColor: props.bg ? getBackgroundColor("#fff") : "",
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

export default inject("app")(observer(PageWrapper));
