import React from "react";
import style from "./index.less";
import { useHistory } from "react-router-dom";
import { PageHeader, Layout, BackTop } from "antd";
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
}

const PageWrapper: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const history = useHistory();

    return (
        <div
            className={style.pageWrapper}
            style={{
                minHeight: props.fit ? "calc(100vh - 104px)" : "auto",
                backgroundColor: props.bg ? "#fff" : "",
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
            <BackTop />
        </div>
    );
};

export default PageWrapper;
