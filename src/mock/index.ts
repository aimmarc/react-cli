import Mock from "mockjs";
import { login } from "./user";
import "./list/listMock";
import "./dashboard/dashboardMock";

Mock.setup({
    timeout: "500-2000",
});

Mock.mock(/\/user\/login/, "post", login);
