import { STORAGE_USER_INFO } from "./constant";

/**
 * 设置storage
 * @param {*} key
 * @param {*} data
 */
export function setStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 获取storage
 * @param {*} key
 */
export function getStorage(key: string) {
  const data: string | null = localStorage.getItem(key);
  try {
    return JSON.parse(data || "{}");
  } catch (err) {
    console.log(err);
    return data;
  }
}

/**
 * 删除storage
 * @param {*} key
 */
export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

/**
 * 判断是否为admin权限
 */
export function hasAuth(): boolean {
  const { is_master } = getStorage(STORAGE_USER_INFO);
  return is_master === 1;
}

/**
 * 获取url参数
 * @param {*} queryName
 */
export function getQueryValue(queryName: string): string {
  var query = location.href.split("?")[1];
  var vars = query ? query.split("&") : [];
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == queryName) {
      return pair[1];
    }
  }
  return "";
}
