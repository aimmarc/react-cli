import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";
import app from "@/config/app";

export interface ISetting {
    showTabs: boolean;
    showFullScreen: boolean;
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
        const tabsData = localStorage.getItem("TABS_DATA") || "[]";
        return JSON.parse(tabsData);
    }

    getSettingData() {
        const setting =
            localStorage.getItem("SETTING_DATA") ||
            JSON.stringify({
                showTabs: app.showTabs,
                showFullScreen: app.showFullScreen,
            });
        return JSON.parse(setting);
    }

    @action setCollapsed = (collapsed: boolean) => {
        this.collapsed = collapsed;
    };

    @action setTabs = (tabs: any[]) => {
        this.tabs = tabs;
        localStorage.setItem("TABS_DATA", JSON.stringify(tabs));
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
        localStorage.setItem("SETTING_DATA", JSON.stringify(setting));
    };
}

export default App;
