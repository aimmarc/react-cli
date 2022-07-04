import React from 'react';

class BaseDemo extends React.Component {
    constructor(props: any) {
        super(props);
    }
    state = {
        count: 1,
    };

    componentDidMount() {
        console.log('componentDidMount');
        document.querySelector('#button')?.addEventListener('click', () => {
            this.incrementCount();
            this.incrementCount();
            this.incrementCount();
        });
    }

    incrementCount = () => {
        this.setState((state: any) => ({
            count: state.count + 1,
        }));
    };

    render() {
        console.log('render', this.state.count);
        return (
            <div>
                <span>{this.state.count}</span>
                <button
                    // onClick={() => {
                    //     this.incrementCount();
                    //     this.incrementCount();
                    //     this.incrementCount();
                    // }}
                    id="button"
                >
                    +
                </button>
            </div>
        );
    }
}

export default BaseDemo;
