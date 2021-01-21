const path = require("path");
const rewireLess = require("react-app-rewire-less-modules");
const theme = require("./src/config/theme");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

/**
 * 覆盖脚手架打包配置
 * @param {*} config
 * @param {*} env
 */
module.exports = function override(config, env) {
  // 配置less
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: theme,
  })(config, env);

  config.resolve.alias = {
    "@": resolve("src"),
  };

  return config;
};
