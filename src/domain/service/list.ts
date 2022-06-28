import useRequest from '@umijs/use-request';
import { listTable } from '../api/list';
import { IPageListPrams } from '../interface';

/**
 * 获取分页列表
 * @param params
 * @returns
 */
const useListTable = <R = any>(params: IPageListPrams) => {
    const { run, data, loading } = useRequest<R>(listTable, {
        manual: true,
        defaultParams: [params],
    });

    return { run, data, loading };
};

export { useListTable };
