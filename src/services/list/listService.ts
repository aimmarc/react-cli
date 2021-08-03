import BaseService from "../base/baseService";
import { stringify } from 'qs';

class ListService extends BaseService {
    inject = true;

    async table(params: any) {
        const { data } = await this.api.get(`/api/list/table?${stringify(params)}`);
        return data;
    }
}

export default ListService;
