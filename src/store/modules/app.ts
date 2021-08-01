import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";

/**
 * app
 */
class App {
  tabs: TTabs[] = [];
  activeTab: string = "";
  collapsed: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action setCollapsed = (collapsed: boolean) => {
    this.collapsed = collapsed;
  };

  @action setTabs = (tabs: any[]) => {
    this.tabs = tabs;
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
