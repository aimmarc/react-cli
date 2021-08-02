import BaseMock from "../base/baseMock";
import Mock from "mockjs";

Mock.setup({
    timeout: "500-2000",
});

class ListMock extends BaseMock {
    table() {
        const ret: any = this.getSuccess();
        ret.data["total"] = 999;
        ret.data["list|10"] = [
            {
                "id|+1": 10000000,
                "temp|100-5999": 1,
                "title|1-3": "标题",
                "status|0-3": 1,
                lastDate: () => {
                    return Mock.Random.time('yyyy-MM-dd HH:mm:ss');
                },
                desc: () => {
                    return Mock.Random.csentence(0, 16);
                },
                date: "@now",
            },
        ];
        Mock.mock(/\/list\/table/, ret);
    }
}

BaseMock.excute(ListMock);
