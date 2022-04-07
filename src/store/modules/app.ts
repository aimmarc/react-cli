import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";
import app from "@/common/config/app.config";
import { switchDarkTheme } from "@/utils/theme";
import StorageEnum from "@/utils/constants/storage";

export interface ISetting {
    showTabs: boolean;
    showFullScreen: boolean;
    dark: boolean;
}

export interface IAppStore {
    tabs: TTabs[];
    activeTab: string;
    collapsed: boolean;
    title: string;
    setting: ISetting;
    setSetting: (setting: ISetting) => void;
    setTitle: (title: string) => void;
    setActiveTab: (active: string) => void;
    setTabs: (tabs: any[]) => void;
    setCollapsed: (collapsed: boolean) => void;
    getTabsData: () => void;
    getSettingData: () => void;
}

/**
 * app
 */
class App implements IAppStore {
    tabs: TTabs[] = this.getTabsData();
    activeTab: string = "";
    collapsed: boolean = false;
    title: string = "";
    setting: ISetting = this.getSettingData();

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * 获取默认tabs数据
     * @returns
     */
    getTabsData() {
        const tabsData = localStorage.getItem(StorageEnum.TABS_DATA) || "[]";
        return JSON.parse(tabsData);
    }

    getSettingData() {
        const setting =
            localStorage.getItem(StorageEnum.SETTING_DATA) ||
            JSON.stringify({
                showTabs: app.showTabs,
                showFullScreen: app.showFullScreen,
                dark: app.theme === "dark",
            });
        const newSetting = JSON.parse(setting);
        switchDarkTheme(newSetting.dark);
        return newSetting;
    }

    @action setCollapsed = (collapsed: boolean) => {
        this.collapsed = collapsed;
    };

    @action setTabs = (tabs: any[]) => {
        this.tabs = tabs;
        localStorage.setItem(StorageEnum.TABS_DATA, JSON.stringify(tabs));
    };

    /**
     * 设置激活tab
     * @param active
     */
    @action setActiveTab = (active: string) => {
        this.activeTab = active;
    };

    /**
     * 设置页面标题
     * @param title
     */
    @action setTitle = (title: string) => {
        this.title = title;
    };

    /**
     * 更新设置
     * @param setting
     */
    @action setSetting = (setting: ISetting) => {
        this.setting = setting;
        localStorage.setItem(StorageEnum.SETTING_DATA, JSON.stringify(setting));
    };
}

export default App;
