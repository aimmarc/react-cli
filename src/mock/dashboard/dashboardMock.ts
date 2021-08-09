import BaseMock from "../base/baseMock";
import Mock from "mockjs";

class DashboardMock extends BaseMock {
    listRank() {
        const ret: any = this.getSuccess();
        ret.data["total"] = 999;
        ret.data["list|5"] = [
            {
                "rank|+1": 10000000,
                "keyword|1-2": "关键字",
                "userCount|1-999": 1,
                "weekRate|0-100": 1,
            },
        ];
        Mock.mock(/\/dashboard\/rankList/, ret);
    }
}

BaseMock.excute(DashboardMock);
