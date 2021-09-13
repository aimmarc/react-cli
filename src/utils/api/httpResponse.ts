/**
 * 一般返回
 */
export interface IBaseResponse {
    code: number;
    data?: any;
    message?: string;
}

/**
 * 分页列表
 */
export interface IListPageResponse extends IBaseResponse {
    data: {
        total: number;
        list: any[];
    };
}

/**
 * 获取默认返回值
 * @param response
 * @returns
 */
export function getResponse(response: IBaseResponse): IBaseResponse {
    const code = 0;
    const ret: IBaseResponse = {
        code: response.code || code,
        data: response.data || null,
        message: response.message || "",
    };
    return ret;
}

/**
 * 获取异常返回
 * @param error
 */
export function getFailResponse(error: IBaseResponse) {
    const ret: IBaseResponse = {
        code: error.code || -1,
        message: error.message || "未知异常",
    };
    return ret;
}
