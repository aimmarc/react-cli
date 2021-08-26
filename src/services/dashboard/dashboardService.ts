import BaseService from "../base/baseService";

class DashboardService extends BaseService {
    inject = true;

    async rankList() {
        const { data } = await this.api.get(`/dashboard/rankList`);
        return data;
    }
}

export default DashboardService;
