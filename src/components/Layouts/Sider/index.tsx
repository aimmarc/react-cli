import React from "react";
import style from "./index.less";
import SiderMenu from "./SiderMenu";
import config from "@/config/app";
import { getBackgroundColor } from "@/utils/theme";
import { inject, observer } from "mobx-react";

interface IProps {
    menuData: any[];
    collapsed: boolean;
}

const Sider: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { collapsed } = props;

    return (
        <div
            className={style.sider}
            style={{
                width: collapsed ? 78 : config.menuWidth,
                backgroundColor: getBackgroundColor("#fff", "#141414"),
                boxShadow: `0 0 10px ${getBackgroundColor("#e0e0e0")}`,
            }}
        >
            <SiderMenu menuData={props.menuData} collapsed={collapsed} />
        </div>
    );
};

export default inject("app")(observer(Sider));
