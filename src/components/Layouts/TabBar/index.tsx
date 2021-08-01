import React, { useEffect } from "react";
import style from "./index.less";
import config from "@/utils/constants/config";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router";
import { getMenuName, getMenuRoute } from "@/utils/resolveMenuData";
import { IconFont } from "@/components";
import { CloseOutlined } from "@ant-design/icons";

export type TTabs = {
  route: string;
  title: string;
  icon: string;
};

export interface ITabBarProps {
  tabs?: TTabs[];
  active: string;
  app?: any;
}

/**
 * 标签页
 * @param props
 * @returns
 */
const TabBar: React.FC<ITabBarProps> = (
  props: ITabBarProps
): React.ReactElement => {
  const { app } = props;
  const history = useHistory();

  useEffect(() => {
    history.listen((route: any) => {
      if (route.pathname === "/") {
        return;
      }
      resolveTabs(route.pathname);
    });
    resolveTabs(history.location.pathname);
  }, []);

  const resolveTabs = (pathname: any) => {
    const pathes = app.tabs.map((item: TTabs) => item.route);
    if (pathes.includes(pathname)) {
      app.setActiveTab(pathname);
      return;
    }
    const current = {
      title: getMenuName(pathname),
      route: pathname,
      icon: getMenuRoute(pathname)?.icon,
    };
    app.setTabs([...app.tabs, current]);
    app.setActiveTab(pathname);
  };

  const handleChangeTab = (record: TTabs) => {
    if (app.activeTab === record.route) {
      return;
    }
    history.push(record.route);
    app.setActiveTab(record.route);
  };

  const handleRemove = (event: any, record: TTabs) => {
    event.stopPropagation();
    const array = JSON.parse(JSON.stringify(app.tabs))?.filter(
      (row: TTabs) => row.route !== record.route
    );
    if (app.activeTab === record.route) {
      // 关闭的tab和当前激活路由一致时才跳转
      history.goBack();
    }
    app.setTabs(array);
  };

  return (
    <div
      className={style.tabbarWrap}
      style={{
        width: `calc(100% - ${app.collapsed ? 78 : config.menuWidth}px)`,
        left: app.collapsed ? 79 : config.menuWidth,
      }}
    >
      <ul className={style.tabbar}>
        {app.tabs.map((item: TTabs, index: Number) => (
          <li
            key={item.route}
            className={app.activeTab === item.route ? style.active : ""}
            onClick={() => handleChangeTab(item)}
          >
            <div className={style.inner}>
              <IconFont type={item?.icon || "icon-file"} /> {item.title}
            </div>
            {index !== 0 && (
              <span className={style.close}>
                <CloseOutlined
                  style={{ fontSize: 10 }}
                  onClick={(event: any) => handleRemove(event, item)}
                />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default inject("app")(observer(TabBar));
