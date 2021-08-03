import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import store from "./store";
import { Provider as MobxProvider } from "mobx-react";
import { Provider as KeepAliveProvider } from "react-keep-alive";
import "./mock";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <MobxProvider {...store}>
      <KeepAliveProvider>
        <App />
      </KeepAliveProvider>
    </MobxProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
