import { getResponse, IBaseResponse } from "@/utils/api/httpResponse";

export default class BaseMock {
    baseUrl = `//${location.host}/api/`;

    getSuccess() {
        const ret: IBaseResponse = {
            code: 0,
            data: {}
        };
        return ret;
    }

    getFail() {
        const ret: IBaseResponse = {
            code: -1,
            data: {}
        };
        return ret;
    }

    /**
     * 执行自定义方法
     */
    static excute(targetClass: any) {
        let protos = targetClass.prototype;
        Object.getOwnPropertyNames(protos).forEach((key) => {
            if (key !== "constructor") {
                console.log(key);
                
                new targetClass()[key]();
            }
        });
    }
}
