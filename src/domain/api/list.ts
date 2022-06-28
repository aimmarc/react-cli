import { stringify } from 'qs';
import request from '@/utils/api/request';
import { IPageListPrams } from '../interface';

/**
 * 表格
 * @param params
 * @returns
 */
export async function listTable(params: IPageListPrams) {
    const { data } = await request.get(`/list/table?${stringify(params)}`);
    return data;
}
