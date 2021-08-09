import UserService from "./user/userService";
import ListService from "./list/listService";
import DashboardService from "./dashboard/dashboardService";

const userService = new UserService();
const listService = new ListService();
const dashboardService = new DashboardService();

export { userService, listService, dashboardService };
