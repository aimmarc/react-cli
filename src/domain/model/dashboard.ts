import useRequest from '@umijs/use-request';
import { rankList } from '../api/dashboard';

/**
 * 获取排名列表
 * @returns
 */
const useRankList = () => {
    const { data } = useRequest(rankList);
    return data;
};

export { useRankList };
