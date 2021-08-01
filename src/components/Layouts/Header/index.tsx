import React, { MouseEventHandler } from "react";
import style from "./index.less";
import Logo from "../Logo";
import Operate from "./Operate";
import Menu from "./Menu";
import Bread from "./Bread";

interface IProps {
  onCollapsed: MouseEventHandler<HTMLDivElement>;
  collapsed: boolean;
  onLogout: MouseEventHandler<HTMLDivElement>;
}

const Header: React.FC<IProps> = (props: IProps): React.ReactElement => {
  return (
    <nav className={style.header}>
      <Logo collapsed={props.collapsed} />
      <Menu onCollapsed={props.onCollapsed} collapsed={props.collapsed} />
      <Bread />
      <Operate onLogout={props.onLogout} />
    </nav>
  );
};

export default Header;
