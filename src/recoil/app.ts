import { TTabs } from '@/components/Layouts/TabBar';
import StorageEnum from '@/utils/constants/storage';
import { switchDarkTheme } from '@/utils/theme';
import { atom, selector } from 'recoil';
import appConfig from '@/common/config/app.config';

export interface ISetting {
    showTabs: boolean;
    showFullScreen: boolean;
    dark: boolean;
}

/**
 * 获取默认tabs
 * @returns
 */
function getTabsData() {
    const tabsData = localStorage.getItem(StorageEnum.TABS_DATA) || '[]';
    return JSON.parse(tabsData);
}

/**
 * 获取默认设置
 * @returns
 */
function getSettingData() {
    const setting =
        localStorage.getItem(StorageEnum.SETTING_DATA) ||
        JSON.stringify({
            showTabs: appConfig.showTabs,
            showFullScreen: appConfig.showFullScreen,
            dark: appConfig.theme === 'dark',
        });
    const newSetting = JSON.parse(setting);
    switchDarkTheme(newSetting.dark);
    return newSetting;
}

/**
 * tabData
 */
const tabState = atom<TTabs[]>({
    key: 'tabState',
    default: getTabsData(),
});

/**
 * 激活的tab
 */
const activeTabState = atom<string>({
    key: 'activeTabState',
    default: '',
});

/**
 * collapsedState
 */
const collapsedState = atom<boolean>({
    key: 'collapsedState',
    default: false,
});

/**
 * 设置数据
 */
const settingState = atom<ISetting>({
    key: 'settingState',
    default: getSettingData(),
});

/**
 * 页面标题
 */
const titleState = atom<string>({
    key: 'titleState',
    default: '',
});

export { tabState, activeTabState, collapsedState, settingState, titleState };
