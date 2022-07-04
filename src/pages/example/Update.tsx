import React from 'react';

class Update extends React.Component {
    constructor(props: any) {
        super(props);
    }
    state = {
        count: 1,
    };
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log('shouldComponentUpdate');
        if (nextState.count < 5) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
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

export default Update;
