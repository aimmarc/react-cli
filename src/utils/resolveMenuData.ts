import routerConfig, { IRouter } from "@/common/config/router.config";

/**
 * 处理菜单数据
 * @param data
 * @returns
 */
export function resolveMenuData(data: any[]): any[] {
  const filterData = data.filter((item: IRouter) => item.path === "/");
  if (filterData && filterData.length === 1) {
    return filterData[0].routes;
  } else {
    return [];
  }
}

/**
 * 获取菜单名称
 * @param path
 * @returns
 */
export function getMenuName(path: string) {
  let name: string | undefined = "";
  const loop = (array: IRouter[]) => {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item.path === path) {
        name = item.name;
        break;
      }
      if (item.routes) {
        loop(item.routes);
      }
    }
  };
  loop(routerConfig);
  return name || "";
}

/**
 * 获取路由
 * @param path
 * @returns
 */
export function getMenuRoute(path: string) {
  let menu: IRouter | undefined;
  const loop = (array: IRouter[]) => {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item.path === path) {
        menu = item;
        break;
      }
      if (item.routes) {
        loop(item.routes);
      }
    }
  };
  loop(routerConfig);
  return menu;
}
