import React from "react";
import styles from "./index.less";
import config from "@/common/config/app.config";
import { inject, observer } from "mobx-react";
import { getBackgroundColor } from "@/utils/theme";

interface IFooterBarProps {
    leftContent?: React.ComponentType<any>;
    app?: any;
}

const FooterBar: React.FC<IFooterBarProps> = (props): React.ReactElement => {
    return (
        <div
            className={styles.footerBar}
            style={{
                width: `calc(100% - ${
                    props.app.collapsed ? 78 : config.menuWidth
                }px)`,
                backgroundColor: getBackgroundColor("#fff", "#141414"),
                borderTop: `1px solid ${getBackgroundColor("#f0f0f0", "#303030")}`,
            }}
        >
            <div className={styles.leftContent}>{props.leftContent}</div>
            <div className={styles.rightContent}>{props.children}</div>
        </div>
    );
};

export default inject("app")(observer(FooterBar));
