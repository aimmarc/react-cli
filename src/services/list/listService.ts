import { stringify } from "qs";
import request from "@/utils/api/request";

/**
 * 表格
 * @param params
 * @returns
 */
async function table(params: any) {
    const { data } = await request.get(`/list/table?${stringify(params)}`);
    return data;
}

export { table };
