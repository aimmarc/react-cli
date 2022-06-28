import request from '@/utils/api/request';

/**
 * 排行列表
 * @returns
 */
export async function rankList() {
    const { data } = await request.get(`/dashboard/rankList`);
    return data;
}
