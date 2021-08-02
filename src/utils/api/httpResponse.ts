export interface IBaseResponse {
    code: number;
    data: any;
    message?: string;
}

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
    const ret: IBaseResponse = {
        code: response.code || 0,
        data: response.data || null,
        message: response.message || "",
    };
    return ret;
}
