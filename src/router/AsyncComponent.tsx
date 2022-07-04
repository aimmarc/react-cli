import React from 'react';
import { LoaderModule } from 'webpack';
import { Spin, Result, Button } from 'antd';

type AsyncComponentState<T = any> = {
    Component: T;
};

/**
 * 构建同步动态路由组件
 * @param load
 * @returns
 */
const asyncComponent = (load: () => Promise<LoaderModule>) =>
    class AsyncComponent extends React.Component<
        any,
        AsyncComponentState<any>
    > {
        state: AsyncComponentState = { Component: null };
        unmount: boolean = false;

        componentDidMount() {
            this.loadComponent();
        }

        componentWillUnmount() {
            this.unmount = true;
        }

        loadComponent = () => {
            load()
                .then((module: LoaderModule) => {
                    if (this.unmount) {
                        // 防止组件被卸载继续调用setState
                        return;
                    }
                    this.setState({
                        Component: module.default,
                    });
                })
                .catch((err) => {
                    console.log('组件加载失败', err);
                    this.setState({
                        Component: () => (
                            <Result
                                status="error"
                                title="组件加载失败！"
                                subTitle="请检查您的网络，确认无误后尝试刷新解决，若问题依然存在，请联系管理员。"
                                extra={
                                    <Button
                                        type="primary"
                                        key="console"
                                        onClick={() => location.reload()}
                                    >
                                        刷新
                                    </Button>
                                }
                            ></Result>
                        ),
                    });
                });
        };

        render() {
            const { Component } = this.state;
            return Component ? (
                <Component {...this.props} />
            ) : (
                <Spin
                    style={{ width: '100%', marginTop: 100 }}
                    tip="加载中..."
                />
            );
        }
    };

export default asyncComponent;
