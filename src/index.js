import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import store from "./store";
import { Provider } from "mobx-react";
import "./mock";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider {...store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
