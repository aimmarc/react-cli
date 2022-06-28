import { ISetting } from '@/recoil/app';

/**
 * 设置
 */
const setting: ISetting = {
    showTabs: false,
    showFullScreen: false,
    dark: false,
};

/**
 * 是否折叠菜单
 */
const collapsed: boolean = false;

/**
 * 菜单数据
 */
const menuData: any[] = [];

/**
 * 是否全屏
 */
const isFull: boolean = false;

export { setting, collapsed, menuData, isFull };
