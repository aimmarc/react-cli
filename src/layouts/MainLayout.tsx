import config from "@/utils/constants/config";
import React from "react";
import styles from "./MainLayout.less";
import TabBar from "@/components/Layouts/TabBar";

interface IProps {
  collapsed: Boolean;
  children?: any;
}

const MainLayout: React.FC<IProps> = (props: IProps): React.ReactElement => {
  return (
    <div
      className={styles.bg}
      style={{ paddingLeft: props.collapsed ? 78 + 8 : config.menuWidth + 8 }}
    >
      {props.children}
    </div>
  );
};

export default MainLayout;
