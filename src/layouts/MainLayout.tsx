import config from "@/common/config/app";
import { inject, observer } from "mobx-react";
import React from "react";
import styles from "./MainLayout.less";
import { IAppStore } from "@/store/modules/app";
import { getBackgroundColor } from "@/utils/theme";

interface IProps {
    collapsed: Boolean;
    children?: any;
    app: IAppStore;
}

const MainLayout: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setting } = props.app;

    return (
        <div
            className={styles.bg}
            style={{
                paddingLeft: props.collapsed ? 78 + 8 : config.menuWidth + 8,
                paddingTop: setting.showTabs ? 96 : 58,
                backgroundColor: getBackgroundColor("#f0f2f5"),
            }}
        >
            {props.children}
        </div>
    );
};

export default inject("app")(observer(MainLayout));
