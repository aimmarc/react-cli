import UserService from "./user/userService";
import ListService from "./list/listService";

const userService = new UserService();
const listService = new ListService();

export { userService, listService };
