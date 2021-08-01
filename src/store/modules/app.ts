import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";

/**
 * app
 */
class App {
  tabs: TTabs[] = this.getTabsData();
  activeTab: string = "";
  collapsed: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 获取默认tabs数据
   * @returns 
   */
  getTabsData() {
    const tabsData = localStorage.getItem('TABS_DATA') || '[]';
    return JSON.parse(tabsData);
  }

  @action setCollapsed = (collapsed: boolean) => {
    this.collapsed = collapsed;
  };

  @action setTabs = (tabs: any[]) => {
    this.tabs = tabs;
    localStorage.setItem('TABS_DATA', JSON.stringify(tabs));
  };

  /**
   * 设置激活tab
   * @param active
   */
  @action setActiveTab = (active: string) => {
    this.activeTab = active;
  };
}

export default App;
