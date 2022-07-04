import React from 'react';

class BaseDemo extends React.Component {
    constructor(props: any) {
        super(props);
    }
    state = {
        count: 1,
    };
    static getDerivedStateFromProps(props: any, state: any) {
        console.log('getDerivedStateFromProps');
        return { ...state };
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log('shouldComponentUpdate');
        return true;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button
                    onClick={() => {
                        this.setState((state: any) => ({
                            count: state.count + 1,
                        }));
                    }}
                >
                    +
                </button>
            </div>
        );
    }
}

export default BaseDemo;
