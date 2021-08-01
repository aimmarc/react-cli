import React from "react";
import style from "./index.less";
import SiderMenu from "./SiderMenu";
import config from "@/utils/constants/config";

interface IProps {
  menuData: any[];
  collapsed: boolean;
}

const Sider: React.FC<IProps> = (props: IProps): React.ReactElement => {
  const { collapsed } = props;

  return (
    <div
      className={style.sider}
      style={{ width: collapsed ? 78 : config.menuWidth }}
    >
      <SiderMenu menuData={props.menuData} collapsed={collapsed} />
    </div>
  );
};

export default Sider;
