import React, { useEffect, useState } from 'react';

const BaseDemo: React.FC = (): React.ReactElement => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmount');
        };
    }, []);

    useEffect(() => {
        console.log('updated');
    }, [count]);

    useEffect(() => {
        console.log('updated');
    });

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
