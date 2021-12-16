import request from "@/utils/api/request";

async function login(body?: Object) {
    return request.post("/login/account", body);
}

export { login };
