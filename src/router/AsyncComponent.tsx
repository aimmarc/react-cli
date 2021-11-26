import React, { useState, useEffect } from 'react';

const asyncComponent = (load: () => void) => (
    (props: any): React.ReactElement | null => {
        const [Component, setComponent]: [any, any] = useState(null);

        useEffect(() => {
            loadComponent();
        }, [])

        async function loadComponent() {
            load().then(module => module.default).then((Component: any) => {
                console.log('Component', Component);
                setComponent(Component);
            })
        }

        console.log('props',props);
        return (
            Component ? <Component {...props} /> : null
        )
    }
)

export default asyncComponent;