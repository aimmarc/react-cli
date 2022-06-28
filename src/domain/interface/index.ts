export interface IPageListPrams {
    page: number;
    pageSize: number;
}

export interface IBaseServiceOptions<R = any, P extends any[] = any[]> {
    manual?: boolean;
    onSuccess?: (data: R, params: P) => void;
    onError?: (e: Error, params: P) => void;
    formatResult?: (res: R) => any;
    defaultParams?: P;
}
