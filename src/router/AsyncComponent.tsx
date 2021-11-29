import React from 'react';
import { LoaderModule } from 'webpack';
import { Spin } from 'antd'

type AsyncComponentState = {
    Component: any
}

const asyncComponent = (load: () => Promise<any>) => (
    class AsyncComponent extends React.Component<any, AsyncComponentState> {
        state: AsyncComponentState = { Component: null };

        componentDidMount() {
            this.loadComponent();
        }

        loadComponent = () => {
            load().then((module: LoaderModule) => {
                this.setState({
                    Component: module.default
                });
            }).catch(err => {
                this.setState({
                    Component: null
                })
            })
        }

        render() {
            const { Component } = this.state;
            return (
                Component ? <Component {...this.props} /> : <Spin style={{ width: "100%", marginTop: 200 }} tip="加载中..." />
            )
        }
    }
)

export default asyncComponent;