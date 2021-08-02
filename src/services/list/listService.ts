import BaseService from "../base/baseService";

class ListService extends BaseService {
    inject = true;

    async table(params: any) {
        const { data } = await this.api.get("/api/list/table", { params });
        return data;
    }
}

export default ListService;
