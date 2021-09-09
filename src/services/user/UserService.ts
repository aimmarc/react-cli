import request from "@/utils/api/request";

async function login(body?: Object) {
    return request.post("/user/login", body);
}

export { login };
