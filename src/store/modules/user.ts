import { action, makeAutoObservable } from "mobx";
import { TTabs } from "@/components/Layouts/TabBar";

/**
 * app
 */
class User {
  tabs: TTabs[] = [];
  collapsed: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action logout = (collapsed: boolean) => {};
}

export default User;
