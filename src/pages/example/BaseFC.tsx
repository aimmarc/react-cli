import React, { useState } from 'react';

const BaseDemo: React.FC = (props): React.ReactElement => {
    console.log(props);
    const [count, setCount] = useState(1);
    return (
        <div>
            <span>{count}</span>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default BaseDemo;
