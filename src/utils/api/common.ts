import API_PREFIX from "../constants/targets";

type TApiPrefixKey = "development" | "production";

/**
 * 获取baseUrl
 * @returns
 */
export function getBaseUrl(): string {
    const env = process.env["NODE_ENV"] || "development";
    if (env) {
        return API_PREFIX[env as TApiPrefixKey];
    }
    return "";
}
