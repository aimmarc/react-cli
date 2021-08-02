import { getResponse } from "@/utils/api/httpResponse";

class BaseModel {
    /**
     * 注入api到models
     * @param services
     * @returns
     */
    static inject(services: any) {
        const injectModel: any = {};
        Object.keys(services).forEach((key: string) => {
            const serve = services[key];
            if (serve.inject) {
                injectModel[key] = serve;
                Object.getOwnPropertyNames(serve.__proto__).forEach(
                    (pro: string) => {
                        if (
                            pro !== "constructor" &&
                            typeof serve[pro] === "function"
                        ) {
                            const proxy = BaseModel.proxy(serve[pro]);
                            injectModel[key][pro] = proxy;
                        }
                    }
                );
            }
        });
        return injectModel;
    }

    /**
     * 代理
     * @param obj
     * @returns
     */
    static proxy(obj: any) {
        const proxy = new Proxy(obj, {
            async apply(target, ctx, args) {
                try {
                    let response = await Reflect.apply(obj, ctx, args);
                    return getResponse(response);
                } catch (error) {
                    console.log(error);
                    error = error || {};
                    error.__msg__ = `【${obj.name}】接口异常`;
                    const ret = getResponse({
                        code: -1,
                        message: error.__msg__,
                        data: null,
                    });
                    return ret;
                }
            },
        });
        return proxy;
    }

    /**
     * 获取默认返回
     * @param response
     * @returns
     */
    getDefaultResponse(response: any) {
        const ret = getResponse(response);
        return ret;
    }
}

export default BaseModel;
