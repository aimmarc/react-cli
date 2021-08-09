import BaseService from "../base/baseService";

class DashboardService extends BaseService {
    inject = true;

    rankList = async () => {
        const { data } = await this.api.get(`/api/dashboard/rankList`);
        return data;
    };
}

export default DashboardService;
