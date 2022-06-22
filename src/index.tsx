import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import store from './store';
import { Provider as MobxProvider } from 'mobx-react';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <RecoilRoot>
            <MobxProvider {...store}>
                <App />
            </MobxProvider>
        </RecoilRoot>
    </ConfigProvider>,
    document.getElementById('root'),
);
