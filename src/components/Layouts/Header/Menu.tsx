import React, { MouseEventHandler } from "react";
import style from "./index.less";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface IProps {
  onCollapsed: MouseEventHandler<HTMLDivElement>;
  collapsed: boolean;
}

const Menu: React.FC<IProps> = (props: IProps): React.ReactElement => {
  const { onCollapsed, collapsed } = props;

  return (
    <div className={style.menu}>
      <div className={style.collapsed} onClick={onCollapsed}>
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: 18 }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: 18 }} />
        )}
      </div>
    </div>
  );
};

export default Menu;
