import BaseService from "../base/BaseService";

/**
 * 用户服务
 */
export default class UserService extends BaseService {
  login = (body?: Object) => {
    return this.api.post("/api/user/login", body);
  };
}