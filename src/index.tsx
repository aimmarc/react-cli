import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </ConfigProvider>,
    document.getElementById('root'),
);
