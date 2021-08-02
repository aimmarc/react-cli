export default class BaseMock {
    baseUrl = `//${location.host}/api/`;

    getSuccess() {
        const ret: any = {};
        ret.code = 0;
        ret.data = {};
        return ret;
    }

    getFail() {
        const ret: any = {};
        ret.code = -1;
        ret.data = {};
        return ret;
    }

    /**
     * 执行自定义方法
     */
    static excute(targetClass: any) {
        let protos = targetClass.prototype;
        Object.getOwnPropertyNames(protos).forEach((key) => {
            if (key !== "constructor") {
                new targetClass()[key]();
            }
        });
    }
}
