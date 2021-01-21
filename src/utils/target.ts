const { NODE_ENV } = process.env;

const targets: any = {
  development: "/api",
  dev: "http://hhbot-api-dev.hehewin.net", // 线上开发环境
  test: "https://hhs-api-test.hehewin.net", // 线上测试环境
  prod: "https://hhs-api.hehewin.com", // 生产环境
};

export const API_PREFIX = targets[NODE_ENV]; // api前缀

export const QINIU_URL = "https://up-z0.qiniup.com/"; // 七牛云上传地址