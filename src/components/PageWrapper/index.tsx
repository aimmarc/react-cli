import React from "react";
import style from "./index.less";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

interface IProps {
    fit?: boolean;
    bg?: boolean;
    children?: any;
    title?: string | React.ReactElement;
    subTitle?: string | React.ReactElement;
    goBack?: Boolean;
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
            {props.title && (
                <div className={style.titleBar}>
                    <h1 className={style.title}>
                        {props.goBack && (
                            <a
                                className={style.back}
                                onClick={() => history.goBack()}
                            >
                                <ArrowLeftOutlined />
                            </a>
                        )}
                        {props.title}
                        {props.subTitle && (
                            <span className={style.subTitle}>这是副标题</span>
                        )}
                    </h1>
                </div>
            )}
            <div className={style.inner}>{props.children}999</div>
        </div>
    );
};

export default PageWrapper;
