import config from "@/config/app";
import React from "react";
import styles from "./MainLayout.less";

interface IProps {
    collapsed: Boolean;
    children?: any;
}

const MainLayout: React.FC<IProps> = (props: IProps): React.ReactElement => {
    return (
        <div
            className={styles.bg}
            style={{
                paddingLeft: props.collapsed ? 78 + 8 : config.menuWidth + 8,
            }}
        >
            {props.children}
        </div>
    );
};

export default MainLayout;
