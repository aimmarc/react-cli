import BaseService from "../base/baseService";

class ListService extends BaseService {
    inject = true;

    async table() {
        const { data } = await this.api.get("/api/list/table");
        return data;
    }
}

export default ListService;
